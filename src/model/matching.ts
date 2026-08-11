import type { Mode, SyllableResult } from "./types";

interface ParsedSyllable {
  base: string;
  tone: number | null;
}

/**
 * Normalizes one syllable token: lowercase, trim, ü->v, split trailing tone digit (1-5).
 */
export function parseSyllable(raw: string): ParsedSyllable {
  const cleaned = raw.trim().toLowerCase().replace(/ü/g, "v");
  const match = cleaned.match(/^([a-z]*)([1-5])?$/);
  if (!match) {
    return { base: cleaned, tone: null };
  }
  const [, base, tone] = match;
  return { base: base ?? "", tone: tone ? Number(tone) : null };
}

/**
 * Splits raw user input into syllable tokens. Whitespace and dashes are both
 * treated as separators and may mix freely.
 */
export function splitUserInput(input: string): string[] {
  return input
    .trim()
    .split(/[\s-]+/)
    .filter((s) => s.length > 0);
}

function baseSoundMatches(key: ParsedSyllable, user: ParsedSyllable): boolean {
  return key.base.length > 0 && key.base === user.base;
}

/**
 * Scores one already-aligned (key, user) pair. Alignment already guarantees
 * the base sound matches (see compareSample), so soundCorrect is always
 * true here -- the only open question is tone, in sounds_tones mode.
 */
function scoreAlignedPair(
  keySyllable: string,
  userRaw: string,
  key: ParsedSyllable,
  user: ParsedSyllable,
  mode: Mode,
): SyllableResult {
  if (mode === "sounds" || key.tone === null) {
    return {
      keySyllable,
      userSyllable: userRaw,
      soundCorrect: true,
      toneCorrect: null,
      earned: 1,
      possible: 1,
    };
  }
  const toneCorrect = user.tone === key.tone;
  return {
    keySyllable,
    userSyllable: userRaw,
    soundCorrect: true,
    toneCorrect,
    earned: toneCorrect ? 1 : 0.5,
    possible: 1,
  };
}

/**
 * Scores a key syllable that has no alignment partner but does have a
 * "leftover" user syllable nearby (see compareSample) -- i.e. a genuine
 * wrong guess, not an omission. Sound is wrong by construction (that's why
 * it didn't align); tone is still graded independently in sounds_tones
 * mode, so a wrong syllable that happens to carry the right tone digit
 * still earns partial credit, same as this app has always done.
 */
function scoreMismatchedPair(
  keySyllable: string,
  userRaw: string,
  key: ParsedSyllable,
  user: ParsedSyllable,
  mode: Mode,
): SyllableResult {
  if (mode === "sounds" || key.tone === null) {
    return { keySyllable, userSyllable: userRaw, soundCorrect: false, toneCorrect: null, earned: 0, possible: 1 };
  }
  const toneCorrect = user.tone === key.tone;
  return {
    keySyllable,
    userSyllable: userRaw,
    soundCorrect: false,
    toneCorrect,
    earned: toneCorrect ? 0.5 : 0,
    possible: 1,
  };
}

function missingResult(keySyllable: string): SyllableResult {
  return { keySyllable, userSyllable: null, soundCorrect: false, toneCorrect: null, earned: 0, possible: 1 };
}

/**
 * Aligns the key syllables against the user's syllables using longest
 * common subsequence (LCS), matched by base sound (tone-blind). This is
 * what lets a single missed, mistyped, or extra syllable -- anywhere in the
 * sentence, leading, trailing, or in the middle -- be skipped over without
 * cascading into a positional shift that marks every syllable after it
 * wrong too. Returns, per key index, the aligned user index or -1 if that
 * key syllable has no alignment (a gap).
 */
function alignByBaseSound(key: ParsedSyllable[], user: ParsedSyllable[]): number[] {
  const n = key.length;
  const m = user.length;

  // dp[i][j] = length of the best alignment between key[0..i) and user[0..j)
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (baseSoundMatches(key[i - 1]!, user[j - 1]!)) {
        dp[i]![j] = dp[i - 1]![j - 1]! + 1;
      } else {
        dp[i]![j] = Math.max(dp[i - 1]![j]!, dp[i]![j - 1]!);
      }
    }
  }

  // Backtrack to recover which key index aligns to which user index.
  const alignment = new Array<number>(n).fill(-1);
  let i = n;
  let j = m;
  while (i > 0 && j > 0) {
    if (baseSoundMatches(key[i - 1]!, user[j - 1]!) && dp[i]![j] === dp[i - 1]![j - 1]! + 1) {
      alignment[i - 1] = j - 1;
      i -= 1;
      j -= 1;
    } else if (dp[i - 1]![j]! >= dp[i]![j - 1]!) {
      i -= 1; // key[i-1] is a gap: no alignable user syllable
    } else {
      j -= 1; // user[j-1] is extra/unmatched: ignored, same as today's "extra input" rule
    }
  }

  return alignment;
}

