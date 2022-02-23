(()=>{var t,e={757:(t,e,r)=>{t.exports=r(666)},204:(t,e,r)=>{"use strict";var n=r(757),i=r.n(n);function o(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,i)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.letter=e,this.notFreeRow=r,this.freeRow=n,this.elem=this.createElem(),this.targetRow=null,this.events()}var e,r,n,s,u;return e=t,r=[{key:"createElem",value:function(){var t=document.createElement("div");t.classList.add("tile");var e=document.createElement("span");return e.classList.add("letter"),e.innerText=this.letter,t.appendChild(e),t}},{key:"grab",value:function(t,e){this.isDragging=!0,this.targetRow&&(this.freeRow(this.targetRow),this.targetRow=null),this.elem.style.zIndex=3,this.currentX=t-this.size/2,this.currentY=e-this.size/2,this.setTransition(!0),this.setPosition(this.currentX,this.currentY,1.2,0)}},{key:"move",value:function(t,e){this.isDragging&&(this.currentX=t-this.size/2,this.currentY=e-this.size/2,this.setTransition(!1),this.setPosition(this.currentX,this.currentY,1.2,0))}},{key:"release",value:function(){this.isDragging&&(this.isDragging=!1,this.elem.style.zIndex=1,this.targetRow=this.notFreeRow(this.currentX,this.currentY,this.letter),this.setTransition(!0),this.setPositionToTargetRow())}},{key:"setPosition",value:function(t,e,r,n){this.elem.style.transform="translate(".concat(t,"px, ").concat(e,"px) scale(").concat(r,") rotate(").concat(n,"deg)")}},{key:"setTransition",value:function(t){this.elem.style.transition=t?"transform 0.2s ease":"",this.elem.getBoundingClientRect()}},{key:"setSize",value:function(t){this.size=t,t<=40?this.elem.classList.add("small"):this.elem.classList.remove("small"),this.elem.style.width="".concat(t-4,"px"),this.elem.style.height="".concat(t-4,"px")}},{key:"setPositionToTargetRow",value:(s=i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.targetRow.getBoundingClientRect(),(r=this.targetRow.getAttribute("data-rotation"))||(r=0),this.setPosition(e.left,e.top,1,r),t.abrupt("return",new Promise((function(t){setTimeout(t,200)})));case 5:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=s.apply(t,e);function a(t){o(i,r,n,a,u,"next",t)}function u(t){o(i,r,n,a,u,"throw",t)}a(void 0)}))},function(){return u.apply(this,arguments)})},{key:"events",value:function(){var t=this;this.elem.addEventListener("mousedown",(function(e){t.grab(e.clientX,e.clientY)})),document.body.addEventListener("mousemove",(function(e){t.move(e.clientX,e.clientY)})),document.body.addEventListener("mouseup",this.release.bind(this)),this.elem.addEventListener("touchstart",(function(e){t.grab(e.touches[0].clientX,e.touches[0].clientY)})),document.body.addEventListener("touchmove",(function(e){e.preventDefault(),t.move(e.touches[0].clientX,e.touches[0].clientY)}),{passive:!1}),document.body.addEventListener("touchend",this.release.bind(this))}}],r&&a(e.prototype,r),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tilesContainer=document.getElementById("tiles"),this.letters=document.querySelector("#tile_container > #letters"),this.rows=Array.from(document.querySelectorAll("#tile_container .row")).reverse(),this.pointList={A:1,B:3,C:3,D:2,E:1,F:4,G:2,H:4,I:1,J:8,K:6,L:1,M:3,N:1,O:1,P:3,Q:10,R:1,S:1,T:1,U:1,V:4,W:4,X:8,Y:4,Z:10},this.availableLetters=["C","E","H","L","L","O","O","N","D","E","P","F","E","U","N","I","E","K","A","E","C","O","E","J","M","Q","A","Z","E","W"],this.givenLetters=0}var e,r,n;return e=t,(r=[{key:"giveTile",value:function(t,e){if(this.givenLetters>=this.availableLetters.length)return console.log("Plus de lettres disponibles"),null;var r=this.getNextFreeRow();if(!r)return console.log("Case Occupée"),null;this.letters.classList.remove("created_letters_container");var n=this.letters.getBoundingClientRect();this.letters.classList.add("created_letters_container");var i=this.availableLetters[this.givenLetters];r.setAttribute("data-letter",i),r.setAttribute("data-rotation",20*(Math.random()-.5));var o=new s(i,t,e);return o.targetRow=r,o.setPosition(n.left,n.top,0,0),this.tilesContainer.appendChild(o.elem),o.setTransition(!0),o.setPositionToTargetRow(),this.givenLetters++,o}},{key:"getNextFreeRow",value:function(){var t,e=u(this.rows);try{for(e.s();!(t=e.n()).done;){var r=t.value;if(!r.hasAttribute("data-letter"))return r}}catch(t){e.e(t)}finally{e.f()}return null}},{key:"setRowSize",value:function(t){var e,r=u(this.rows);try{for(r.s();!(e=r.n()).done;){var n=e.value;n.style.width="".concat(t,"px"),n.style.height="".concat(t,"px")}}catch(t){r.e(t)}finally{r.f()}}}])&&l(e.prototype,r),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elem=document.getElementById("board_container"),this.rowLength=15,this.boardInit(),this.boardRender()}var e,r,n;return e=t,(r=[{key:"boardInit",value:function(){this.fields=[];for(var t=Math.pow(this.rowLength,2),e=0;e<t;e++){var r=document.createElement("div");r.classList.add("row"),this.elem.appendChild(r),this.fields.push(r)}document.querySelector("body > div > div:nth-child(113)").classList.add("center-row")}},{key:"boardRender",value:function(){this.elem.style.width=null,this.elem.style.height=null;var t=this.elem.getBoundingClientRect();t.width>t.height?this.elem.style.width="".concat(t.height,"px"):this.elem.style.height="".concat(t.width,"px"),this.rowSize=this.fields[0].getBoundingClientRect().width}},{key:"getWords",value:function(){for(var t=[],e=0;e<this.rowLength;e++){for(var r="",n=0;n<this.rowLength;n++){var i=this.fields[e*this.rowLength+n].getAttribute("data-letter");i?r+=i:(r.length>=2&&t.push(r),r="")}r.length>=2&&t.push(r)}for(var o=0;o<this.rowLength;o++){for(var a="",s=0;s<this.rowLength;s++){var u=this.fields[o+s*this.rowLength].getAttribute("data-letter");u?a+=u:(a.length>=2&&t.push(a),a="")}a.length>=2&&t.push(a)}return t}}])&&f(e.prototype,r),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=p(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function y(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,i)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){m(o,n,i,a,s,"next",t)}function s(t){m(o,n,i,a,s,"throw",t)}a(void 0)}))}}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.board=new d,this.tileContiner=new h,this.tiles=[],this.displayPoint=document.getElementById("points"),this.start(),window.addEventListener("resize",this.render.bind(this))}var e,r,n,o,a;return e=t,r=[{key:"start",value:(a=w(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.render(),e=0;case 2:if(!(e<this.tileContiner.rows.length)){t.next=8;break}return t.next=5,this.giveTile();case 5:e++,t.next=2;break;case 8:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"giveTile",value:(o=w(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this.tileContiner.giveTile(this.notFreeRow.bind(this),this.freeRow.bind(this)))&&(e.setSize(this.board.rowSize),this.tiles.push(e)),t.abrupt("return",new Promise((function(t){setTimeout(t,300)})));case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"notFreeRow",value:function(t,e,r){var n=this,i=[].concat(y(this.board.fields),y(this.tileContiner.rows)).filter((function(t){return!t.getAttribute("data-letter")}));i.sort((function(r,i){var o=r.getBoundingClientRect(),a=i.getBoundingClientRect();return n.getDistance(o.left,t,o.top,e)-n.getDistance(a.left,t,a.top,e)}));var o=i[0];return o.setAttribute("data-letter",r),this.calculatePoints(),this.giveTile(),o}},{key:"freeRow",value:function(t){t.removeAttribute("data-letter"),this.calculatePoints()}},{key:"calculatePoints",value:function(){var t,e=0,r=v(this.board.getWords());try{for(r.s();!(t=r.n()).done;){var n,i=v(t.value);try{for(i.s();!(n=i.n()).done;){var o=n.value;e+=this.tileContiner.pointList[o]}}catch(t){i.e(t)}finally{i.f()}}}catch(t){r.e(t)}finally{r.f()}this.displayPoint.textContent=e}},{key:"getDistance",value:function(t,e,r,n){return Math.sqrt(Math.pow(t-e,2)+Math.pow(r-n,2))}},{key:"render",value:function(){this.board.boardRender(),this.tileContiner.setRowSize(this.board.rowSize);var t,e=v(this.tiles);try{for(e.s();!(t=e.n()).done;){var r=t.value;r.setTransition(!1),r.setSize(this.board.rowSize),r.setPositionToTargetRow()}}catch(t){e.e(t)}finally{e.f()}}}],r&&b(e.prototype,r),n&&b(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())},504:()=>{},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,o=Object.create(i.prototype),a=new T(n||[]);return o._invoke=function(t,e,r){var n=h;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw o;return j()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:f,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",y={};function p(){}function g(){}function m(){}var w={};u(w,o,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(S([])));L&&L!==r&&n.call(L,o)&&(w=L);var x=m.prototype=p.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(i,o,a,s){var u=l(t[i],t,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=m,u(x,"constructor",m),u(m,"constructor",g),g.displayName=u(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new k(c(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,s,"Generator"),u(x,o,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;R(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,t=[],n.O=(e,r,i,o)=>{if(!r){var a=1/0;for(l=0;l<t.length;l++){for(var[r,i,o]=t[l],s=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={773:0,170:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var i,o,[a,s,u]=r,c=0;if(a.some((e=>0!==t[e]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var l=u(n)}for(e&&e(r);c<a.length;c++)o=a[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self.webpackChunkmon_scrabble=self.webpackChunkmon_scrabble||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.O(void 0,[170],(()=>n(204)));var i=n.O(void 0,[170],(()=>n(504)));i=n.O(i)})();