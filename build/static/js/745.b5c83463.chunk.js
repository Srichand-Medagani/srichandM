"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[745],{745:(e,n,t)=>{t.d(n,{ZP:()=>Je});var r=t(791);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}const i=["children","options"];var c,o,a;(a=c||(c={})).blockQuote="0",a.breakLine="1",a.breakThematic="2",a.codeBlock="3",a.codeFenced="4",a.codeInline="5",a.footnote="6",a.footnoteReference="7",a.gfmTask="8",a.heading="9",a.headingSetext="10",a.htmlBlock="11",a.htmlComment="12",a.htmlSelfClosing="13",a.image="14",a.link="15",a.linkAngleBraceStyleDetector="16",a.linkBareUrlDetector="17",a.linkMailtoDetector="18",a.newlineCoalescer="19",a.orderedList="20",a.paragraph="21",a.ref="22",a.refImage="23",a.refLink="24",a.table="25",a.tableSeparator="26",a.text="27",a.textBolded="28",a.textEmphasized="29",a.textEscaped="30",a.textMarked="31",a.textStrikethroughed="32",a.unorderedList="33",function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(o||(o={}));const s=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,n)=>(e[n.toLowerCase()]=n,e)),{for:"htmlFor"}),d={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},u=["style","script"],p=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,h=/\n{2,}$/,m=/^(\s*>[\s\S]*?)(?=\n{2,})/,g=/^ *> ?/gm,y=/^ {2,}\n/,k=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,x=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,v=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,b=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,E=/\r\n?/g,S=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,C=/^\[\^([^\]]+)]/,A=/\f/g,O=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,$=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,L=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,R=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,z=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,M=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,I=/^<!--[\s\S]*?(?:-->)/,U=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,j=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,B=/^\{.*\}$/,N=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,_=/^<([^ >]+@[^ >]+)>/,H=/^<([^ >]+:\/[^ >]+)>/,P=/-([a-z])?/gi,D=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,F=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,W=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/^\[([^\]]*)\] ?\[([^\]]*)\]/,G=/(\[|\])/g,q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,V=/\t/g,X=/(^ *\||\| *$)/g,Q=/^ *:-+: *$/,J=/^ *:-+ *$/,K=/^ *-+: *$/,Y="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",ee=new RegExp("^([*_])\\1".concat(Y,"\\1\\1(?!\\1)")),ne=new RegExp("^([*_])".concat(Y,"\\1(?!\\1|\\w)")),te=new RegExp("^==".concat(Y,"==")),re=new RegExp("^~~".concat(Y,"~~")),le=/^\\([^0-9A-Za-z\s])/,ie=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ce=/^\n+/,oe=/^([ \t]*)/,ae=/\\([^\\])/g,se=/ *\n+$/,de=/(?:^|\n)( *)$/,ue="(?:\\d+\\.)",pe="(?:[*+-])";function fe(e){return"( *)("+(1===e?ue:pe)+") +"}const he=fe(1),me=fe(2);function ge(e){return new RegExp("^"+(1===e?he:me))}const ye=ge(1),ke=ge(2);function xe(e){return new RegExp("^"+(1===e?he:me)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ue:pe)+" )[^\\n]*)*(\\n|$)","gm")}const ve=xe(1),be=xe(2);function we(e){const n=1===e?ue:pe;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}const Ee=we(1),Se=we(2);function Ce(e,n){const t=1===n,r=t?Ee:Se,l=t?ve:be,i=t?ye:ke;return{match(e,n,t){const l=de.exec(t);return l&&(n.list||!n.inline&&!n.simple)?r.exec(e=l[1]+e):null},order:1,parse(e,n,r){const c=t?+e[2]:void 0,o=e[0].replace(h,"\n").match(l);let a=!1;return{items:o.map((function(e,t){const l=i.exec(e)[0].length,c=new RegExp("^ {1,"+l+"}","gm"),s=e.replace(c,"").replace(i,""),d=t===o.length-1,u=-1!==s.indexOf("\n\n")||d&&a;a=u;const p=r.inline,f=r.list;let h;r.list=!0,u?(r.inline=!1,h=s.replace(se,"\n\n")):(r.inline=!0,h=s.replace(se,""));const m=n(h,r);return r.inline=p,r.list=f,m})),ordered:t,start:c}},render:(n,t,r)=>e(n.ordered?"ol":"ul",{key:r.key,start:"20"===n.type?n.start:void 0},n.items.map((function(n,l){return e("li",{key:l},t(n,r))})))}}const Ae=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Oe=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,$e=[m,x,v,T,R,L,I,D,ve,Ee,be,Se],Te=[...$e,/^[^\n]+(?:  \n|\n{2,})/,z,j];function Le(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Re(e){return K.test(e)?"right":Q.test(e)?"center":J.test(e)?"left":null}function ze(e,n,t,r){const l=t.inTable;t.inTable=!0;let i=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(((e,l)=>("|"===l.trim()?e.push(r?{type:"26"}:{type:"27",text:l}):""!==l&&e.push.apply(e,n(l,t)),e)),[]);t.inTable=l;let c=[[]];return i.forEach((function(e,n){"26"===e.type?0!==n&&n!==i.length-1&&c.push([]):("27"!==e.type||null!=i[n+1]&&"26"!==i[n+1].type||(e.text=e.text.trimEnd()),c[c.length-1].push(e))})),c}function Me(e,n,t){t.inline=!0;const r=e[2]?e[2].replace(X,"").split("|").map(Re):[],l=e[3]?function(e,n,t){return e.trim().split("\n").map((function(e){return ze(e,n,t,!0)}))}(e[3],n,t):[],i=ze(e[1],n,t,!!l.length);return t.inline=!1,l.length?{align:r,cells:l,header:i,type:"25"}:{children:i,type:"21"}}function Ie(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function Ue(e){return function(n,t){return t.inline?e.exec(n):null}}function je(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function Be(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function Ne(e){return function(n){return e.exec(n)}}function _e(e,n,t){if(n.inline||n.simple)return null;if(t&&!t.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!$e.some((n=>n.test(e)))&&(r+=e+"\n",e.trim())));const l=r.trimEnd();return""==l?null:[r,l]}function He(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(e){return null}return e}function Pe(e){return e.replace(ae,"$1")}function De(e,n,t){const r=t.inline||!1,l=t.simple||!1;t.inline=!0,t.simple=!0;const i=e(n,t);return t.inline=r,t.simple=l,i}function Fe(e,n,t){const r=t.inline||!1,l=t.simple||!1;t.inline=!1,t.simple=!0;const i=e(n,t);return t.inline=r,t.simple=l,i}function We(e,n,t){const r=t.inline||!1;t.inline=!1;const l=e(n,t);return t.inline=r,l}const Ze=(e,n,t)=>({children:De(n,e[1],t)});function Ge(){return{}}function qe(){return null}function Ve(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}function Xe(e,n,t){let r=e;const l=n.split(".");for(;l.length&&(r=r[l[0]],void 0!==r);)l.shift();return r||t}function Qe(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.overrides=n.overrides||{},n.slugify=n.slugify||Le,n.namedCodesToUnicode=n.namedCodesToUnicode?l({},d,n.namedCodesToUnicode):d;const t=n.createElement||r.createElement;function i(e,r){const i=Xe(n.overrides,"".concat(e,".props"),{});for(var c=arguments.length,o=new Array(c>2?c-2:0),a=2;a<c;a++)o[a-2]=arguments[a];return t(function(e,n){const t=Xe(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:Xe(n,"".concat(e,".component"),e):e}(e,n.overrides),l({},r,i,{className:Ve(null==r?void 0:r.className,i.className)||void 0}),...o)}function c(e){e=e.replace(O,"");let t=!1;n.forceInline?t=!0:n.forceBlock||(t=!1===q.test(e));const l=J(Q(t?e:"".concat(e.trimEnd().replace(ce,""),"\n\n"),{inline:t}));for(;"string"==typeof l[l.length-1]&&!l[l.length-1].trim();)l.pop();if(null===n.wrapper)return l;const c=n.wrapper||(t?"span":"div");let o;if(l.length>1||n.forceWrapper)o=l;else{if(1===l.length)return o=l[0],"string"==typeof o?i("span",{key:"outer"},o):o;o=null}return r.createElement(c,{key:"outer"},o)}function o(e){const n=e.match(p);return n?n.reduce((function(e,n,t){const l=n.indexOf("=");if(-1!==l){const i=function(e){return-1!==e.indexOf("-")&&null===e.match(U)&&(e=e.replace(P,(function(e,n){return n.toUpperCase()}))),e}(n.slice(0,l)).trim(),o=function(e){const n=e[0];return('"'===n||"'"===n)&&e.length>=2&&e[e.length-1]===n?e.slice(1,-1):e}(n.slice(l+1).trim()),a=s[i]||i,d=e[a]=function(e,n){return"style"===e?n.split(/;\s?/).reduce((function(e,n){const t=n.slice(0,n.indexOf(":"));return e[t.trim().replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=n.slice(t.length+1).trim(),e}),{}):"href"===e||"src"===e?He(n):(n.match(B)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(i,o);"string"==typeof d&&(z.test(d)||j.test(d))&&(e[a]=r.cloneElement(c(d.trim()),{key:t}))}else"style"!==n&&(e[s[n]||n]=!0);return e}),{}):null}const a=[],h={},X={0:{match:Be(m),order:1,parse:(e,n,t)=>({children:n(e[0].replace(g,""),t)}),render:(e,n,t)=>i("blockquote",{key:t.key},n(e.children,t))},1:{match:Ne(y),order:1,parse:Ge,render:(e,n,t)=>i("br",{key:t.key})},2:{match:Be(k),order:1,parse:Ge,render:(e,n,t)=>i("hr",{key:t.key})},3:{match:Be(v),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,t)=>i("pre",{key:t.key},i("code",l({},e.attrs,{className:e.lang?"lang-".concat(e.lang):""}),e.text))},4:{match:Be(x),order:0,parse:e=>({attrs:o(e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"})},5:{match:je(b),order:3,parse:e=>({text:e[2]}),render:(e,n,t)=>i("code",{key:t.key},e.text)},6:{match:Be(S),order:0,parse:e=>(a.push({footnote:e[2],identifier:e[1]}),{}),render:qe},7:{match:Ue(C),order:1,parse:e=>({target:"#".concat(n.slugify(e[1])),text:e[1]}),render:(e,n,t)=>i("a",{key:t.key,href:He(e.target)},i("sup",{key:t.key},e.text))},8:{match:Ue($),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,n,t)=>i("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})},9:{match:Be(n.enforceAtxHeadings?L:T),order:1,parse:(e,t,r)=>({children:De(t,e[2],r),id:n.slugify(e[2]),level:e[1].length}),render:(e,n,t)=>i("h".concat(e.level),{id:e.id,key:t.key},n(e.children,t))},10:{match:Be(R),order:0,parse:(e,n,t)=>({children:De(n,e[1],t),level:"="===e[2]?1:2,type:"9"})},11:{match:Ne(z),order:1,parse(e,n,t){const[,r]=e[3].match(oe),l=new RegExp("^".concat(r),"gm"),i=e[3].replace(l,""),c=(a=i,Te.some((e=>e.test(a)))?We:De);var a;const s=e[1].toLowerCase(),d=-1!==u.indexOf(s),p={attrs:o(e[2]),noInnerParse:d,tag:(d?s:e[1]).trim()};return t.inAnchor=t.inAnchor||"a"===s,d?p.text=e[3]:p.children=c(n,i,t),t.inAnchor=!1,p},render:(e,n,t)=>i(e.tag,l({key:t.key},e.attrs),e.text||n(e.children,t))},13:{match:Ne(j),order:1,parse:e=>({attrs:o(e[2]||""),tag:e[1].trim()}),render:(e,n,t)=>i(e.tag,l({},e.attrs,{key:t.key}))},12:{match:Ne(I),order:1,parse:()=>({}),render:qe},14:{match:je(Oe),order:1,parse:e=>({alt:e[1],target:Pe(e[2]),title:e[3]}),render:(e,n,t)=>i("img",{key:t.key,alt:e.alt||void 0,title:e.title||void 0,src:He(e.target)})},15:{match:Ue(Ae),order:3,parse:(e,n,t)=>({children:Fe(n,e[1],t),target:Pe(e[2]),title:e[3]}),render:(e,n,t)=>i("a",{key:t.key,href:He(e.target),title:e.title},n(e.children,t))},16:{match:Ue(H),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],type:"15"})},17:{match:(e,n)=>n.inAnchor?null:Ue(N)(e,n),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"})},18:{match:Ue(_),order:0,parse(e){let n=e[1],t=e[1];return f.test(t)||(t="mailto:"+t),{children:[{text:n.replace("mailto:",""),type:"27"}],target:t,type:"15"}}},20:Ce(i,1),33:Ce(i,2),19:{match:Be(w),order:3,parse:Ge,render:()=>"\n"},21:{match:_e,order:3,parse:Ze,render:(e,n,t)=>i("p",{key:t.key},n(e.children,t))},22:{match:Ue(F),order:0,parse:e=>(h[e[1]]={target:e[2],title:e[4]},{}),render:qe},23:{match:je(W),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,n,t)=>h[e.ref]?i("img",{key:t.key,alt:e.alt,src:He(h[e.ref].target),title:h[e.ref].title}):null},24:{match:Ue(Z),order:0,parse:(e,n,t)=>({children:n(e[1],t),fallbackChildren:n(e[0].replace(G,"\\$1"),t),ref:e[2]}),render:(e,n,t)=>h[e.ref]?i("a",{key:t.key,href:He(h[e.ref].target),title:h[e.ref].title},n(e.children,t)):i("span",{key:t.key},n(e.fallbackChildren,t))},25:{match:Be(D),order:1,parse:Me,render(e,n,t){const r=e;return i("table",{key:t.key},i("thead",null,i("tr",null,r.header.map((function(e,l){return i("th",{key:l,style:Ie(r,l)},n(e,t))})))),i("tbody",null,r.cells.map((function(e,l){return i("tr",{key:l},e.map((function(e,l){return i("td",{key:l,style:Ie(r,l)},n(e,t))})))}))))}},27:{match:Ne(ie),order:4,parse:e=>({text:e[0].replace(M,((e,t)=>n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e))}),render:e=>e.text},28:{match:je(ee),order:2,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,t)=>i("strong",{key:t.key},n(e.children,t))},29:{match:je(ne),order:3,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,t)=>i("em",{key:t.key},n(e.children,t))},30:{match:je(le),order:1,parse:e=>({text:e[1],type:"27"})},31:{match:je(te),order:3,parse:Ze,render:(e,n,t)=>i("mark",{key:t.key},n(e.children,t))},32:{match:je(re),order:3,parse:Ze,render:(e,n,t)=>i("del",{key:t.key},n(e.children,t))}};!0===n.disableParsingRawHTML&&(delete X[11],delete X[13]);const Q=function(e){let n=Object.keys(e);function t(r,l){let i=[],c="";for(;r;){let o=0;for(;o<n.length;){const a=n[o],s=e[a],d=s.match(r,l,c);if(d){const e=d[0];r=r.substring(e.length);const n=s.parse(d,t,l);null==n.type&&(n.type=a),i.push(n),c=e;break}o++}}return i}return n.sort((function(n,t){let r=e[n].order,l=e[t].order;return r!==l?r-l:n<t?-1:1})),function(e,n){return t(function(e){return e.replace(E,"\n").replace(A,"").replace(V,"    ")}(e),n)}}(X),J=(K=function(e,n){return function(t,r,l){const i=e[t.type].render;return n?n((()=>i(t,r,l)),t,r,l):i(t,r,l)}}(X,n.renderRule),function e(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(n)){const r=t.key,l=[];let i=!1;for(let c=0;c<n.length;c++){t.key=c;const r=e(n[c],t),o="string"==typeof r;o&&i?l[l.length-1]+=r:null!==r&&l.push(r),i=o}return t.key=r,l}return K(n,e,t)});var K;const Y=c(e);return a.length?i("div",null,Y,i("footer",{key:"footer"},a.map((function(e){return i("div",{id:n.slugify(e.identifier),key:e.identifier},e.identifier,J(Q(e.footnote,{inline:!0})))})))):Y}const Je=e=>{let{children:n="",options:t}=e,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(l[t]=e[t]);return l}(e,i);return r.cloneElement(Qe(n,t),l)}}}]);
//# sourceMappingURL=745.b5c83463.chunk.js.map