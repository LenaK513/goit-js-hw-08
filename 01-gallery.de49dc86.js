const e=e=>`\n<div class="gallery__item">\n<a class="gallery__link" href="large-image.jpg">\n  <img\n    class="gallery__image"\n   src="${e.preview}"\n    data-source="${e.original}"\n    alt='${e.description}'\n  />\n</a>\n</div>\n`,n=galleryItems.map(e).join(""),t=document.querySelector(".gallery");t.insertAdjacentHTML("beforeend",n),t.addEventListener("click",o);const a=basicLightbox.create('<img id="image-new" src="" >',{onShow:e=>{window.addEventListener("keydown",l)}},{onClose:e=>{window.removeEventListener("keydown",l)}});function o(e){e.preventDefault(),console.log(e.target.dataset.source),"IMG"===e.target.nodeName&&(a.element().querySelector("#image-new").src=e.target.dataset.source,a.show())}function l(e){e.preventDefault(),"Escape"!==e.code||a.close()}var r={listOfElements:e,listOfImages:n,gallery:t,instance:a,onBigUrlImageClick:o,onEscapeButtonEvent:l};console.log(r);
//# sourceMappingURL=01-gallery.de49dc86.js.map
