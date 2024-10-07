/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new A(n||[]);return c(a,"_invoke",{value:j(t,r,i)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",v="suspendedYield",y="executing",m="completed",_={};function b(){}function g(){}function w(){}var S={};f(S,u,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(T([])));L&&L!==o&&a.call(L,u)&&(S=L);var k=w.prototype=b.prototype=Object.create(S);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,c,i,u){var s=d(e[o],e,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):r.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function j(t,e,n){var o=h;return function(a,c){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw c;return{value:r,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var u=C(i,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function C(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,_;var c=a.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return c.next=c}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=w,c(k,"constructor",{value:w,configurable:!0}),c(w,"constructor",{value:g,configurable:!0}),g.displayName=f(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},E(q.prototype),f(q.prototype,s,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var c=new q(p(t,e,r,o),a);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},E(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return i.type="throw",i.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var u=a.call(c,"catchLoc"),s=a.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var c=t.apply(e,n);function i(t){r(c,o,a,i,u,"next",t)}function u(t){r(c,o,a,i,u,"throw",t)}i(void 0)}))}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-24",headers:{authorization:"d8924f35-962a-45f8-9e42-e25d9d1dfa42","Content-Type":"application/json"}},c=new Promise((function(t,e){fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(e){t(e)}))})),i=new Promise((function(t,e){fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(e){t(e)}))})),u=function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:r})});case 2:if(!(n=t.sent).ok){t.next=5;break}return t.abrupt("return",n.json());case 5:return t.next=7,Promise.reject("Ошибка: ".concat(n.status));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(r,n){var o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:r,about:n})});case 2:if(!(o=t.sent).ok){t.next=5;break}return t.abrupt("return",o.json());case 5:return t.next=7,Promise.reject("Ошибка: ".concat(o.status));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(r,n){var o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:r,link:n})});case 2:if(!(o=t.sent).ok){t.next=5;break}return t.abrupt("return",o.json());case 5:return t.next=7,Promise.reject("Ошибка: ".concat(o.status));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:a.headers});case 2:if(!(n=t.sent).ok){t.next=5;break}return t.abrupt("return",n.json());case 5:return t.next=7,Promise.reject("Ошибка: ".concat(n.status));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a.baseUrl,"/cards/likes/").concat(r._id),{method:"PUT",headers:a.headers});case 2:if(!(n=t.sent).ok){t.next=5;break}return t.abrupt("return",n.json());case 5:return t.next=7,Promise.reject("Ошибка: ".concat(n.status));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a.baseUrl,"/cards/likes/").concat(r._id),{method:"DELETE",headers:a.headers});case 2:if(!(n=t.sent).ok){t.next=5;break}return t.abrupt("return",n.json());case 5:return t.next=7,Promise.reject("Ошибка: ".concat(n.status));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=document.querySelector("#card-template").content;function v(t,e,r,n){var o=h.querySelector(".places__item").cloneNode(!0);!function(t,e){var r=e.querySelector(".card__image");r.src=t.link,r.alt=t.name,e.querySelector(".card__title").textContent=t.name,e.querySelector(".card__like-counter").textContent=t.likes.length}(t,o);var a=o.querySelector(".card__delete-button");a.addEventListener("click",(function(){e(t,o)})),"6c3b9b1e3b2e671f8f6aaa9b"!==t.owner._id&&a.classList.add("card__delete-button-hidden");var c=o.querySelector(".card__like-button");return c.addEventListener("click",(function(){r(c,t,o)})),o.querySelector(".card__image").addEventListener("click",(function(){return n(t.link,t.name)})),o}function y(t,e){f(t._id).then((function(){e.remove()})).catch((function(t){console.log(t)}))}function m(t,e,r){t.classList.contains("card__like-button_is-active")?(t.classList.toggle("card__like-button_is-active"),function(t,e){d(e).then((function(e){_(t,e)})).catch((function(t){console.log(t)}))}(r,e)):(t.classList.toggle("card__like-button_is-active"),p(e).then((function(t){_(r,t)})).catch((function(t){console.log(t)})))}function _(t,e){t.querySelector(".card__like-counter").textContent=e.likes.length}function b(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",S),t.addEventListener("click",w)}function g(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",S),t.removeEventListener("click",w)}function w(t){var e=t.currentTarget;t.target===e&&g(e)}function S(){"Escape"===event.key&&g(document.querySelector(".popup_is-opened"))}var x=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},L=function(t,e){Array.from(t.querySelectorAll(e.inputSelector)).forEach((function(r){x(t,r,e)}))},k=document.querySelector(".popup__button"),E=!1;k.textContent=E?"Сохранение...":"Сохранить";var q=document.querySelector(".profile__title"),j=document.querySelector(".profile__description"),C=document.querySelector(".profile__image-img");Promise.all([c,i]).then((function(t){var e,r,n,a=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,c,i=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(e,r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],i=a[1];n=c,q.textContent=n.name,j.textContent=n.about,C.src=n.avatar,function(t){t.forEach((function(t){return function(t){var e=v(t,y,m,H);P.append(e)}(t)}))}(i)})).catch((function(t){console.error(t)}));var P=document.querySelector(".places__list");document.querySelectorAll(".popup").forEach((function(t){t.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&g(t)}))}));var O=document.querySelector(".profile__image-button"),A=document.querySelector(".popup_type_avatar");O.addEventListener("click",(function(){return function(t){b(t),T.value=C.src}(A)}));var T=document.querySelector(".popup__input_type_avatar_url"),N=document.querySelector(".profile__edit-button"),U=document.querySelector(".popup_type_edit");N.addEventListener("click",(function(){return function(t){G.value=q.textContent,I.value=j.textContent,L(t,X),b(t)}(U)}));var G=document.querySelector(".popup__input_type_name"),I=document.querySelector(".popup__input_type_description"),B=document.querySelector(".profile__add-button"),D=document.querySelector(".popup_type_new-card");B.addEventListener("click",(function(){return function(t){V(t),b(t)}(D)}));var F=document.querySelector(".popup__image"),M=document.querySelector(".popup__caption"),J=document.querySelector(".popup_type_image");function H(t,e){b(J),F.src=t,F.alt=e,M.textContent=e}function V(t){var e=t.querySelector(".popup__button");e.disabled=!0,e.classList.add("popup__button_disabled")}document.querySelector(".popup_type_card-delete"),document.querySelector(".card__delete-button");var Y=document.forms.editProfile,z=Y.elements.name,$=Y.elements.description,K=document.forms.newPlace,Q=K.elements.placeName,R=K.elements.link,W=document.forms.avatar.elements.avatar;A.addEventListener("submit",(function(t){t.preventDefault(),E=!0;var e=W.value;u(e).then((function(t){C.src=t.avatar,E=!1})).catch((function(t){console.log(t)})),g(t.currentTarget),t.target.reset()})),U.addEventListener("submit",(function(t){t.preventDefault(),E=!0;var e=z.value,r=$.value;s(e,r).then((function(t){q.textContent=t.name,j.textContent=t.about,E=!1})).catch((function(t){console.log(t)})),g(t.currentTarget)})),D.addEventListener("submit",(function(t){t.preventDefault(),E=!0;var e=Q.value,r=R.value,n=[],o={_id:"6c3b9b1e3b2e671f8f6aaa9b"};l(e,r).then((function(){P.prepend(v({name:e,link:r,likes:n,owner:o},y,m,H)),E=!1})).catch((function(t){console.log(t)})),L(t.target,X),V(t.target),g(t.currentTarget),t.target.reset()})),document.querySelectorAll(".popup").forEach((function(t){t.classList.add("popup_is-animated")}));var X={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector));r.forEach((function(n){n.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?x(t,e,r):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.classList.add(n.errorClass),o.textContent=r}(t,e,e.validationMessage,r)}(t,n,e),function(t,e,r){var n=e.querySelector(r.submitButtonSelector);!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(n.disabled=!1,n.classList.remove(r.inactiveButtonClass)):(n.disabled=!0,n.classList.add(r.inactiveButtonClass))}(r,t,e)}))}))}(e,t)}))}(X)})();
//# sourceMappingURL=main.js.map