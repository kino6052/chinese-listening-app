import { describe, expect, test } from "bun:test";
import {
  compareSample,
  compareWords,
  parseSyllable,
  splitUserInput,
  splitWordsInput,
} from "../src/model/matching";

describe("parseSyllable", () => {
  test("splits base and trailing tone digit", () => {
    expect(parseSyllable("hao3")).toEqual({ base: "hao", tone: 3 });
  });

  test("no tone digit -> tone null", () => {
    expect(parseSyllable("hao")).toEqual({ base: "hao", tone: null });
  });

  test("is case-insensitive", () => {
    expect(parseSyllable("HAO3")).toEqual({ base: "hao", tone: 3 });
  });

  test("normalizes ü to v", () => {
    expect(parseSyllable("nv3")).toEqual({ base: "nv", tone: 3 });
    expect(parseSyllable("nü3")).toEqual({ base: "nv", tone: 3 });
  });

  test("trims whitespace", () => {
    expect(parseSyllable("  hao3  ")).toEqual({ base: "hao", tone: 3 });
  });
});

describe("splitUserInput", () => {
  test("splits on whitespace", () => {
    expect(splitUserInput("ni hao")).toEqual(["ni", "hao"]);
  });

  test("splits on dashes", () => {
    expect(splitUserInput("ni-hao")).toEqual(["ni", "hao"]);
  });

  test("tolerates mixed separators and repeated whitespace", () => {
    expect(splitUserInput("  ni  -hao   ma ")).toEqual(["ni", "hao", "ma"]);
  });

  test("empty input yields no syllables", () => {
    expect(splitUserInput("   ")).toEqual([]);
  });
});

describe("compareSample - sounds mode", () => {
  test("all correct", () => {
    const result = compareSample(["ni3", "hao3"], "ni hao", "sounds");
    expect(result).toEqual([
      { keySyllable: "ni3", userSyllable: "ni", soundCorrect: true, toneCorrect: null, earned: 1, possible: 1 },
      { keySyllable: "hao3", userSyllable: "hao", soundCorrect: true, toneCorrect: null, earned: 1, possible: 1 },
    ]);
  });

  test("tones on the key are ignored entirely", () => {
    // user typing the tone too should not matter in sounds mode
    const result = compareSample(["hao3"], "hao3", "sounds");
    expect(result[0]!.soundCorrect).toBe(true);
    expect(result[0]!.earned).toBe(1);
  });

  test("wrong sound is a full mismatch", () => {
    const result = compareSample(["hao3"], "how", "sounds");
    expect(result[0]).toEqual({
      keySyllable: "hao3",
      userSyllable: "how",
      soundCorrect: false,
      toneCorrect: null,
      earned: 0,
      possible: 1,
    });
  });

  test("missing syllable (user typed fewer) is a mismatch", () => {
    const result = compareSample(["ni3", "hao3"], "ni", "sounds");
    expect(result[1]).toEqual({
      keySyllable: "hao3",
      userSyllable: null,
      soundCorrect: false,
      toneCorrect: null,
      earned: 0,
      possible: 1,
    });
  });

  test("extra syllables beyond the key length are ignored for scoring", () => {
    const result = compareSample(["ni3"], "ni hao ma", "sounds");
    expect(result).toHaveLength(1);
    expect(result[0]!.earned).toBe(1);
  });
});

