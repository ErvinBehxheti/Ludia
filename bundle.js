(()=>{"use strict";var e={621:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(901),o=n.n(r),a=n(118),i=n.n(a)()(o());i.push([e.id,"body {\n    --nav-width: 200px;\n    margin: 0 0 0 var(--nav-width);\n    font-family: 'Quicksand', sans-serif;\n    font-size: 18px;\n}\n\n.nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: var(--nav-width);\n    height: 100vh;\n    background: #222222;\n}\n\n.nav__link {\n    display: block;\n    padding: 12px 18px;\n    text-decoration: none;\n    color: #eeeeee;\n    font-weight: 500;\n}\n\n.nav__link:hover {\n    background: rgba(255, 255, 255, 0.05);\n}\n\n#app {\n    margin: 2em;\n    line-height: 1.5;\n    font-weight: 500;\n}\n\na {\n    color: #009579;\n}",""]);const c=i},118:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},901:e=>{e.exports=function(e){return e[1]}},890:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var f=n(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},105:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},182:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},770:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},35:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},291:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function a(e){var t=function(e){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;const i=new(function(){return e=function e(){var t,n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,r={},(n=a(n="routes"))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,window.addEventListener("popstate",(function(){return o.loadRoute()}))},(t=[{key:"addRoute",value:function(e,t){this.routes[e]=t}},{key:"navigate",value:function(e){history.pushState({},"",e),this.loadRoute()}},{key:"loadRoute",value:function(){var e=window.location.pathname,t=this.routes[e];t?t():this.routes["/404"]()}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}());var c=n(890),u=n.n(c),s=n(35),l=n.n(s),d=n(105),f=n.n(d),p=n(770),v=n.n(p),m=n(182),h=n.n(m),y=n(291),b=n.n(y),g=n(621),w={};w.styleTagTransform=b(),w.setAttributes=v(),w.insert=f().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=h(),u()(g.A,w),g.A&&g.A.locals&&g.A.locals,i.addRoute("/",(function(){document.getElementById("app").innerHTML='\n      <h1>Home</h1>\n      <button id="clickMe">Click Me</button>\n      <p id="message"></p>\n    ';var e=document.getElementById("clickMe"),t=document.getElementById("message");e.addEventListener("click",(function(){t.textContent="Button clicked!"}))})),i.addRoute("/about",(function(){document.getElementById("app").innerHTML="\n      <h1>About</h1>\n      <p>This is the about page</p>\n    "})),i.addRoute("/404",(function(){document.getElementById("app").innerHTML="<h1>404 - Not Found</h1>"})),i.loadRoute(),document.body.addEventListener("click",(function(e){var t=e.target;if("A"===t.tagName&&t.hasAttribute("data-link")){e.preventDefault();var n=t.getAttribute("href");i.navigate(n)}}))})();