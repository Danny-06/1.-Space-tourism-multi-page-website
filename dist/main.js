(()=>{"use strict";var n,r,e={77:(n,r,e)=>{function t(n){return document.createElement(n)}function a(n,r){Array.isArray(r)?n.className=r.join(" "):"string"==typeof r&&(n.className=r)}function o(n,r){n.append(...r.flat(1/0))}function i(n,r){for(const e in r){let t=e;const a=t.startsWith("--"),o=t.includes("-");a||o||(t=t.split(/(?=[A-Z])/).map((n=>n.toLowerCase())).join("-")),-1!==t.search(/^(webkit|moz|ms|o)-/)&&(t=`-${t}`);const i=r[e].match(/![a-z]+$/gi)?.[0].slice(1)??"",s=i?r[e].replace(new RegExp(`!${i}$`,"i"),""):r[e];n.setProperty(t,s,i)}}function s(n,r){const e=new Array(n);for(let t=0;t<n;t++)e[t]=r(t);return e}e.d(r,{nE:()=>d,ZP:()=>c});const l=new Proxy((function(){}),{apply:(n,r,e)=>{const t=new DocumentFragment;return t.append(...e.flat(1/0).filter((n=>null!=n))),t},get:(n,r,e)=>{switch(r){case"$":return new Proxy((function(){}),{get:(n,r,e)=>function(n,e,...a){const o=t(r);return function(n,r={},e={},...t){d(n,r,...t);const a={mode:"open",...e.init};e.mode&&(a.mode=e.mode);const o=n.attachShadow(a);Array.isArray(e.adoptedStyleSheets)&&(o.adoptedStyleSheets=e.adoptedStyleSheets),o.append(...e.children??[])}(o,n,e,...a),o}});case"$map":return s}return function(n,...e){const a=t(r);return d(a,n,...e),a}}});function d(n,r={},...e){const{id:t,class:s,dataset:l,attributes:d,style:c}=r??{},m=window.trustedTypes?trustedTypes.createPolicy("",{createHTML:n=>n,createScriptURL:n=>n}):{createHTML:n=>n,createScriptURL:n=>n};if(t&&(n.id=t),s&&a(n,s),l)for(const[r,e]of Object.entries(l??{}))void 0!==e&&(n.dataset[r]=e);for(const[r,e]of Object.entries(d??{}))null===e&&n.removeAttribute(r),null!=e&&(["src","href"].includes(r)?n.setAttribute(r,m.createScriptURL(e)):n.setAttribute(r,e));return c&&i(n.style,c),o(n,e),n}new MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type){const r=n.target,e=n.attributeName,t=n.oldValue,a=r.getAttribute(e);r?.attributeChangedCallback(e,t,a)}}))}));const c=l;new Proxy((function(){}),{get:(n,r,e)=>function(n,...e){const t=function(n,r){return document.createElementNS(r,n)}(r,"http://www.w3.org/2000/svg");return function(n,r={},...e){const{id:t,class:s,dataset:l,attributes:d,style:c}=r,m=window.trustedTypes?trustedTypes.createPolicy("",{createHTML:n=>n,createScriptURL:n=>n}):{createHTML:n=>n,createScriptURL:n=>n};if(t&&(n.id=t),s&&a(n,s),l)for(const[r,e]of Object.entries(l??{}))void 0!==e&&(n.dataset[r]=e);for(const[r,e]of Object.entries(d??{}))void 0!==e&&(["src","href"].includes(r)?n.setAttribute(r,m.createScriptURL(e)):n.setAttribute(r,e));c&&i(n.style,c),o(n,e)}(t,n,...e),t}})}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,a.d=(n,r)=>{for(var e in r)a.o(r,e)&&!a.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},a.f={},a.e=n=>Promise.all(Object.keys(a.f).reduce(((r,e)=>(a.f[e](n,r),r)),[])),a.u=n=>n+".main.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n={},r="webpack-template:",a.l=(e,t,o,i)=>{if(n[e])n[e].push(t);else{var s,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==r+o){s=m;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+o),s.src=e),n[e]=[t];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(b);var a=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((n=>n(t))),r)return r(t)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var r=a.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),(()=>{var n={179:0};a.f.j=(r,e)=>{var t=a.o(n,r)?n[r]:void 0;if(0!==t)if(t)e.push(t[2]);else{var o=new Promise(((e,a)=>t=n[r]=[e,a]));e.push(t[2]=o);var i=a.p+a.u(r),s=new Error;a.l(i,(e=>{if(a.o(n,r)&&(0!==(t=n[r])&&(n[r]=void 0),t)){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,t[1](s)}}),"chunk-"+r,r)}};var r=(r,e)=>{var t,o,[i,s,l]=e,d=0;if(i.some((r=>0!==n[r]))){for(t in s)a.o(s,t)&&(a.m[t]=s[t]);l&&l(a)}for(r&&r(e);d<i.length;d++)o=i[d],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0},e=self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})(),(()=>{const n=new CSSStyleSheet;n.replaceSync("@charset \"UTF-8\";\n/* Barlow */\n@font-face {\r\n  font-family: Barlow;\r\n  src: url('assets/fonts/Barlow/Barlow-Regular.ttf');\r\n}\n/* Barlow Condensed */\n@font-face {\r\n  font-family: 'Barlow Condensed';\r\n  src: url('assets/fonts/Barlow Condensed/BarlowCondensed-Regular.ttf');\r\n}\n@font-face {\r\n  font-family: 'Barlow Condensed';\r\n  font-weight: bold;\r\n  src: url('assets/fonts/Barlow Condensed/BarlowCondensed-Bold.ttf');\r\n}\n/* Bellefair */\n@font-face {\r\n  font-family: Bellefair;\r\n  src: url('assets/fonts/Bellefair/Bellefair-Regular.ttf');\r\n}\n/* 1100px */\n/* 1000px */\n/* 850px */\n/* 650px */\n.navbar-block {\r\n  position: relative;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  padding-left: 3rem;\r\n\r\n  font-family: var(--font-barlow-condensed);\r\n  letter-spacing: 0.16875rem;\r\n}\n@media (max-width: 40.625em) {.navbar-block {\r\n    padding-left: 1rem;\r\n    padding-right: 1rem\r\n}\r\n  }\n.navbar-block a, .navbar-block span {\r\n    user-select: none;\r\n  }\n.navbar-block > .logo {\r\n    align-self: center;\r\n    width: 3em;\r\n  }\n.navbar-block > .logo > img {\r\n      width: 100%;\r\n    }\n.navbar-block > .linedecorator {\r\n    flex-grow: 1;\r\n    align-self: center;\r\n    height: 0.04rem;\r\n\r\n    transform: translateX(3.125em);\r\n\r\n    background-color: var(--nav-line-decorator);\r\n\r\n    /* Put .linedecorator over .list */\r\n    z-index: 10;\r\n  }\n@media (max-width: 62.5em) {.navbar-block > .linedecorator {\r\n      transform: translateX(1em)\r\n  }\r\n    }\n@media (max-width: 53.125em), (orientation: portrait) {.navbar-block > .linedecorator {\r\n      display: none\r\n  }\r\n    }\n.navbar-block > .list {\r\n    display: flex;\r\n    column-gap: 3rem;\r\n\r\n    padding-inline: 8rem 10rem;\r\n\r\n    backdrop-filter: blur(1.375em);\r\n    background-color: hsl(0deg, 0%, 60%, 0.1);\r\n  }\n@supports not (backdrop-filter: blur(1px)) {.navbar-block > .list {\r\n      background-color: hsl(0deg, 0%, 30%)\r\n  }\r\n    }\n@media (max-width: 62.5em), (orientation: portrait) {.navbar-block > .list {\r\n      padding-inline: 2rem\r\n  }\r\n    }\n@media (max-width: 40.625em) {.navbar-block > .list {\r\n      visibility: hidden;\r\n      padding-right: 0;\r\n\r\n      position: fixed;\r\n      right: 0;\r\n      top: 0;\r\n      transform: translateX(100%);\r\n\r\n      flex-direction: column;\r\n      row-gap: 1.5rem;\r\n\r\n      width: 16rem;\r\n      height: 100%;\r\n      padding-block: 8rem;\r\n\r\n      overflow: auto;\r\n\r\n      transition-property: transform, visibility\r\n      /* handle transition on JS */\r\n  }\r\n\r\n      .navbar-block > .list.-show-mobile {\r\n        visibility: visible;\r\n\r\n        transform: translateX(0);\r\n      }\r\n    }\n.navbar-block > .list > .iconclose {\r\n      display: block;\r\n      width: 1.5em;\r\n      height: 1.5em;\r\n\r\n      position: absolute;\r\n      top: 0;\r\n      right: 0;\r\n\r\n      margin-top: 2rem;\r\n      margin-right: 1.5rem;\r\n\r\n      background-image: var(--btn-close-hamburguer-menu-icon);\r\n      background-size: contain;\r\n\r\n      transition: filter 0.2s;\r\n    }\n@media (hover: hover) {.navbar-block > .list > .iconclose:hover {\r\n        filter: drop-shadow(0px 0px 12px #fff)\r\n    }\r\n      }\n.navbar-block > .list > .iconclose:is(:focus-visible, :active) {\r\n        filter: drop-shadow(0px 0px 12px #fff);\r\n    }\n@media not (max-width: 40.625em) {.navbar-block > .list > .iconclose {\r\n        display: none\r\n    }\r\n      }\n.navbar-block > .list > .item {\r\n      display: flex;\r\n    }\n.navbar-block > .list > .item > .link {\r\n        flex-grow: 1;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n        column-gap: 0.5rem;\r\n\r\n        border-bottom: solid 0.2em transparent;\r\n\r\n        transition-property: border-color;\r\n        transition-duration: 0.4s;\r\n      }\n@media (max-width: 40.625em) {.navbar-block > .list > .item > .link {\r\n          padding-block: 0.5rem;\r\n\r\n          border-bottom: none;\r\n          border-right: solid 0.3em transparent\r\n      }\r\n        }\n@media (hover: hover) {.navbar-block > .list > .item > .link:hover {\r\n          border-color: var(--secondary-color);\r\n          transition-duration: 0s\r\n    }\r\n      }\n.navbar-block > .list > .item > .link:is(:focus-visible, :active) {\r\n          border-color: var(--secondary-color);\r\n          transition-duration: 0s;\r\n    }\n/* Handle active link style */\n.navbar-block > .list > .item > .link[data-pathname-matches=\"true\"] {\r\n          border-color: var(--app-text);\r\n        }\n.navbar-block > .list > .item > .link > .index {\r\n          font-weight: bold;\r\n        }\n@media (max-width: 53.125em), (orientation: portrait) {.navbar-block > .list > .item > .link > .index {\r\n            display: none\r\n        }\r\n          }\n@media (max-width: 40.625em) {.navbar-block > .list > .item > .link > .index {\r\n            display: block\r\n        }\r\n          }\n.navbar-block > .btn-hamburguer-menu {\r\n  align-self: center;\r\n}\n@media not (max-width: 40.625em) {.navbar-block > .btn-hamburguer-menu {\r\n    display: none\r\n}\r\n  }\n.btn-hamburguer-menu {\r\n  width: 3em;\r\n  height: 3em;\r\n  background-image: var(--btn-hamburguer-icon);\r\n  background-position: center;\r\n  background-size: 80% auto;\r\n\r\n  transition: filter 0.2s;\r\n}\n@media (hover: hover) {.btn-hamburguer-menu:hover {\r\n    filter: drop-shadow(0px 0px 12px #fff)\r\n    }\r\n      }\n.btn-hamburguer-menu:is(:focus-visible, :active) {\r\n    filter: drop-shadow(0px 0px 12px #fff);\r\n    }\n.title-page {\r\n  display: flex;\r\n  column-gap: 1.5ch;\r\n\r\n  font-size: 1.6rem;\r\n  font-family: var(--font-barlow-condensed);\r\n\r\n  letter-spacing: 0.295rem; /* 4.72px */\r\n\r\n  user-select: text;\r\n}\n.title-page > .index {\r\n    color: #50525a;\r\n    font-weight: bold;\r\n  }\n:root {\r\n  --app-bg:             hsl(230deg, 35%, 7%);\r\n  --app-text:           hsl(0deg, 0%, 100%);\r\n  --secondary-color:    hsl(231deg, 77%, 90%);\r\n  --nav-line-decorator: hsl(0deg, 0%, 50%); \r\n\r\n  --font-barlow: Barlow;\r\n  --font-barlow-condensed: 'Barlow Condensed';\r\n  --font-bellefair: Bellefair;\r\n\r\n  --btn-hamburguer-icon: url('assets/images/shared/icon-hamburger.svg');\r\n  --btn-close-hamburguer-menu-icon: url('assets/images/shared/icon-close.svg')\r\n}\n::selection {\r\n  background-color: #fff2;\r\n}\nimg {\r\n  -webkit-user-drag: none;\r\n}\n/* Background Images per page */\n:root {\r\n  --bg-overlay-color: transparent;\r\n}\n:root[data-pathname=\"/\"] {\r\n      --bg-desktop: url('/assets/images/home/background-home-desktop.jpg');\r\n      --bg-tablet: url('/assets/images/home/background-home-tablet.jpg');\r\n      --bg-mobile: url('/assets/images/home/background-home-mobile.jpg');\r\n    }\n:root[data-pathname=\"/destination\"] {\r\n      --bg-desktop: url('/assets/images/destination/background-destination-desktop.jpg');\r\n      --bg-tablet: url('/assets/images/destination/background-destination-tablet.jpg');\r\n      --bg-mobile: url('/assets/images/destination/background-destination-mobile.jpg');\r\n    }\n:root[data-pathname=\"/crew\"] {\r\n      --bg-desktop: url('/assets/images/crew/background-crew-desktop.jpg');\r\n      --bg-tablet: url('/assets/images/crew/background-crew-tablet.jpg');\r\n      --bg-mobile: url('/assets/images/crew/background-crew-mobile.jpg');\r\n    }\n:root[data-pathname=\"/technology\"] {\r\n      --bg-desktop: url('/assets/images/technology/background-technology-desktop.jpg');\r\n      --bg-tablet: url('/assets/images/technology/background-technology-tablet.jpg');\r\n      --bg-mobile: url('/assets/images/technology/background-technology-mobile.jpg');\r\n    }\n:root[data-pathname=\"/crew\"] {\r\n  --bg-overlay-color: hsla(230deg, 35%, 7%, 0.5);\r\n}\n:root {\r\n  background-color: var(--app-bg);\r\n  color: var(--app-text);\r\n  font-family: var(--font-barlow);\r\n\r\n  font-size: max(1rem, 1vw);\r\n}\n@media (orientation: portrait) {:root {\r\n    font-size: max(1rem, 2vw)\r\n}\r\n  }\n[data-id=\"app\"] {\r\n  --bg-overlay: linear-gradient(var(--bg-overlay-color), var(--bg-overlay-color));\r\n\r\n  background-image: var(--bg-overlay), var(--bg-desktop);\r\n  background-size: cover;\r\n}\n@media (max-width: 53.125em), (orientation: portrait) {[data-id=\"app\"] {\r\n    background-image: var(--bg-overlay), var(--bg-tablet)\r\n}\r\n  }\n@media (max-width: 40.625em) {[data-id=\"app\"] {\r\n    background-image: var(--bg-overlay), var(--bg-mobile)\r\n}\r\n  }\n[data-id=\"app-content\"] {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 6em 1fr;\r\n  grid-template-areas:\r\n  \"nav \"\r\n  \"main\"\r\n  ;\r\n\r\n  padding: 0;\r\n  padding-top: 2rem;\r\n\r\n  overflow: hidden;\r\n}\n[data-id=\"app-content\"] > .navbar-block {\r\n    grid-area: nav;\r\n    z-index: 10;\r\n  }\n[data-id=\"app-content\"] > .navigate-component {\r\n    grid-area: main;\r\n  }\n@media (max-width: 53.125em), (orientation: portrait) {[data-id=\"app-content\"] {\r\n    padding-top: 0\r\n}\r\n  }\n.navigate-component {\r\n  display: flex;\r\n}\n.navigate-component > :first-child {\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n  }\n._max-z-index_ {\r\n  z-index: 2147483647;\r\n}\n._no-self-events_ {\r\n  pointer-events: none;\r\n}\n._no-self-events_ > * {\r\n  pointer-events: auto;\r\n}\n._grid-overlay_ {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr;\r\n  grid-template-areas: 'overlay';\r\n  place-items: center;\r\n}\n._grid-overlay_ > * {\r\n  grid-area: overlay;\r\n  z-index: 0;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n}\n._aspect-ratio-wrapper_ {\r\n  position: relative;\r\n  --aspect-ratio: 16 / 9;\r\n}\n._aspect-ratio-wrapper_::before {\r\n  content: '';\r\n  display: block;\r\n\r\n  position: relative;\r\n\r\n  padding-top: calc(\r\n    100% * 1 / (var(--aspect-ratio))\r\n  );\r\n}\n._aspect-ratio-wrapper_ > :first-child {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  min-width: 0;\r\n  min-height: 0;\r\n\r\n  max-width: none;\r\n  max-height: none;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n}\n._absolute-media-wrapper_ {\r\n  position: relative;\r\n  z-index: 0;\r\n}\n._absolute-media-wrapper_ > :first-child {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n");const r=n;var e=a(77);const t={get state(){return history.state},replace(n,r=null){history.replaceState(r,"",n),o()},push(n,r=null){history.pushState(r,"",n),o()},forward(){history.forward()},back(){history.back()},hash(n){location.hash=n},addEventListener:(n,r)=>(window.addEventListener(n,r),()=>{window.removeEventListener(n,r)})};function o(){const n={detail:{path:location.pathname}},r=new CustomEvent("custom-navigate",n);window.dispatchEvent(r)}function i(){const n={detail:{hash:location.hash}},r=new CustomEvent("custom-hash-change",n);window.dispatchEvent(r)}window.addEventListener("DOMContentLoaded",(n=>{o(),i()}),{once:!0}),window.addEventListener("popstate",(n=>{o()})),window.addEventListener("hashchange",(n=>{i()}));const s=[{path:"*",component:function(){return e.ZP.div({style:{width:"100%",height:"100%",backgroundColor:"#9005",display:"grid",placeItems:"center"}},"NOT FOUND")}},{path:"/index.html",redirect:"/"},{path:"/home",redirect:"/"},{path:"/",lazyComponent:()=>a.e(433).then(a.bind(a,433))},{path:"/destination",lazyComponent:()=>a.e(219).then(a.bind(a,219))},{path:"/crew",lazyComponent:()=>a.e(874).then(a.bind(a,874))},{path:"/technology",lazyComponent:()=>a.e(686).then(a.bind(a,686))}],l=Symbol("link-navigate"),d=Symbol("state"),c=Symbol("method"),m=Symbol("default-behavior");function p(n,...r){const{href:a,state:o,method:i,defaultBehavior:s}=n??{},p=e.ZP.a(n,...r);return p[l]=void 0,p[d]=o,p[m]=Boolean(s),"string"==typeof a&&(p.href=a),"string"==typeof i&&(p.dataset.method=i,p[c]=i),t.addEventListener("custom-navigate",(n=>{const r=new URL(n.detail.path,location.href).toString(),e=p.href===r;p.dataset.pathnameMatches=e.toString()})),p.addEventListener("keydown",(n=>{"Enter"===n.code&&setTimeout((()=>{p.firstElementChild&&p.firstElementChild.dispatchEvent(new CustomEvent("pointerdown",{bubbles:!1}))}))})),p.addEventListener("keyup",(n=>{"Enter"===n.code&&setTimeout((()=>{p.firstElementChild&&p.firstElementChild.dispatchEvent(new CustomEvent("pointerup",{bubbles:!1}))}))})),p}window.addEventListener("click",(n=>{const r=n.target.closest("a");if(null==r||!r.hasOwnProperty(l))return;if(r[m])return;n.preventDefault();const e=r.href,a=r[d];switch(r[c]){case"replace":t.replace(e,a);break;case"push":t.push(e,a);break;default:e.includes("#")?t.replace(e,a):t.push(e,a)}}));const b=new CSSStyleSheet;b.replaceSync('/* 1100px */\r\n\r\n/* 1000px */\r\n\r\n/* 850px */\r\n\r\n/* 650px */\r\n\r\n.navbar-block {\r\n  position: relative;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  padding-left: 3rem;\r\n\r\n  font-family: var(--font-barlow-condensed);\r\n  letter-spacing: 0.16875rem;\r\n}\r\n\r\n@media (max-width: 40.625em) {\r\n\r\n.navbar-block {\r\n    padding-left: 1rem;\r\n    padding-right: 1rem\r\n}\r\n  }\r\n\r\n.navbar-block a, .navbar-block span {\r\n    user-select: none;\r\n  }\r\n\r\n.navbar-block > .logo {\r\n    align-self: center;\r\n    width: 3em;\r\n  }\r\n\r\n.navbar-block > .logo > img {\r\n      width: 100%;\r\n    }\r\n\r\n.navbar-block > .linedecorator {\r\n    flex-grow: 1;\r\n    align-self: center;\r\n    height: 0.04rem;\r\n\r\n    transform: translateX(3.125em);\r\n\r\n    background-color: var(--nav-line-decorator);\r\n\r\n    /* Put .linedecorator over .list */\r\n    z-index: 10;\r\n  }\r\n\r\n@media (max-width: 62.5em) {\r\n\r\n.navbar-block > .linedecorator {\r\n      transform: translateX(1em)\r\n  }\r\n    }\r\n\r\n@media (max-width: 53.125em), (orientation: portrait) {\r\n\r\n.navbar-block > .linedecorator {\r\n      display: none\r\n  }\r\n    }\r\n\r\n.navbar-block > .list {\r\n    display: flex;\r\n    column-gap: 3rem;\r\n\r\n    padding-inline: 8rem 10rem;\r\n\r\n    backdrop-filter: blur(1.375em);\r\n    background-color: hsl(0deg, 0%, 60%, 0.1);\r\n  }\r\n\r\n@supports not (backdrop-filter: blur(1px)) {\r\n\r\n.navbar-block > .list {\r\n      background-color: hsl(0deg, 0%, 30%)\r\n  }\r\n    }\r\n\r\n@media (max-width: 62.5em), (orientation: portrait) {\r\n\r\n.navbar-block > .list {\r\n      padding-inline: 2rem\r\n  }\r\n    }\r\n\r\n@media (max-width: 40.625em) {\r\n\r\n.navbar-block > .list {\r\n      visibility: hidden;\r\n      padding-right: 0;\r\n\r\n      position: fixed;\r\n      right: 0;\r\n      top: 0;\r\n      transform: translateX(100%);\r\n\r\n      flex-direction: column;\r\n      row-gap: 1.5rem;\r\n\r\n      width: 16rem;\r\n      height: 100%;\r\n      padding-block: 8rem;\r\n\r\n      overflow: auto;\r\n\r\n      transition-property: transform, visibility\r\n      /* handle transition on JS */\r\n  }\r\n\r\n      .navbar-block > .list.-show-mobile {\r\n        visibility: visible;\r\n\r\n        transform: translateX(0);\r\n      }\r\n    }\r\n\r\n.navbar-block > .list > .iconclose {\r\n      display: block;\r\n      width: 1.5em;\r\n      height: 1.5em;\r\n\r\n      position: absolute;\r\n      top: 0;\r\n      right: 0;\r\n\r\n      margin-top: 2rem;\r\n      margin-right: 1.5rem;\r\n\r\n      background-image: var(--btn-close-hamburguer-menu-icon);\r\n      background-size: contain;\r\n\r\n      transition: filter 0.2s;\r\n    }\r\n\r\n@media (hover: hover) {\r\n\r\n.navbar-block > .list > .iconclose:hover {\r\n        filter: drop-shadow(0px 0px 12px #fff)\r\n    }\r\n      }\r\n\r\n.navbar-block > .list > .iconclose:is(:focus-visible, :active) {\r\n        filter: drop-shadow(0px 0px 12px #fff);\r\n    }\r\n\r\n@media not (max-width: 40.625em) {\r\n\r\n.navbar-block > .list > .iconclose {\r\n        display: none\r\n    }\r\n      }\r\n\r\n.navbar-block > .list > .item {\r\n      display: flex;\r\n    }\r\n\r\n.navbar-block > .list > .item > .link {\r\n        flex-grow: 1;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n        column-gap: 0.5rem;\r\n\r\n        border-bottom: solid 0.2em transparent;\r\n\r\n        transition-property: border-color;\r\n        transition-duration: 0.4s;\r\n      }\r\n\r\n@media (max-width: 40.625em) {\r\n\r\n.navbar-block > .list > .item > .link {\r\n          padding-block: 0.5rem;\r\n\r\n          border-bottom: none;\r\n          border-right: solid 0.3em transparent\r\n      }\r\n        }\r\n\r\n@media (hover: hover) {\r\n\r\n.navbar-block > .list > .item > .link:hover {\r\n          border-color: var(--secondary-color);\r\n          transition-duration: 0s\r\n    }\r\n      }\r\n\r\n.navbar-block > .list > .item > .link:is(:focus-visible, :active) {\r\n          border-color: var(--secondary-color);\r\n          transition-duration: 0s;\r\n    }\r\n\r\n/* Handle active link style */\r\n\r\n.navbar-block > .list > .item > .link[data-pathname-matches="true"] {\r\n          border-color: var(--app-text);\r\n        }\r\n\r\n.navbar-block > .list > .item > .link > .index {\r\n          font-weight: bold;\r\n        }\r\n\r\n@media (max-width: 53.125em), (orientation: portrait) {\r\n\r\n.navbar-block > .list > .item > .link > .index {\r\n            display: none\r\n        }\r\n          }\r\n\r\n@media (max-width: 40.625em) {\r\n\r\n.navbar-block > .list > .item > .link > .index {\r\n            display: block\r\n        }\r\n          }\r\n\r\n.navbar-block > .btn-hamburguer-menu {\r\n  align-self: center;\r\n}\r\n\r\n@media not (max-width: 40.625em) {\r\n\r\n.navbar-block > .btn-hamburguer-menu {\r\n    display: none\r\n}\r\n  }\r\n\r\n.btn-hamburguer-menu {\r\n  width: 3em;\r\n  height: 3em;\r\n  background-image: var(--btn-hamburguer-icon);\r\n  background-position: center;\r\n  background-size: 80% auto;\r\n\r\n  transition: filter 0.2s;\r\n}\r\n\r\n@media (hover: hover) {\r\n\r\n.btn-hamburguer-menu:hover {\r\n    filter: drop-shadow(0px 0px 12px #fff)\r\n    }\r\n      }\r\n\r\n.btn-hamburguer-menu:is(:focus-visible, :active) {\r\n    filter: drop-shadow(0px 0px 12px #fff);\r\n    }\r\n');const u=b;document.adoptedStyleSheets=[...document.adoptedStyleSheets,u];const h=[{href:"/",index:"00",name:"HOME"},{href:"/destination",index:"01",name:"DESTINATION"},{href:"/crew",index:"02",name:"CREW"},{href:"/technology",index:"03",name:"TECHNOLOGY"}];document.adoptedStyleSheets=[...document.adoptedStyleSheets,r];const g=function(n){const r=e.ZP["dom-navigate"](),a=function(n){return[...n].sort(((n,r)=>"*"===n.path?1:"*"===r.path?-1:0))}(n),o=new Map;return{component:r,async update(n){let e=null;for(const r of a)if(r.path===n||"*"===r.path){if("redirect"in r)return void setTimeout((()=>{t.replace(r.redirect)}));"function"==typeof r.lazyComponent?o.has(r.path)?e=o.get(r.path):(e=(await r.lazyComponent()).default,o.set(r.path,e)):e=r.component;break}if(r.replaceChildren(),"function"!=typeof e)return;const i=e();r.append(i)}}}(s);t.addEventListener("custom-navigate",(n=>{document.documentElement.dataset.pathname=n.detail.path,g.update(n.detail.path)}));const f=(0,e.ZP)(e.ZP.div({dataset:{id:"app"}},e.ZP.div({dataset:{id:"app-content"}},function(){const n=e.ZP.nav(),r=e.ZP.button(),t=e.ZP.button(),a=e.ZP.div();return r.addEventListener("click",(n=>{a.style.transitionDuration="0.2s",a.classList.add("-show-mobile"),a.addEventListener("transitionend",(n=>{a.style.transitionDuration="",t.focus()}),{once:!0})})),t.addEventListener("click",(n=>{a.style.transitionDuration="0.2s",a.classList.remove("-show-mobile"),a.addEventListener("transitionend",(n=>{a.style.transitionDuration="",r.focus()}),{once:!0})})),window.addEventListener("click",(e=>{a.classList.contains("-show-mobile")&&!e.composedPath().includes(n)&&(a.style.transitionDuration="0.2s",a.classList.remove("-show-mobile"),a.addEventListener("transitionend",(n=>{a.style.transitionDuration="",r.focus()})))})),(0,e.nE)(n,{class:"navbar-block"},p({class:"logo",href:"/"},e.ZP.img({attributes:{src:"/assets/images/shared/logo.svg",alt:"Logo"}})),(0,e.nE)(r,{class:"btn-hamburguer-menu"}),e.ZP.div({class:"linedecorator"}),(0,e.nE)(a,{class:"list",attributes:{role:"list"}},(0,e.nE)(t,{class:"iconclose"}),h.map((n=>e.ZP.div({class:"item",attributes:{role:"listitem"}},p({class:"link",href:n.href},e.ZP.span({class:"index"},n.index),e.ZP.span({class:"name"},n.name)))))))}(),(0,e.nE)(g.component,{class:"navigate-component"}))));document.body.replaceChildren(),document.body.append(f)})()})();
//# sourceMappingURL=main.js.map