describe("compareSample - sounds_tones mode", () => {
  test("sound and tone both correct earns full credit", () => {
    const result = compareSample(["hao3"], "hao3", "sounds_tones");
    expect(result[0]).toEqual({
      keySyllable: "hao3",
      userSyllable: "hao3",
      soundCorrect: true,
      toneCorrect: true,
      earned: 1,
      possible: 1,
    });
  });

  test("right sound, wrong tone earns half credit", () => {
    const result = compareSample(["hao3"], "hao2", "sounds_tones");
    expect(result[0]!.soundCorrect).toBe(true);
    expect(result[0]!.toneCorrect).toBe(false);
    expect(result[0]!.earned).toBe(0.5);
  });

  test("right sound, missing tone earns half credit", () => {
    const result = compareSample(["hao3"], "hao", "sounds_tones");
    expect(result[0]!.soundCorrect).toBe(true);
    expect(result[0]!.toneCorrect).toBe(false);
    expect(result[0]!.earned).toBe(0.5);
  });

  test("wrong sound, right tone earns half credit", () => {
    const result = compareSample(["hao3"], "how3", "sounds_tones");
    expect(result[0]!.soundCorrect).toBe(false);
    expect(result[0]!.toneCorrect).toBe(true);
    expect(result[0]!.earned).toBe(0.5);
  });

  test("wrong sound and wrong tone earns zero", () => {
    const result = compareSample(["hao3"], "how2", "sounds_tones");
    expect(result[0]!.earned).toBe(0);
  });

  test("key syllable without a tone digit is not tone-graded, worth full credit on sound alone", () => {
    const result = compareSample(["hao"], "hao", "sounds_tones");
    expect(result[0]).toEqual({
      keySyllable: "hao",
      userSyllable: "hao",
      soundCorrect: true,
      toneCorrect: null,
      earned: 1,
      possible: 1,
    });
  });

  test("key syllable without a tone digit, user adds one anyway -> still full credit from sound", () => {
    const result = compareSample(["hao"], "hao3", "sounds_tones");
    expect(result[0]!.soundCorrect).toBe(true);
    expect(result[0]!.toneCorrect).toBe(null);
    expect(result[0]!.earned).toBe(1);
  });
});

describe("compareSample - gap alignment", () => {
  const key = ["ni3", "hao3", "ma5"];

  test("a missed leading syllable no longer shifts the rest out of alignment", () => {
    const result = compareSample(key, "hao3 ma5", "sounds_tones");
    expect(result[0]).toMatchObject({ keySyllable: "ni3", userSyllable: null, earned: 0 });
    expect(result[1]).toMatchObject({ keySyllable: "hao3", userSyllable: "hao3", earned: 1 });
    expect(result[2]).toMatchObject({ keySyllable: "ma5", userSyllable: "ma5", earned: 1 });
  });

  test("a missed trailing syllable doesn't affect anything before it", () => {
    const result = compareSample(key, "ni3 hao3", "sounds_tones");
    expect(result[0]).toMatchObject({ earned: 1 });
    expect(result[1]).toMatchObject({ earned: 1 });
    expect(result[2]).toMatchObject({ keySyllable: "ma5", userSyllable: null, earned: 0 });
  });

  test("a single wrong/missing syllable in the middle doesn't cascade to the syllable after it", () => {
    const result = compareSample(key, "ni3 ma5", "sounds_tones"); // skipped "hao3" entirely
    expect(result[0]).toMatchObject({ keySyllable: "ni3", userSyllable: "ni3", earned: 1 });
    expect(result[1]).toMatchObject({ keySyllable: "hao3", userSyllable: null, earned: 0 });
    expect(result[2]).toMatchObject({ keySyllable: "ma5", userSyllable: "ma5", earned: 1 }); // not shifted/misjudged
  });

  test("an extra inserted syllable in the middle is ignored, not treated as a shift either", () => {
    const result = compareSample(key, "ni3 extra hao3 ma5", "sounds_tones");
    expect(result.every((r) => r.earned === 1)).toBe(true);
  });

  test("a genuinely wrong syllable in the middle is still marked wrong, but doesn't shift what follows", () => {
    const result = compareSample(key, "ni3 zenme ma5", "sounds_tones"); // "zenme" instead of "hao3"
    expect(result[0]).toMatchObject({ earned: 1 });
    expect(result[1]).toMatchObject({ keySyllable: "hao3", userSyllable: "zenme", soundCorrect: false, earned: 0 });
    expect(result[2]).toMatchObject({ keySyllable: "ma5", userSyllable: "ma5", earned: 1 });
  });

  test("multiple consecutive missed syllables still don't shift what comes after them", () => {
    const result = compareSample(["a1", "b2", "c3", "d4"], "d4", "sounds_tones");
    expect(result[0]).toMatchObject({ userSyllable: null, earned: 0 });
    expect(result[1]).toMatchObject({ userSyllable: null, earned: 0 });
    expect(result[2]).toMatchObject({ userSyllable: null, earned: 0 });
    expect(result[3]).toMatchObject({ keySyllable: "d4", userSyllable: "d4", earned: 1 });
  });
});

