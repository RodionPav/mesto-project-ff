(()=>{"use strict";function e(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var n={baseUrl:"https://nomoreparties.co/v1/wff-cohort-24",headers:{authorization:"d8924f35-962a-45f8-9e42-e25d9d1dfa42","Content-Type":"application/json"}};function r(t,r){return fetch("".concat(n.baseUrl).concat(t),r).then(e)}var o=new Promise((function(e,t){r("/users/me",{headers:n.headers}).then((function(t){e(t)}))})),c=new Promise((function(e,t){r("/cards",{headers:n.headers}).then((function(t){e(t)}))})),a=document.querySelector("#card-template").content;function i(e,t,n,r,o){var c=a.querySelector(".places__item").cloneNode(!0);!function(e,t){var n=t.querySelector(".card__image");n.src=e.link,n.alt=e.name,t.querySelector(".card__title").textContent=e.name,t.querySelector(".card__like-counter").textContent=e.likes.length}(e,c);var i=c.querySelector(".card__delete-button");i.addEventListener("click",(function(){t(e,c)})),e.owner._id!==o&&i.classList.add("card__delete-button-hidden");var u=c.querySelector(".card__like-button");return e.likes.forEach((function(e){e._id==o&&u.classList.toggle("card__like-button_is-active")})),u.addEventListener("click",(function(){n(u,e,c)})),c.querySelector(".card__image").addEventListener("click",(function(){return r(e.link,e.name)})),c}function u(e,t){var o;(o=e._id,r("/cards/".concat(o),{method:"DELETE",headers:n.headers})).then((function(){t.remove()})).catch((function(e){console.log(e)}))}function l(e,t,o){e.classList.contains("card__like-button_is-active")?function(e){return r("/cards/likes/".concat(e._id),{method:"DELETE",headers:n.headers})}(t).then((function(e){o.querySelector(".card__like-counter").textContent=e.likes.length})).catch((function(e){console.log(e)})).finally((function(){e.classList.toggle("card__like-button_is-active")})):function(e){return r("/cards/likes/".concat(e._id),{method:"PUT",headers:n.headers})}(t).then((function(e){o.querySelector(".card__like-counter").textContent=e.likes.length})).catch((function(e){console.log(e)})).finally((function(){e.classList.toggle("card__like-button_is-active")}))}function s(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",f),e.addEventListener("click",p)}function d(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",f),e.removeEventListener("click",p)}function p(e){var t=e.currentTarget;e.target===t&&d(t)}function f(){"Escape"===event.key&&d(document.querySelector(".popup_is-opened"))}var _,m=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},v=function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){m(e,n,t)}))},y=function(e){var t=e.querySelector(".popup__button");t.disabled=!0,t.classList.add("popup__button_disabled")};function h(e){var t=e.querySelector(".popup__button");t.textContent.includes("Сохранить")?t.textContent="Сохранение...":t.textContent="Сохранить"}var S=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),b=document.querySelector(".profile__image-img");Promise.all([o,c]).then((function(e){var n,r,o,c=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],s=c[1];_=(o=a)._id,S.textContent=o.name,g.textContent=o.about,b.src=o.avatar,function(e){e.forEach((function(e){return function(e){var t=i(e,u,l,D,_);q.append(t)}(e)}))}(s)}));var q=document.querySelector(".places__list");document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.contains("popup__close")&&d(e)}))}));var k=document.querySelector(".profile__image-button"),E=document.querySelector(".popup_type_avatar");k.addEventListener("click",(function(){return function(e){s(e),L.value=b.src}(E)}));var L=document.querySelector(".popup__input_type_avatar_url"),C=document.querySelector(".profile__edit-button"),x=document.querySelector(".popup_type_edit");C.addEventListener("click",(function(){return function(e){A.value=S.textContent,w.value=g.textContent,v(e,z),s(e)}(x)}));var A=document.querySelector(".popup__input_type_name"),w=document.querySelector(".popup__input_type_description"),P=document.querySelector(".profile__add-button"),T=document.querySelector(".popup_type_new-card");P.addEventListener("click",(function(){return function(e){y(e),s(e)}(T)}));var j=document.querySelector(".popup__image"),O=document.querySelector(".popup__caption"),B=document.querySelector(".popup_type_image");function D(e,t){s(B),j.src=e,j.alt=t,O.textContent=t}var N=document.forms.editProfile,M=N.elements.name,U=N.elements.description,I=document.forms.newPlace,J=I.elements.placeName,H=I.elements.link,V=document.forms.avatar.elements.avatar;E.addEventListener("submit",(function(e){var t;e.preventDefault(),h(e.target),(t=V.value,r("/users/me/avatar",{method:"PATCH",headers:n.headers,body:JSON.stringify({avatar:t})})).then((function(e){b.src=e.avatar,d(E)})).catch((function(e){console.log(e)})).finally((function(){h(e.target)}))})),x.addEventListener("submit",(function(e){var t,o;e.preventDefault(),h(e.target),(t=M.value,o=U.value,r("/users/me",{method:"PATCH",headers:n.headers,body:JSON.stringify({name:t,about:o})})).then((function(e){S.textContent=e.name,g.textContent=e.about,d(x)})).catch((function(e){console.log(e)})).finally((function(){h(e.target)}))})),T.addEventListener("submit",(function(e){e.preventDefault(),h(e.target);var t=J.value,o=H.value;(function(e,t){return r("/cards",{method:"POST",headers:n.headers,body:JSON.stringify({name:e,link:t})})})(t,o).then((function(n){q.prepend(i({name:t,link:o,likes:n.likes,owner:n.owner,_id:n._id},u,l,D,_)),d(T),v(e.target,z),y(e.target),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){h(e.target)}))})),document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated")}));var z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?m(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,r,t),function(e,t,n){var r=t.querySelector(n.submitButtonSelector);!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(r.disabled=!1,r.classList.remove(n.inactiveButtonClass)):(r.disabled=!0,r.classList.add(n.inactiveButtonClass))}(n,e,t)}))}))}(t,e)}))}(z)})();
//# sourceMappingURL=main.js.map