<script nonce="jMI0iVDfwD7K0GnX+8Ij+JE7Mbk">(function(){'use strict';var e=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var g=Date.now||function(){return+new Date};var t={};function ba(a,b){if(null===b)return!1;if("contains"in a&&1==b.nodeType)return a.contains(b);if("compareDocumentPosition"in a)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function ca(a,b){return function(c){c||(c=window.event);return b.call(a,c)}}function u(a){a=a.target||a.srcElement;!a.getAttribute&&a.parentNode&&(a=a.parentNode);return a}var v="undefined"!=typeof navigator&&/Macintosh/.test(navigator.userAgent),da="undefined"!=typeof navigator&&!/Opera/.test(navigator.userAgent)&&/WebKit/.test(navigator.userAgent),ea={A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1};
function x(a){return(a=a.changedTouches&&a.changedTouches[0]||a.touches&&a.touches[0])?{clientX:a.clientX,clientY:a.clientY,screenX:a.screenX,screenY:a.screenY}:null}
function y(a){var b={};b.originalEventType=a.type;b.type="click";for(var c in a){var d=a[c];"type"==c||"srcElement"==c||"function"==aa(d)||(b[c]=d)}b.timeStamp=g();b.defaultPrevented=!1;b.preventDefault=ha;b._propagationStopped=!1;b.stopPropagation=ia;if(a=x(a))b.clientX=a.clientX,b.clientY=a.clientY,b.screenX=a.screenX,b.screenY=a.screenY;return b}function ja(){this._mouseEventsPrevented=!0}function ha(){this.defaultPrevented=!0}function ia(){this._propagationStopped=!0}
var z={A:13,BUTTON:0,CHECKBOX:32,COMBOBOX:13,GRIDCELL:13,LINK:13,LISTBOX:13,MENU:0,MENUBAR:0,MENUITEM:0,MENUITEMCHECKBOX:0,MENUITEMRADIO:0,OPTION:0,RADIO:32,RADIOGROUP:32,RESET:0,SUBMIT:0,TAB:0,TREE:13,TREEITEM:13};function ka(a){return(a.getAttribute("type")||a.tagName).toUpperCase()in la}function ma(a){return(a.getAttribute("type")||a.tagName).toUpperCase()in na}
var la={CHECKBOX:!0,OPTION:!0,RADIO:!0},na={COLOR:!0,DATE:!0,DATETIME:!0,"DATETIME-LOCAL":!0,EMAIL:!0,MONTH:!0,NUMBER:!0,PASSWORD:!0,RANGE:!0,SEARCH:!0,TEL:!0,TEXT:!0,TEXTAREA:!0,TIME:!0,URL:!0,WEEK:!0},oa={A:!0,AREA:!0,BUTTON:!0,DIALOG:!0,IMG:!0,INPUT:!0,LINK:!0,MENU:!0,OPTGROUP:!0,OPTION:!0,PROGRESS:!0,SELECT:!0,TEXTAREA:!0};function pa(){this.j=[];this.a=[];this.c=[];this.i={};this.b=null;this.g=[]}var B,qa,ra="undefined"!=typeof navigator&&/iPhone|iPad|iPod/.test(navigator.userAgent),sa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")},ta=/\s*;\s*/,C=null;
function ua(a,b){return function(c){var d=b;if("click"==d&&(v&&c.metaKey||!v&&c.ctrlKey||2==c.which||null==c.which&&4==c.button||"auxclick"==c.type||c.shiftKey))d="clickmod";else{var f=c.which||c.keyCode||c.key;da&&3==f&&(f=13);if(13!=f&&32!=f)f=!1;else{var h=u(c);var k=(h.getAttribute("role")||h.type||h.tagName).toUpperCase();var l;(l="keydown"!=c.type)||("getAttribute"in h?(l=(h.getAttribute("role")||h.tagName).toUpperCase(),l=!ma(h)&&("COMBOBOX"!=l||"INPUT"!=l)&&!h.isContentEditable):l=!1,l=!l);
(l=l||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey||ka(h)&&32==f)||((l=h.tagName in ea)||(l=h.getAttributeNode("tabindex"),l=null!=l&&l.specified),l=!(l&&!h.disabled));l?f=!1:(h="INPUT"!=h.tagName.toUpperCase()||h.type,l=!(k in z)&&13==f,f=(0==z[k]%f||l)&&!!h)}f&&(d="clickkey")}h=c.srcElement||c.target;f=D(d,c,h,"",null);for(k=h;k&&k!=this;k=k.__owner||k.parentNode){var m=k;b:{var w,r=m;var n=d;l=c;var p=r.__jsaction;if(!p)if(p=null,"getAttribute"in r&&(p=r.getAttribute("jsaction")),w=p){p=t[w];if(!p){p=
{};for(var I=w.split(ta),J=0,Da=I?I.length:0;J<Da;J++){var A=I[J];if(A){var K=A.indexOf(":"),fa=-1!=K;p[fa?sa(A.substr(0,K)):"click"]=fa?sa(A.substr(K+1)):A}}t[w]=p}r.__jsaction=p}else p=va,r.__jsaction=p;"clickkey"==n?n="click":"click"!=n||p.click||(n="clickonly");w=null;if(p.click){r=wa(r,l,p);if(!r){n={f:n,action:"",event:null,l:!0};break b}r!=l&&(w=r,n=r.type)}n={f:n,action:p[n]||"",event:w,l:!1}}if(n.l||n.action)break}n&&(f=D(n.f,n.event||c,h,n.action||"",m,f.timeStamp));f&&"touchend"==f.eventType&&
(f.event._preventMouseEvents=ja);if(n&&n.action){if(k="clickkey"==d)k=u(c),k=(k.type||k.tagName).toUpperCase(),(k=32==(c.which||c.keyCode||c.key)&&"CHECKBOX"!=k)||(k=u(c),h=(k.getAttribute("role")||k.tagName).toUpperCase(),k=k.tagName.toUpperCase()in oa&&"A"!=h&&!ka(k)&&!ma(k)||"BUTTON"==h);k&&(c.preventDefault?c.preventDefault():c.returnValue=!1);if("mouseenter"==d||"mouseleave"==d)if(k=c.relatedTarget,!("mouseover"==c.type&&"mouseenter"==d||"mouseout"==c.type&&"mouseleave"==d)||k&&(k===m||ba(m,
k)))f.action="",f.actionElement=null;else{d={};for(var q in c)"function"!==typeof c[q]&&"srcElement"!==q&&"target"!==q&&(d[q]=c[q]);d.type="mouseover"==c.type?"mouseenter":"mouseleave";d.target=d.srcElement=m;d.bubbles=!1;f.event=d;f.targetElement=m}}else f.action="",f.actionElement=null;m=f;a.b&&(q=D(m.eventType,m.event,m.targetElement,m.action,m.actionElement,m.timeStamp),"clickonly"==q.eventType&&(q.eventType="click"),a.b(q,!0));if(m.actionElement){"A"!=m.actionElement.tagName||"click"!=m.eventType&&
"clickmod"!=m.eventType||(c.preventDefault?c.preventDefault():c.returnValue=!1);if(a.b)a.b(m);else{if((q=e.document)&&!q.createEvent&&q.createEventObject)try{var L=q.createEventObject(c)}catch(Ja){L=c}else L=c;m.event=L;a.g.push(m)}"touchend"==m.event.type&&m.event._mouseEventsPrevented&&(C=y(m.event))}}}function D(a,b,c,d,f,h){return{eventType:a,event:b,targetElement:c,action:d,actionElement:f,timeStamp:h||g()}}var va={};
function wa(a,b,c){if("click"==b.type||b.targetTouches&&1<b.targetTouches.length)return b;var d=B,f=b.target;if(f&&xa(f))return b;f=x(b);if("touchstart"!=b.type||c.touchstart||c.touchend)if("touchend"==b.type&&d&&d.node==a)if(b.defaultPrevented||f&&4<Math.abs(f.clientX-d.x)+Math.abs(f.clientY-d.y))B=null;else{C=a=y(b);b.stopPropagation();b.preventDefault();document.createEvent?(b=document.createEvent("MouseEvent"),b.initMouseEvent(a.type,!0,!0,window,a.detail||1,a.screenX||0,a.screenY||0,a.clientX||
0,a.clientY||0,a.ctrlKey||!1,a.altKey||!1,a.shiftKey||!1,a.metaKey||!1,a.button||0,a.relatedTarget||null)):(b=document.createEventObject(),b.type=a.type,b.clientX=a.clientX,b.clientY=a.clientY,b.button=a.button,b.detail=a.detail,b.ctrlKey=a.ctrlKey,b.altKey=a.altKey,b.shiftKey=a.shiftKey,b.metaKey=a.metaKey);b.m=a.timeStamp;b._fastclick=!0;a.target.dispatchEvent(b);if(!b.defaultPrevented){if(document.activeElement&&document.activeElement!=b.target&&xa(document.activeElement))try{document.activeElement.blur()}catch(h){}try{window.getSelection().removeAllRanges()}catch(h){}}return null}else"touchmove"==
b.type&&d&&f&&4<Math.abs(f.clientX-d.x)+Math.abs(f.clientY-d.y)&&(B=null);else return B={node:a,x:f?f.clientX:0,y:f?f.clientY:0},C=null,clearTimeout(qa),qa=setTimeout(ya,400),null;return b}function xa(a){a=a.tagName||"";return"TEXTAREA"==a||"INPUT"==a||"SELECT"==a||"OPTION"==a}function ya(){B=null}
function E(a){if(!a._fastclick){var b=C;if(b)if(800<g()-b.timeStamp)C=null;else{var c=4>=Math.abs(a.clientX-b.clientX)+Math.abs(a.clientY-b.clientY);b.target==a.target||c?(a.stopPropagation(),a.preventDefault(),"click"==a.type&&(C=null)):C=null}}}
function za(a,b){return function(c){var d=a,f=b,h=!1;"mouseenter"==d?d="mouseover":"mouseleave"==d&&(d="mouseout");if(c.addEventListener){if("focus"==d||"blur"==d||"error"==d||"load"==d)h=!0;c.addEventListener(d,f,h)}else c.attachEvent&&("focus"==d?d="focusin":"blur"==d&&(d="focusout"),f=ca(c,f),c.attachEvent("on"+d,f));return{f:d,h:f,capture:h}}}
function F(a,b,c){if(!a.i.hasOwnProperty(b)){var d=ua(a,b);c=za(c||b,d);a.i[b]=d;a.j.push(c);for(d=0;d<a.a.length;++d){var f=a.a[d];f.b.push(c.call(null,f.a))}"click"==b&&F(a,"keydown");"click"==b&&(F(a,"touchstart"),F(a,"touchend"),F(a,"touchmove"),document.addEventListener&&(document.addEventListener("click",E,!0),document.addEventListener("mouseup",E,!0),document.addEventListener("mousedown",E,!0)))}}pa.prototype.h=function(a){return this.i[a]};
function Aa(a){var b=G,c=a.a;ra&&(c.style.cursor="pointer");for(c=0;c<b.j.length;++c)a.b.push(b.j[c].call(null,a.a))}function Ba(){for(var a=H,b=Ca,c=0;c<b.length;++c)if(b[c].a!=a.a&&Ea(b[c].a,a.a))return!0;return!1}function Ea(a,b){for(;a!=b&&b.parentNode;)b=b.parentNode;return a==b};var G=new pa,Fa=window.document.documentElement,M=new function(a){this.a=a;this.b=[]}(Fa),N;a:{for(var O=0;O<G.a.length;O++)if(Ea(G.a[O].a,Fa)){N=!0;break a}N=!1}
if(N)G.c.push(M);else{Aa(M);G.a.push(M);for(var Ca=G.c.concat(G.a),P=[],Q=[],R=0;R<G.a.length;++R){var H=G.a[R];if(Ba()){P.push(H);for(var S=H,T=0;T<S.b.length;++T){var U=S.a,V=S.b[T];U.removeEventListener?U.removeEventListener(V.f,V.h,V.capture):U.detachEvent&&U.detachEvent("on"+V.f,V.h)}S.b=[]}else Q.push(H)}for(R=0;R<G.c.length;++R)H=G.c[R],Ba()?P.push(H):(Q.push(H),Aa(H));G.a=Q;G.c=P}F(G,"click");F(G,"dblclick");F(G,"focus");F(G,"focusin");F(G,"blur");F(G,"error");F(G,"focusout");F(G,"keydown");
F(G,"keyup");F(G,"keypress");F(G,"load");F(G,"mouseover");F(G,"mouseout");F(G,"mouseenter");F(G,"mouseleave");F(G,"submit");F(G,"touchstart");F(G,"touchend");F(G,"touchmove");F(G,"auxclick");F(G,"change");F(G,"input");F(G,"textinput");F(G,"cut");F(G,"paste");F(G,"mousedown");F(G,"mouseup");F(G,"wheel");F(G,"contextmenu");F(G,"dragover");F(G,"dragenter");F(G,"dragleave");F(G,"drop");F(G,"dragstart");F(G,"dragend");var Ga,Ha;"onwebkitanimationend"in window&&(Ga="webkitAnimationEnd");
F(G,"animationend",Ga);"onwebkittransitionend"in window&&(Ha="webkitTransitionEnd");F(G,"transitionend",Ha);var Ia=function(a){return{trigger:function(b){var c=a.h(b.type);c||(F(a,b.type),c=a.h(b.type));var d=b.target||b.srcElement;c&&c.call(d.ownerDocument.documentElement,b)},bind:function(b){a.b=b;a.g&&(0<a.g.length&&b(a.g),a.g=null)}}}(G),W=["BOQ_wizbind"],X=window||e;W[0]in X||!X.execScript||X.execScript("var "+W[0]);
for(var Y;W.length&&(Y=W.shift());){var Z;if(Z=!W.length)Z=void 0!==Ia;Z?X[Y]=Ia:X[Y]&&X[Y]!==Object.prototype[Y]?X=X[Y]:X=X[Y]={}};}).call(this);
</script>