/**
 * Compares one user answer against one sample's key syllables. Uses a
 * sequence alignment (see alignByBaseSound) rather than strict positional
 * pairing, so gaps -- a missed leading syllable, a missed trailing one, or
 * a single wrong/missing syllable stuck in the middle -- don't shift every
 * syllable after them out of alignment.
 *
 * Key syllables that don't align are then, in a second pass, matched up
 * with whatever *unaligned* user syllables are left over, in order --
 * distinguishing "you typed something, it was just wrong" (scored as a
 * mismatch, with independent tone credit) from "you didn't type anything
 * for this at all" (scored as missing).
 */
export function compareSample(
  keySyllables: string[],
  userInput: string,
  mode: Mode,
): SyllableResult[] {
  const userRaw = splitUserInput(userInput);
  const key = keySyllables.map(parseSyllable);
  const user = userRaw.map(parseSyllable);

  const alignment = alignByBaseSound(key, user);

  const consumedUserIndices = new Set(alignment.filter((j) => j !== -1));
  const leftoverUserIndices = user.map((_, j) => j).filter((j) => !consumedUserIndices.has(j));

  const unalignedKeyIndices = alignment.map((j, i) => (j === -1 ? i : -1)).filter((i) => i !== -1);
  const leftoverPairing = new Map<number, number>(); // key index -> leftover user index
  unalignedKeyIndices.forEach((keyIndex, k) => {
    if (k < leftoverUserIndices.length) leftoverPairing.set(keyIndex, leftoverUserIndices[k]!);
  });

  return keySyllables.map((keySyllable, i): SyllableResult => {
    const alignedUserIndex = alignment[i]!;
    if (alignedUserIndex !== -1) {
      return scoreAlignedPair(keySyllable, userRaw[alignedUserIndex]!, key[i]!, user[alignedUserIndex]!, mode);
    }
    const leftoverUserIndex = leftoverPairing.get(i);
    if (leftoverUserIndex !== undefined) {
      return scoreMismatchedPair(keySyllable, userRaw[leftoverUserIndex]!, key[i]!, user[leftoverUserIndex]!, mode);
    }
    return missingResult(keySyllable);
  });
}

/**
 * Splits raw user input into word tokens for word-granularity mode: words
 * are comma-separated, and each word's own syllables stay space-separated
 * within its segment, e.g. "zhe4, shi4 shang4, you3".
 */
export function splitWordsInput(input: string): string[] {
  return input
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * Compares one user answer against a sample's word-level key. Word mode is
 * a word-*identification* task, not a transcription-in-order task: order
 * doesn't matter, only which words were correctly captured, with partial
 * credit for partially-correct words.
 *
 * For each key word, every still-unconsumed user word is scored as a
 * candidate pairing by reusing compareSample -- a "word" is just a short
 * syllable sequence, so the same gap-tolerant alignment and sound/tone
 * partial-credit logic applies directly, without duplicating it. Whichever
 * candidate earns the most is consumed (greedy best-match; not a globally
 * optimal assignment, but sessions are short enough that this is a
 * reasonable simplification -- the same class of trade-off the original
 * order-independent matching already accepted).
 *
 * `possible` per word is that word's syllable count (not a flat 1), so a
 * sample's total possible in word mode equals its total syllable count --
 * the same denominator syllable mode uses. `soundCorrect` means "fully
 * correct" (earned === possible), not merely "some match was found".
 */
export function compareWords(keyWords: string[], userInput: string, mode: Mode): SyllableResult[] {
  const userWords = splitWordsInput(userInput);
  const consumed = new Array<boolean>(userWords.length).fill(false);

  return keyWords.map((keyWord): SyllableResult => {
    const keySyllables = splitUserInput(keyWord);
    const possible = keySyllables.length;

    let bestIndex = -1;
    let bestUnits: SyllableResult[] | null = null;
    let bestEarned = -1;

    for (let j = 0; j < userWords.length; j++) {
      if (consumed[j]) continue;
      const units = compareSample(keySyllables, userWords[j]!, mode);
      const earned = units.reduce((sum, u) => sum + u.earned, 0);
      if (earned > bestEarned) {
        bestEarned = earned;
        bestIndex = j;
        bestUnits = units;
      }
    }

    if (bestIndex !== -1 && bestEarned > 0) {
      consumed[bestIndex] = true;
      const earned = bestUnits!.reduce((sum, u) => sum + u.earned, 0);
      return {
        keySyllable: keyWord,
        userSyllable: userWords[bestIndex]!,
        soundCorrect: earned === possible,
        toneCorrect: null,
        earned,
        possible,
      };
    }

    return { keySyllable: keyWord, userSyllable: null, soundCorrect: false, toneCorrect: null, earned: 0, possible };
  });
}
