(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var oe,y,je,qe,E,xe,Be,Ke,_e,J,O,Ge,ve,pe,de,Q={},X=[],vt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function F(t,e){for(var n in e)t[n]=e[n];return t}function ye(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Ve(t,e,n){var i,s,r,o={};for(r in e)r=="key"?i=e[r]:r=="ref"?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?oe.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)o[r]===void 0&&(o[r]=t.defaultProps[r]);return Y(t,o,i,s,null)}function Y(t,e,n,i,s){var r={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++je,__i:-1,__u:0};return s==null&&y.vnode!=null&&y.vnode(r),r}function ae(t){return t.children}function R(t,e){this.props=t,this.context=e}function I(t,e){if(e==null)return t.__?I(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?I(t):null}function yt(t){if(t.__P&&t.__d){var e=t.__v,n=e.__e,i=[],s=[],r=F({},e);r.__v=e.__v+1,y.vnode&&y.vnode(r),ge(t.__P,r,e,t.__n,t.__P.namespaceURI,32&e.__u?[n]:null,i,n??I(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,Qe(i,r,s),e.__e=e.__=null,r.__e!=n&&ze(r)}}function ze(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),ze(t)}function Pe(t){(!t.__d&&(t.__d=!0)&&E.push(t)&&!ee.__r++||xe!=y.debounceRendering)&&((xe=y.debounceRendering)||Be)(ee)}function ee(){try{for(var t,e=1;E.length;)E.length>e&&E.sort(Ke),t=E.shift(),e=E.length,yt(t)}finally{E.length=ee.__r=0}}function Je(t,e,n,i,s,r,o,a,u,c,_){var p,l,f,h,C,d,b,v=i&&i.__k||X,x=e.length;for(u=gt(n,e,v,u,x),p=0;p<x;p++)(f=n.__k[p])!=null&&(l=f.__i!=-1&&v[f.__i]||Q,f.__i=p,d=ge(t,f,l,s,r,o,a,u,c,_),h=f.__e,f.ref&&l.ref!=f.ref&&(l.ref&&be(l.ref,null,f),_.push(f.ref,f.__c||h,f)),C==null&&h!=null&&(C=h),(b=!!(4&f.__u))||l.__k===f.__k?(u=Ye(f,u,t,b),b&&l.__e&&(l.__e=null)):typeof f.type=="function"&&d!==void 0?u=d:h&&(u=h.nextSibling),f.__u&=-7);return n.__e=C,u}function gt(t,e,n,i,s){var r,o,a,u,c,_=n.length,p=_,l=0;for(t.__k=new Array(s),r=0;r<s;r++)(o=e[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=t.__k[r]=Y(null,o,null,null,null):le(o)?o=t.__k[r]=Y(ae,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=t.__k[r]=Y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):t.__k[r]=o,u=r+l,o.__=t,o.__b=t.__b+1,a=null,(c=o.__i=bt(o,n,u,p))!=-1&&(p--,(a=n[c])&&(a.__u|=2)),a==null||a.__v==null?(c==-1&&(s>_?l--:s<_&&l++),typeof o.type!="function"&&(o.__u|=4)):c!=u&&(c==u-1?l--:c==u+1?l++:(c>u?l--:l++,o.__u|=4))):t.__k[r]=null;if(p)for(r=0;r<_;r++)(a=n[r])!=null&&(2&a.__u)==0&&(a.__e==i&&(i=I(a)),et(a,a));return i}function Ye(t,e,n,i){var s,r;if(typeof t.type=="function"){for(s=t.__k,r=0;s&&r<s.length;r++)s[r]&&(s[r].__=t,e=Ye(s[r],e,n,i));return e}t.__e!=e&&(i&&(e&&t.type&&!e.parentNode&&(e=I(t)),n.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function bt(t,e,n,i){var s,r,o,a=t.key,u=t.type,c=e[n],_=c!=null&&(2&c.__u)==0;if(c===null&&a==null||_&&a==c.key&&u==c.type)return n;if(i>(_?1:0)){for(s=n-1,r=n+1;s>=0||r<e.length;)if((c=e[o=s>=0?s--:r++])!=null&&(2&c.__u)==0&&a==c.key&&u==c.type)return o}return-1}function Fe(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||vt.test(e)?n:n+"px"}function V(t,e,n,i,s){var r,o;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||Fe(t.style,e,"");if(n)for(e in n)i&&n[e]==i[e]||Fe(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Ge,"$1")),o=e.toLowerCase(),e=o in t||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?i?n[O]=i[O]:(n[O]=ve,t.addEventListener(e,r?de:pe,r)):t.removeEventListener(e,r?de:pe,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function Ee(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e[J]==null)e[J]=ve++;else if(e[J]<n[O])return;return n(y.event?y.event(e):e)}}}function ge(t,e,n,i,s,r,o,a,u,c){var _,p,l,f,h,C,d,b,v,x,H,U,W,Ce,G,ce,P=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),r=[a=e.__e=n.__e]),(_=y.__b)&&_(e);e:if(typeof P=="function"){p=o.length;try{if(v=e.props,x=P.prototype&&P.prototype.render,H=(_=P.contextType)&&i[_.__c],U=_?H?H.props.value:_.__:i,n.__c?b=(l=e.__c=n.__c).__=l.__E:(x?e.__c=l=new P(v,U):(e.__c=l=new R(v,U),l.constructor=P,l.render=$t),H&&H.sub(l),l.state||(l.state={}),l.__n=i,f=l.__d=!0,l.__h=[],l._sb=[]),x&&l.__s==null&&(l.__s=l.state),x&&P.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=F({},l.__s)),F(l.__s,P.getDerivedStateFromProps(v,l.__s))),h=l.props,C=l.state,l.__v=e,f)x&&P.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),x&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(x&&P.getDerivedStateFromProps==null&&v!==h&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,U),e.__v==n.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,U)===!1){e.__v!=n.__v&&(l.props=v,l.state=l.__s,l.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(L){L&&(L.__=e)}),X.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&o.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,U),x&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(h,C,d)})}if(l.context=U,l.props=v,l.__P=t,l.__e=!1,W=y.__r,Ce=0,x)l.state=l.__s,l.__d=!1,W&&W(e),_=l.render(l.props,l.state,l.context),X.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,W&&W(e),_=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++Ce<25);l.state=l.__s,l.getChildContext!=null&&(i=F(F({},i),l.getChildContext())),x&&!f&&l.getSnapshotBeforeUpdate!=null&&(d=l.getSnapshotBeforeUpdate(h,C)),G=_!=null&&_.type===ae&&_.key==null?Xe(_.props.children):_,a=Je(t,le(G)?G:[G],e,n,i,s,r,o,a,u,c),l.base=e.__e,e.__u&=-161,l.__h.length&&o.push(l),b&&(l.__E=l.__=null)}catch(L){if(o.length=p,e.__v=null,u||r!=null){if(L.then){for(e.__u|=u?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;r!=null&&(r[r.indexOf(a)]=null),e.__e=a}else if(r!=null)for(ce=r.length;ce--;)ye(r[ce])}else e.__e=n.__e;e.__k==null&&(e.__k=n.__k||[]),L.then||Ze(e),y.__e(L,e,n)}}else r==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):a=e.__e=mt(n.__e,e,n,i,s,r,o,u,c);return(_=y.diffed)&&_(e),128&e.__u?void 0:a}function Ze(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Ze))}function Qe(t,e,n){for(var i=0;i<n.length;i++)be(n[i],n[++i],n[++i]);y.__c&&y.__c(e,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(r){r.call(s)})}catch(r){y.__e(r,s.__v)}})}function Xe(t){return typeof t!="object"||t==null||t.__b>0?t:le(t)?t.map(Xe):t.constructor!==void 0?null:F({},t)}function mt(t,e,n,i,s,r,o,a,u){var c,_,p,l,f,h,C,d=n.props||Q,b=e.props,v=e.type;if(v=="svg"?s="http://www.w3.org/2000/svg":v=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){t=f,r[c]=null;break}}if(t==null){if(v==null)return document.createTextNode(b);t=document.createElementNS(s,v,b.is&&b),a&&(y.__m&&y.__m(e,r),a=!1),r=null}if(v==null)d===b||a&&t.data==b||(t.data=b);else{if(r=v=="textarea"&&b.defaultValue!=null?null:r&&oe.call(t.childNodes),!a&&r!=null)for(d={},c=0;c<t.attributes.length;c++)d[(f=t.attributes[c]).name]=f.value;for(c in d)f=d[c],c=="dangerouslySetInnerHTML"?p=f:c=="children"||c in b||c=="value"&&"defaultValue"in b||c=="checked"&&"defaultChecked"in b||V(t,c,null,f,s);for(c in b)f=b[c],c=="children"?l=f:c=="dangerouslySetInnerHTML"?_=f:c=="value"?h=f:c=="checked"?C=f:a&&typeof f!="function"||d[c]===f||V(t,c,f,d[c],s);if(_)a||p&&(_.__html==p.__html||_.__html==t.innerHTML)||(t.innerHTML=_.__html),e.__k=[];else if(p&&(t.innerHTML=""),Je(e.type=="template"?t.content:t,le(l)?l:[l],e,n,i,v=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,o,r?r[0]:n.__k&&I(n,0),a,u),r!=null)for(c=r.length;c--;)ye(r[c]);a&&v!="textarea"||(c="value",v=="progress"&&h==null?t.removeAttribute("value"):h!=null&&(h!==t[c]||v=="progress"&&!h||v=="option"&&h!=d[c])&&V(t,c,h,d[c],s),c="checked",C!=null&&C!=t[c]&&V(t,c,C,d[c],s))}return t}function be(t,e,n){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(s){y.__e(s,n)}}function et(t,e,n){var i,s;if(y.unmount&&y.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||be(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){y.__e(r,e)}i.base=i.__P=i.__n=null}if(i=t.__k)for(s=0;s<i.length;s++)i[s]&&et(i[s],e,n||typeof t.type!="function");n||ye(t.__e),t.__c=t.__=t.__e=void 0}function $t(t,e,n){return this.constructor(t,n)}function St(t,e,n){var i,s,r,o;e==document&&(e=document.documentElement),y.__&&y.__(t,e),s=(i=!1)?null:e.__k,r=[],o=[],ge(e,t=e.__k=Ve(ae,null,[t]),s||Q,Q,e.namespaceURI,s?null:e.firstChild?oe.call(e.childNodes):null,r,s?s.__e:e.firstChild,i,o),Qe(r,t,o),t.props.children=null}oe=X.slice,y={__e:function(t,e,n,i){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(t)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,i||{}),o=s.__d),o)return s.__E=s}catch(a){t=a}throw t}},je=0,qe=function(t){return t!=null&&t.constructor===void 0},R.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=F({},this.state),typeof t=="function"&&(t=t(F({},n),this.props)),t&&F(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Pe(this))},R.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Pe(this))},R.prototype.render=ae,E=[],Be=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ke=function(t,e){return t.__v.__b-e.__v.__b},ee.__r=0,_e=Math.random().toString(8),J="__d"+_e,O="__a"+_e,Ge=/(PointerCapture)$|Capture$/i,ve=0,pe=Ee(!1),de=Ee(!0);var tt=function(t,e,n,i){var s;e[0]=0;for(var r=1;r<e.length;r++){var o=e[r++],a=e[r]?(e[0]|=o?1:2,n[e[r++]]):e[++r];o===3?i[0]=a:o===4?i[1]=Object.assign(i[1]||{},a):o===5?(i[1]=i[1]||{})[e[++r]]=a:o===6?i[1][e[++r]]+=a+"":o?(s=t.apply(a,tt(t,a,n,["",null])),i.push(s),a[0]?e[0]|=2:(e[r-2]=0,e[r]=s)):i.push(a)}return i},Ue=new Map;function wt(t){var e=Ue.get(this);return e||(e=new Map,Ue.set(this,e)),(e=tt(this,e.get(t)||(e.set(t,e=(function(n){for(var i,s,r=1,o="",a="",u=[0],c=function(l){r===1&&(l||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,l,o):r===3&&(l||o)?(u.push(3,l,o),r=2):r===2&&o==="..."&&l?u.push(4,l,0):r===2&&o&&!l?u.push(5,0,!0,o):r>=5&&((o||!l&&r===5)&&(u.push(r,0,o,s),r=6),l&&(u.push(r,l,0,s),r=6)),o=""},_=0;_<n.length;_++){_&&(r===1&&c(),c(_));for(var p=0;p<n[_].length;p++)i=n[_][p],r===1?i==="<"?(c(),u=[u],r=3):o+=i:r===4?o==="--"&&i===">"?(r=1,o=""):o=i+o[0]:a?i===a?a="":o+=i:i==='"'||i==="'"?a=i:i===">"?(c(),r=1):r&&(i==="="?(r=5,s=o,o=""):i==="/"&&(r<5||n[_][p+1]===">")?(c(),r===3&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):i===" "||i==="	"||i===`
`||i==="\r"?(c(),r=2):o+=i),r===3&&o==="!--"&&(r=4,u=u[0])}return c(),u})(t)),e),arguments,[])).length>1?e:e[0]}const $=wt.bind(Ve);var B,m,fe,Ne,te=0,nt=[],S=y,Ae=S.__b,Me=S.__r,Le=S.diffed,Ie=S.__c,De=S.unmount,Te=S.__;function me(t,e){S.__h&&S.__h(m,t,te||e),te=0;var n=m.__H||(m.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function kt(t){return te=1,Ct(rt,t)}function Ct(t,e,n){var i=me(B++,2);if(i.t=t,!i.__c&&(i.__=[rt(void 0,e),function(a){var u=i.__N?i.__N[0]:i.__[0],c=i.t(u,a);u!==c&&(i.__N=[c,i.__[1]],i.__c.setState({}))}],i.__c=m,!m.__f)){var s=function(a,u,c){if(!i.__c.__H)return!0;var _=!1,p=i.__c.props!==a;if(i.__c.__H.__.some(function(f){if(f.__N){_=!0;var h=f.__[0];f.__=f.__N,f.__N=void 0,h!==f.__[0]&&(p=!0)}}),r){var l=r.call(this,a,u,c);return _?l||p:l}return!_||p};m.__f=!0;var r=m.shouldComponentUpdate,o=m.componentWillUpdate;m.componentWillUpdate=function(a,u,c){if(this.__e){var _=r;r=void 0,s(a,u,c),r=_}o&&o.call(this,a,u,c)},m.shouldComponentUpdate=s}return i.__N||i.__}function xt(t,e){var n=me(B++,3);!S.__s&&it(n.__H,e)&&(n.__=t,n.u=e,m.__H.__h.push(n))}function Pt(t){return te=5,$e(function(){return{current:t}},[])}function $e(t,e){var n=me(B++,7);return it(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function Ft(){for(var t;t=nt.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(Z),e.__h.some(he),e.__h=[]}catch(n){e.__h=[],S.__e(n,t.__v)}}}S.__b=function(t){m=null,Ae&&Ae(t)},S.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Te&&Te(t,e)},S.__r=function(t){Me&&Me(t),B=0;var e=(m=t.__c).__H;e&&(fe===m?(e.__h=[],m.__h=[],e.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(e.__h.some(Z),e.__h.some(he),e.__h=[],B=0)),fe=m},S.diffed=function(t){Le&&Le(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(nt.push(e)!==1&&Ne===S.requestAnimationFrame||((Ne=S.requestAnimationFrame)||Et)(Ft)),e.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),fe=m=null},S.__c=function(t,e){e.some(function(n){try{n.__h.some(Z),n.__h=n.__h.filter(function(i){return!i.__||he(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],S.__e(i,n.__v)}}),Ie&&Ie(t,e)},S.unmount=function(t){De&&De(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.some(function(i){try{Z(i)}catch(s){e=s}}),n.__H=void 0,e&&S.__e(e,n.__v))};var He=typeof requestAnimationFrame=="function";function Et(t){var e,n=function(){clearTimeout(i),He&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(n,35);He&&(e=requestAnimationFrame(n))}function Z(t){var e=m,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),m=e}function he(t){var e=m;t.__c=t.__(),m=e}function it(t,e){return!t||t.length!==e.length||e.some(function(n,i){return n!==t[i]})}function rt(t,e){return typeof e=="function"?e(t):e}var Ut=Symbol.for("preact-signals");function Se(){if(A>1)A--;else{var t,e=!1;for((function(){var s=ie;for(ie=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var o=r.t;o!==void 0;o=o.x)o.i===s.i&&(o.i=r.i);s=s.o}})();q!==void 0;){var n=q;for(q=void 0,ne++;n!==void 0;){var i=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&ot(n))try{n.c()}catch(s){e||(t=s,e=!0)}n=i}}if(ne=0,A--,e)throw t}}var j,g=void 0;function ue(t){var e=g,n=j;g=void 0,j=void 0;try{return t()}finally{g=e,j=n}}var q=void 0,A=0,ne=0,We=0,ie=void 0,re=0;function st(t){if(g!==void 0){var e=t.n;if(e===void 0||e.t!==g)return e={i:0,S:t,p:g.s,n:void 0,t:g,e:void 0,x:void 0,r:e},g.s!==void 0&&(g.s.n=e),g.s=e,t.n=e,32&g.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=g.s,e.n=void 0,g.s.n=e,g.s=e),e}}function k(t,e){this.v=t,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}k.prototype.brand=Ut;k.prototype.h=function(){return!0};k.prototype.S=function(t){var e=this,n=this.t;n!==t&&t.e===void 0&&(t.x=n,this.t=t,n!==void 0?n.e=t:ue(function(){var i;(i=e.W)==null||i.call(e)}))};k.prototype.U=function(t){var e=this;if(this.t!==void 0){var n=t.e,i=t.x;n!==void 0&&(n.x=i,t.e=void 0),i!==void 0&&(i.e=n,t.x=void 0),t===this.t&&(this.t=i,i===void 0&&ue(function(){var s;(s=e.Z)==null||s.call(e)}))}};k.prototype.subscribe=function(t){var e=this;return ke(function(){var n=e.value;ue(function(){return t(n)})},{name:"sub"})};k.prototype.valueOf=function(){return this.value};k.prototype.toString=function(){return this.value+""};k.prototype.toJSON=function(){return this.value};k.prototype.peek=function(){var t=this;return ue(function(){return t.value})};Object.defineProperty(k.prototype,"value",{get:function(){var t=st(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(ne>100)throw new Error("Cycle detected");(function(n){A!==0&&ne===0&&n.l!==We&&(n.l=We,ie={S:n,v:n.v,i:n.i,o:ie})})(this),this.v=t,this.i++,re++,A++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Se()}}}});function w(t,e){return new k(t,e)}function ot(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function lt(t){for(var e=t.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0&&(e.r=n),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function at(t){for(var e=t.s,n=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):n=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}t.s=n}function M(t,e){k.call(this,void 0,e),this.x=t,this.s=void 0,this.g=re-1,this.f=4}M.prototype=new k;M.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===re))return!0;if(this.g=re,this.f|=1,this.i>0&&!ot(this))return this.f&=-2,!0;var t=g;try{lt(this),g=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return g=t,at(this),this.f&=-2,!0};M.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}k.prototype.S.call(this,t)};M.prototype.U=function(t){if(this.t!==void 0&&(k.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};M.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(M.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=st(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function N(t,e){return new M(t,e)}function ut(t){var e=t.m;if(t.m=void 0,typeof e=="function"){A++;var n=g;g=void 0;try{e()}catch(i){throw t.f&=-2,t.f|=8,we(t),i}finally{g=n,Se()}}}function we(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,ut(t)}function Nt(t){if(g!==this)throw new Error("Out-of-order effect");at(this),g=t,this.f&=-2,8&this.f&&we(this),Se()}function D(t,e){this.x=t,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e==null?void 0:e.name,j&&j.push(this)}D.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.m=e)}finally{t()}};D.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,ut(this),lt(this),A++;var t=g;return g=this,Nt.bind(this,t)};D.prototype.N=function(){2&this.f||(this.f|=2,this.u=q,q=this)};D.prototype.d=function(){this.f|=8,1&this.f||we(this)};D.prototype.dispose=function(){this.d()};function ke(t,e){var n=new D(t,e);try{n.c()}catch(s){throw n.d(),s}var i=n.d.bind(n);return i[Symbol.dispose]=i,i}var z;function T(t,e){y[t]=e.bind(null,y[t]||function(){})}function se(t){if(z){var e=z;z=void 0,e()}z=t&&t.S()}function ct(t){var e=this,n=t.data,i=Mt(n);i.value=n;var s=$e(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var o,a=e.__$u.S(),u=s.value;a(),qe(u)||((o=e.base)==null?void 0:o.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=u},N(function(){var o=i.value.value;return o===0?0:o===!0?"":o||""})},[]);return s.value}ct.displayName="_st";Object.defineProperties(k.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ct},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});T("__b",function(t,e){if(typeof e.type=="string"){var n,i=e.props;for(var s in i)if(s!=="children"){var r=i[s];r instanceof k&&(n||(e.__np=n={}),n[s]=r,i[s]=r.peek())}}t(e)});T("__r",function(t,e){t(e),se();var n,i=e.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=(function(s){var r;return ke(function(){r=this}),r.c=function(){i.__$f|=1,i.setState({})},r})())),se(n)});T("__e",function(t,e,n,i){se(),t(e,n,i)});T("diffed",function(t,e){se();var n;if(typeof e.type=="string"&&(n=e.__e)){var i=e.__np,s=e.props;if(i){var r=n.U;if(r)for(var o in r){var a=r[o];a!==void 0&&!(o in i)&&(a.d(),r[o]=void 0)}else n.U=r={};for(var u in i){var c=r[u],_=i[u];c===void 0?(c=At(n,u,_,s),r[u]=c):c.o(_,s)}}}t(e)});function At(t,e,n,i){var s=e in t&&t.ownerSVGElement===void 0,r=w(n);return{o:function(o,a){r.value=o,i=a},d:ke(function(){var o=r.value.value;i[e]!==o&&(i[e]=o,s?t[e]=o:o?t.setAttribute(e,o):t.removeAttribute(e))})}}T("unmount",function(t,e){if(typeof e.type=="string"){var n=e.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var s in i){var r=i[s];r&&r.d()}}}}else{var o=e.__c;if(o){var a=o.__$u;a&&(o.__$u=void 0,a.d())}}t(e)});T("__h",function(t,e,n,i){(i<3||i===9)&&(e.__$f|=2),t(e,n,i)});R.prototype.shouldComponentUpdate=function(t,e){if(this.__R)return!0;var n=this.__$u,i=n&&n.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var r in t)if(r!=="__source"&&t[r]!==this.props[r])return!0;for(var o in this.props)if(!(o in t))return!0;return!1};function Mt(t){return $e(function(){return w(t)},[])}const _t="listening-app:flagged-files";function Lt(){const t=new Map;return{getItem:e=>t.get(e)??null,setItem:(e,n)=>{t.set(e,n)}}}function It(){try{if(typeof localStorage<"u")return localStorage}catch{}return Lt()}function Dt(t){try{const e=t.getItem(_t),n=e?JSON.parse(e):[];return new Set(Array.isArray(n)?n:[])}catch{return new Set}}function Tt(t=It()){const e=w(Dt(t));function n(a){e.value=a,t.setItem(_t,JSON.stringify([...a]))}function i(a){return e.value.has(a)}function s(a){const u=new Set(e.value);u.has(a)?u.delete(a):u.add(a),n(u)}function r(a){if(!e.value.has(a))return;const u=new Set(e.value);u.delete(a),n(u)}function o(){n(new Set)}return{flaggedFiles:e,isFlagged:i,toggleFlag:s,unflag:r,clearAll:o}}const K=Tt(),Ht=[{value:"L1",label:"L1 — up to 4 syllables"},{value:"L2",label:"L2 — 5–6 syllables"},{value:"L3",label:"L3 — 7–9 syllables"},{value:"L4",label:"L4 — 10–15 syllables"}];function Wt({vm:t,contrasts:e}){const n=t.mode.value,i=t.granularity.value,s=t.difficulty.value,r=t.contrast.value,o=t.count.value,a=t.availableCount.value;return $`
    <div class="screen setup-screen">
      <h2>New session</h2>

      <fieldset class="field">
        <legend>Mode</legend>
        <label class="radio-row">
          <input
            type="radio"
            name="mode"
            checked=${n==="sounds"}
            onChange=${()=>t.setMode("sounds")}
          />
          Sounds only
        </label>
        <label class="radio-row">
          <input
            type="radio"
            name="mode"
            checked=${n==="sounds_tones"}
            onChange=${()=>t.setMode("sounds_tones")}
          />
          Sounds + tones
        </label>
      </fieldset>

      <fieldset class="field">
        <legend>Answer by</legend>
        <label class="radio-row">
          <input
            type="radio"
            name="granularity"
            checked=${i==="syllable"}
            onChange=${()=>t.setGranularity("syllable")}
          />
          Syllable (type each syllable)
        </label>
        <label class="radio-row">
          <input
            type="radio"
            name="granularity"
            checked=${i==="word"}
            onChange=${()=>t.setGranularity("word")}
          />
          Word (type each word, comma-separated)
        </label>
      </fieldset>

      <label class="field">
        <span>Difficulty</span>
        <select
          value=${s}
          onChange=${u=>t.setDifficulty(u.target.value)}
        >
          ${Ht.map(u=>$`<option value=${u.value}>${u.label}</option>`)}
        </select>
      </label>

      <label class="field">
        <span>Focus</span>
        <select
          value=${r}
          onChange=${u=>t.setContrast(u.target.value)}
        >
          <option value="all">All sounds</option>
          ${Object.entries(e).map(([u,c])=>$`<option value=${u}>${u} — ${c.description}</option>`)}
        </select>
      </label>

      <label class="field">
        <span>Samples per session</span>
        <input
          type="number"
          min="1"
          value=${o}
          onInput=${u=>t.setCount(Number(u.target.value))}
        />
      </label>

      <p class="hint" aria-live="polite">
        ${a} sample${a===1?"":"s"} available with this filter.
      </p>

      <button
        type="button"
        class="primary"
        disabled=${a===0}
        onClick=${()=>t.startSession()}
      >
        Start session
      </button>
    </div>
  `}function Ot({vm:t}){const e=Pt(null),n=t.currentSample.value,i=t.playCount.value,s=t.speed.value,r=t.subPhase.value,o=t.input.value,a=t.progress.value,u=t.currentResult.value,c=t.isLastSample.value,_=t.granularity.value,p=n?K.isFlagged(n.fileName):!1;if(xt(()=>{e.current&&(e.current.playbackRate=s)},[s]),!n)return null;function l(){t.play();const d=e.current;d&&(d.currentTime=0,d.playbackRate=t.speed.value,d.play())}function f(d){d.key==="Enter"&&(d.preventDefault(),t.verify())}function h(d){d.key==="Enter"&&(d.preventDefault(),t.next())}function C(d,b){return d>=b?"syllable correct":d>0?"syllable partial":"syllable wrong"}return $`
    <div class="screen drill-screen" onKeyDown=${r==="feedback"?h:void 0}>
      <p class="progress">Sample ${a.position} of ${a.total}</p>

      <div class="file-row">
        <span class="file-name">${n.fileName}</span>
        <button
          type="button"
          class=${p?"flag-btn flag-btn-active":"flag-btn"}
          onClick=${()=>K.toggleFlag(n.fileName)}
          aria-pressed=${p}
        >
          🚩 ${p?"Flagged":"Flag as bad"}
        </button>
      </div>

      <audio ref=${e} src=${n.file} preload="auto"></audio>

      <div class="playback-controls">
        <button type="button" class="primary" onClick=${l}>
          ▶ Play${i>0?` (${i}×)`:""}
        </button>
        <label class="speed-control">
          <span>Speed</span>
          <select
            value=${String(s)}
            onChange=${d=>t.setSpeed(Number(d.target.value))}
          >
            <option value="0.75">0.75×</option>
            <option value="1">1×</option>
          </select>
        </label>
      </div>

      ${r==="answering"?$`
            <div class="answer-area">
              <label for="pinyin-input">
                ${_==="word"?"Type the words you heard, comma-separated (any order is fine)":"Type what you heard (pinyin)"}
              </label>
              <input
                id="pinyin-input"
                type="text"
                autofocus
                autocomplete="off"
                autocapitalize="off"
                spellcheck=${!1}
                placeholder=${_==="word"?"e.g. ni3 hao3, ma5":void 0}
                value=${o}
                onInput=${d=>t.updateInput(d.target.value)}
                onKeyDown=${f}
              />
              <button type="button" class="primary" onClick=${()=>t.verify()}>Verify</button>
            </div>
          `:null}

      ${r==="feedback"&&u?$`
            <div class="feedback-area" role="status" aria-live="polite">
              <p>
                Correct: <strong>${n.transcript.replace(/-/g," ")}</strong>
              </p>
              <ul class="syllable-results">
                ${u.map((d,b)=>$`
                    <li key=${b} class=${C(d.earned,d.possible)}>
                      ${d.userSyllable??"—"} → ${d.keySyllable}
                    </li>
                  `)}
              </ul>
              <p class="plays-note">Played ${i} time${i===1?"":"s"}</p>
              <button type="button" class="primary" onClick=${()=>t.next()}>
                ${c?"Finish session":"Next"}
              </button>
            </div>
          `:null}
    </div>
  `}function Rt({vm:t}){const e=t.report.value;if(!e)return null;function n(i,s){return i>=s?"syllable correct":i>0?"syllable partial":"syllable wrong"}return $`
    <div class="screen report-screen">
      <h2 class="final-pct band-${e.band}">${e.finalPct.toFixed(1)}%</h2>
      <p class="band-message band-${e.band}" role="status">${e.message}</p>

      <p class="score-breakdown">
        Accuracy ${e.accuracyPct.toFixed(1)}%
        ${e.totalExtraPlays>0?$` − ${e.totalExtraPlays} extra play${e.totalExtraPlays===1?"":"s"}`:null}
      </p>

      <ol class="record-list">
        ${e.records.map((i,s)=>$`
            <li key=${s} class="record">
              <p class="record-transcript">
                <strong>${i.sample.transcript.replace(/-/g," ")}</strong>
                <span class="record-meta">
                  you typed "${i.answer||"(nothing)"}" · played ${i.playCount}×
                </span>
              </p>
              <ul class="syllable-results">
                ${i.syllables.map((r,o)=>$`
                    <li key=${o} class=${n(r.earned,r.possible)}>
                      ${r.userSyllable??"—"} → ${r.keySyllable}
                    </li>
                  `)}
              </ul>
            </li>
          `)}
      </ol>

      <button type="button" class="primary" onClick=${()=>t.reset()}>
        Start a new session
      </button>
    </div>
  `}function jt({onClose:t}){const e=[...K.flaggedFiles.value].sort();return $`
    <div class="modal-backdrop" onClick=${t}>
      <div class="modal" onClick=${n=>n.stopPropagation()} role="dialog" aria-label="Flagged files">
        <div class="modal-header">
          <h2>Flagged files (${e.length})</h2>
          <button type="button" class="modal-close" onClick=${t} aria-label="Close">✕</button>
        </div>

        ${e.length===0?$`<p class="hint">No files flagged yet. Flag a bad clip from the drill screen.</p>`:$`
              <ul class="flag-list">
                ${e.map(n=>$`
                    <li key=${n} class="flag-list-item">
                      <span class="file-name">${n}</span>
                      <button type="button" class="flag-btn" onClick=${()=>K.unflag(n)}>
                        Unflag
                      </button>
                    </li>
                  `)}
              </ul>
              <p class="hint">
                Delete these files from <code>public/audio/</code> and re-run
                <code>bun run build:manifest</code> to remove them for good.
              </p>
            `}
      </div>
    </div>
  `}function qt({vm:t,contrasts:e}){const n=t.phase.value,[i,s]=kt(!1),r=K.flaggedFiles.value.size;return $`
    <main class="app">
      <div class="app-header">
        <h1>Listening Trainer</h1>
        <button type="button" class="flag-btn" onClick=${()=>s(!0)}>
          🚩 Flagged files (${r})
        </button>
      </div>
      ${n==="setup"?$`<${Wt} vm=${t} contrasts=${e} />`:null}
      ${n==="drilling"?$`<${Ot} vm=${t} />`:null}
      ${n==="report"?$`<${Rt} vm=${t} />`:null}
      ${i?$`<${jt} onClose=${()=>s(!1)} />`:null}
    </main>
  `}function ft(t){const e=t.slice();for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function pt(t,e,n){return t.filter(i=>!(i.difficulty!==e||n!=="all"&&!i.contrasts.includes(n)))}function Bt(t,e,n,i,s=ft){const r=pt(t,e,n);return s(r).slice(0,i)}function Oe(t){const e=t.trim().toLowerCase().replace(/ü/g,"v"),n=e.match(/^([a-z]*)([1-5])?$/);if(!n)return{base:e,tone:null};const[,i,s]=n;return{base:i??"",tone:s?Number(s):null}}function dt(t){return t.trim().split(/[\s-]+/).filter(e=>e.length>0)}function Re(t,e){return t.base.length>0&&t.base===e.base}function Kt(t,e,n,i,s){if(s==="sounds"||n.tone===null)return{keySyllable:t,userSyllable:e,soundCorrect:!0,toneCorrect:null,earned:1,possible:1};const r=i.tone===n.tone;return{keySyllable:t,userSyllable:e,soundCorrect:!0,toneCorrect:r,earned:r?1:.5,possible:1}}function Gt(t,e,n,i,s){if(s==="sounds"||n.tone===null)return{keySyllable:t,userSyllable:e,soundCorrect:!1,toneCorrect:null,earned:0,possible:1};const r=i.tone===n.tone;return{keySyllable:t,userSyllable:e,soundCorrect:!1,toneCorrect:r,earned:r?.5:0,possible:1}}function Vt(t){return{keySyllable:t,userSyllable:null,soundCorrect:!1,toneCorrect:null,earned:0,possible:1}}function zt(t,e){const n=t.length,i=e.length,s=Array.from({length:n+1},()=>new Array(i+1).fill(0));for(let u=1;u<=n;u++)for(let c=1;c<=i;c++)Re(t[u-1],e[c-1])?s[u][c]=s[u-1][c-1]+1:s[u][c]=Math.max(s[u-1][c],s[u][c-1]);const r=new Array(n).fill(-1);let o=n,a=i;for(;o>0&&a>0;)Re(t[o-1],e[a-1])&&s[o][a]===s[o-1][a-1]+1?(r[o-1]=a-1,o-=1,a-=1):s[o-1][a]>=s[o][a-1]?o-=1:a-=1;return r}function ht(t,e,n){const i=dt(e),s=t.map(Oe),r=i.map(Oe),o=zt(s,r),a=new Set(o.filter(p=>p!==-1)),u=r.map((p,l)=>l).filter(p=>!a.has(p)),c=o.map((p,l)=>p===-1?l:-1).filter(p=>p!==-1),_=new Map;return c.forEach((p,l)=>{l<u.length&&_.set(p,u[l])}),t.map((p,l)=>{const f=o[l];if(f!==-1)return Kt(p,i[f],s[l],r[f],n);const h=_.get(l);return h!==void 0?Gt(p,i[h],s[l],r[h],n):Vt(p)})}function Jt(t){return t.split(",").map(e=>e.trim()).filter(e=>e.length>0)}function Yt(t,e,n){const i=Jt(e),s=new Array(i.length).fill(!1);return t.map(r=>{const o=dt(r),a=o.length;let u=-1,c=null,_=-1;for(let p=0;p<i.length;p++){if(s[p])continue;const l=ht(o,i[p],n),f=l.reduce((h,C)=>h+C.earned,0);f>_&&(_=f,u=p,c=l)}if(u!==-1&&_>0){s[u]=!0;const p=c.reduce((l,f)=>l+f.earned,0);return{keySyllable:r,userSyllable:i[u],soundCorrect:p===a,toneCorrect:null,earned:p,possible:a}}return{keySyllable:r,userSyllable:null,soundCorrect:!1,toneCorrect:null,earned:0,possible:a}})}function Zt(t,e,n,i,s="syllable"){const r=s==="word"?Yt(t.words,e,i):ht(t.syllables,e,i),o=r.reduce((u,c)=>u+c.earned,0),a=r.reduce((u,c)=>u+c.possible,0);return{sample:t,answer:e,playCount:n,extraPlays:Math.max(n-1,0),syllables:r,earned:o,possible:a}}function Qt(t){return t>90?"green":t>=80?"yellow":"red"}const Xt={red:"Keep trying.",yellow:"Almost there.",green:"You can increase the difficulty."};function en(t){const e=t.reduce((a,u)=>a+u.earned,0),n=t.reduce((a,u)=>a+u.possible,0),i=t.reduce((a,u)=>a+u.extraPlays,0),s=n>0?100*e/n:0,r=Math.max(0,s-i),o=Qt(r);return{records:t,totalEarned:e,totalPossible:n,totalExtraPlays:i,accuracyPct:s,finalPct:r,band:o,message:Xt[o]}}class tn{constructor(e,n={}){this.mode=w("sounds"),this.granularity=w("syllable"),this.difficulty=w("L1"),this.contrast=w("all"),this.count=w(10),this.phase=w("setup"),this.queue=w([]),this.index=w(0),this.records=w([]),this.subPhase=w("answering"),this.input=w(""),this.playCount=w(0),this.speed=w(1),this.currentResult=w(null),this.currentSample=N(()=>this.queue.value[this.index.value]??null),this.progress=N(()=>({position:this.index.value+1,total:this.queue.value.length})),this.canVerify=N(()=>this.subPhase.value==="answering"),this.isLastSample=N(()=>this.index.value===this.queue.value.length-1),this.availableCount=N(()=>pt(this.samples,this.difficulty.value,this.contrast.value).length),this.report=N(()=>this.phase.value==="report"?en(this.records.value):null),this.samples=e,this.shuffle=n.shuffle??ft}setMode(e){this.phase.value==="setup"&&(this.mode.value=e)}setGranularity(e){this.phase.value==="setup"&&(this.granularity.value=e)}setDifficulty(e){this.phase.value==="setup"&&(this.difficulty.value=e)}setContrast(e){this.phase.value==="setup"&&(this.contrast.value=e)}setCount(e){this.phase.value==="setup"&&(this.count.value=e)}startSession(){if(this.phase.value!=="setup")return;const e=Bt(this.samples,this.difficulty.value,this.contrast.value,this.count.value,this.shuffle);e.length!==0&&(this.queue.value=e,this.index.value=0,this.records.value=[],this.resetCurrentSampleSignals(),this.phase.value="drilling")}play(){this.phase.value==="drilling"&&(this.playCount.value+=1)}setSpeed(e){this.phase.value==="drilling"&&(this.speed.value=e)}updateInput(e){this.subPhase.value==="answering"&&(this.input.value=e)}verify(){if(this.subPhase.value!=="answering")return;const e=this.currentSample.value;if(!e)return;const n=Zt(e,this.input.value,this.playCount.value,this.mode.value,this.granularity.value);this.records.value=[...this.records.value,n],this.currentResult.value=n.syllables,this.subPhase.value="feedback"}next(){if(this.subPhase.value==="feedback"){if(this.isLastSample.value){this.phase.value="report";return}this.index.value+=1,this.resetCurrentSampleSignals()}}reset(){this.phase.value="setup",this.queue.value=[],this.index.value=0,this.records.value=[],this.resetCurrentSampleSignals()}resetCurrentSampleSignals(){this.subPhase.value="answering",this.input.value="",this.playCount.value=0,this.currentResult.value=null}}const nn={description:"Syllables ending in a plain -n final (contrast vs ng_final).",match:{endsWith:["n"],notEndsWith:["ng"]}},rn={description:"Syllables ending in -ng.",match:{endsWith:["ng"]}},sn={description:"Syllables with a ü/v sound and no nasal final (contrast vs u_n).",match:{endsWith:["v"],notEndsWith:["vn"]}},on={description:"Syllables ending in -vn (ün).",match:{endsWith:["vn"]}},ln={description:"q- initials (contrast vs x_initial).",match:{startsWith:["q"]}},an={description:"x- initials (contrast vs q_initial).",match:{startsWith:["x"]}},un={n_final:nn,ng_final:rn,u_no_n:sn,u_n:on,q_initial:ln,x_initial:an};async function cn(){const t=document.getElementById("app");if(!t)throw new Error("Missing #app root element");const e="./manifest.generated.json",n=await fetch(e);if(!n.ok)throw new Error(`Failed to load ${e}: ${n.status} ${n.statusText}`);const i=await n.json(),s=new tn(i.samples);St($`<${qt} vm=${s} contrasts=${un} />`,t)}cn().catch(t=>{console.error(t);const e=document.getElementById("app");e&&(e.textContent=`Failed to start: ${t instanceof Error?t.message:String(t)}`)});