describe("splitWordsInput", () => {
  test("splits on commas", () => {
    expect(splitWordsInput("zhe4, shi4 shang4, you3")).toEqual(["zhe4", "shi4 shang4", "you3"]);
  });

  test("tolerates extra whitespace around commas and words", () => {
    expect(splitWordsInput("  zhe4 ,  shi4  shang4 ,you3  ")).toEqual([
      "zhe4",
      "shi4  shang4",
      "you3",
    ]);
  });

  test("empty input yields no words", () => {
    expect(splitWordsInput("   ")).toEqual([]);
  });
});

describe("compareWords - sounds mode", () => {
  const keyWords = ["zhe4", "shi4 shang4", "you3"];

  test("all words correct, including a multi-syllable word (possible = syllable count)", () => {
    const result = compareWords(keyWords, "zhe4, shi4 shang4, you3", "sounds");
    expect(result).toEqual([
      { keySyllable: "zhe4", userSyllable: "zhe4", soundCorrect: true, toneCorrect: null, earned: 1, possible: 1 },
      {
        keySyllable: "shi4 shang4",
        userSyllable: "shi4 shang4",
        soundCorrect: true,
        toneCorrect: null,
        earned: 2,
        possible: 2,
      },
      { keySyllable: "you3", userSyllable: "you3", soundCorrect: true, toneCorrect: null, earned: 1, possible: 1 },
    ]);
  });

  test("tones on the key are ignored in sounds mode", () => {
    const result = compareWords(["shi4 shang4"], "shi shang", "sounds");
    expect(result[0]!.soundCorrect).toBe(true);
    expect(result[0]!.earned).toBe(2);
  });

  test("one wrong syllable in a multi-syllable word now earns partial credit, not zero", () => {
    const partial = compareWords(["shi4 shang4"], "shi4 lang4", "sounds");
    expect(partial[0]!.earned).toBe(1); // shi4 correct, lang4 doesn't match shang4
    expect(partial[0]!.possible).toBe(2);
    expect(partial[0]!.soundCorrect).toBe(false); // not FULLY correct

    const full = compareWords(["shi4 shang4"], "shi4 shang4", "sounds");
    expect(full[0]!.earned).toBe(2);
    expect(full[0]!.soundCorrect).toBe(true);
  });

  test("a word with fewer user syllables than the key still earns credit for the syllables that do align", () => {
    const result = compareWords(["shi4 shang4"], "shi4", "sounds");
    expect(result[0]!.soundCorrect).toBe(false); // not fully correct
    expect(result[0]!.earned).toBe(1); // shi4 aligns; shang4 is missing
    expect(result[0]!.possible).toBe(2);
  });

  test("missing word (user typed fewer words) is a full mismatch for that word", () => {
    const result = compareWords(keyWords, "zhe4, shi4 shang4", "sounds");
    expect(result[2]).toEqual({
      keySyllable: "you3",
      userSyllable: null,
      soundCorrect: false,
      toneCorrect: null,
      earned: 0,
      possible: 1,
    });
  });

  test("extra words beyond the key length are ignored for scoring", () => {
    const result = compareWords(["zhe4"], "zhe4, shi4 shang4, you3", "sounds");
    expect(result).toHaveLength(1);
    expect(result[0]!.earned).toBe(1);
  });
});

describe("compareWords - sounds_tones mode", () => {
  test("whole word matches including every internal tone", () => {
    const result = compareWords(["shi4 shang4"], "shi4 shang4", "sounds_tones");
    expect(result[0]!.soundCorrect).toBe(true);
    expect(result[0]!.earned).toBe(2);
    expect(result[0]!.possible).toBe(2);
  });

  test("one wrong tone inside a multi-syllable word costs only that syllable's credit, not the whole word", () => {
    const result = compareWords(["shi4 shang4"], "shi4 shang2", "sounds_tones");
    expect(result[0]!.soundCorrect).toBe(false); // not FULLY correct
    expect(result[0]!.earned).toBe(1.5); // shi4 full credit (1) + shang4 sound-only credit (0.5)
    expect(result[0]!.possible).toBe(2);
  });

  test("a key syllable with no tone digit only requires sound to match, within a word", () => {
    const result = compareWords(["shi shang4"], "shi3 shang4", "sounds_tones");
    // first syllable "shi" has no tone in the key, so any/no user tone is fine;
    // second syllable "shang4" must match tone 4 exactly.
    expect(result[0]!.soundCorrect).toBe(true);
    expect(result[0]!.earned).toBe(2);
    expect(result[0]!.possible).toBe(2);
  });
});

describe("compareWords - order independence", () => {
  const keyWords = ["zhe4", "shi4 shang4", "you3"];

  test("words typed in a different order than the key are all still credited (each fully)", () => {
    const result = compareWords(keyWords, "you3, zhe4, shi4 shang4", "sounds");
    expect(result.every((r) => r.earned === r.possible)).toBe(true);
    expect(result.reduce((sum, r) => sum + r.earned, 0)).toBe(4); // 1 (zhe4) + 2 (shi4 shang4) + 1 (you3)
  });

  test("each key word reports which user word satisfied it, even out of position", () => {
    const result = compareWords(keyWords, "you3, zhe4, shi4 shang4", "sounds");
    expect(result[0]).toMatchObject({ keySyllable: "zhe4", userSyllable: "zhe4", earned: 1 });
    expect(result[2]).toMatchObject({ keySyllable: "you3", userSyllable: "you3", earned: 1 });
  });

  test("a scrambled order with one genuinely wrong word only loses credit for the syllables that don't align", () => {
    const result = compareWords(keyWords, "you3, zhe4, lang4 shang4", "sounds");
    const earnedTotal = result.reduce((sum, r) => sum + r.earned, 0);
    // zhe4 (1) + you3 (1) fully captured; "shi4 shang4" is best-matched against
    // the leftover "lang4 shang4" -- shang4 aligns (earned 1), shi4 doesn't --
    // so it earns 1 of its 2 possible, for a partial-credit total of 3, not 2.
    expect(earnedTotal).toBe(3);
  });

  test("a repeated key word needs a separate matching user word for each occurrence", () => {
    // Only one "hao3" supplied, but the key asks for it twice -- one user
    // word must not be allowed to satisfy both key slots.
    const result = compareWords(["hao3", "hao3"], "hao3", "sounds");
    const earnedTotal = result.reduce((sum, r) => sum + r.earned, 0);
    expect(earnedTotal).toBe(1);
  });

  test("supplying the repeated word twice captures both occurrences", () => {
    const result = compareWords(["hao3", "hao3"], "hao3, hao3", "sounds");
    const earnedTotal = result.reduce((sum, r) => sum + r.earned, 0);
    expect(earnedTotal).toBe(2);
  });

  test("extra/unmatched user words beyond the key are simply not counted", () => {
    const result = compareWords(["zhe4"], "you3, zhe4, shi4 shang4", "sounds");
    expect(result).toHaveLength(1);
    expect(result[0]!.earned).toBe(1);
  });
});
