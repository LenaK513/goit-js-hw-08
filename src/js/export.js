const listOfElements = galleryItem => {
  return `
<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
   src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt='${galleryItem.description}'
  />
</a>
</div>
`;
};
const listOfImages = galleryItems.map(listOfElements).join('');

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', listOfImages);

gallery.addEventListener('click', onBigUrlImageClick);

const instance = basicLightbox.create(
  `<img id="image-new" src="" >`,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscapeButtonEvent);
    },
  },
  {
    onClose: instance => {
      window.removeEventListener('keydown', onEscapeButtonEvent);
    },
  }
);

function onBigUrlImageClick(event) {
  event.preventDefault();

  console.log(event.target.dataset.source);
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector('#image-new').src =
    event.target.dataset.source;

  instance.show();
}

function onEscapeButtonEvent(event) {
  event.preventDefault();
  if (event.code === 'Escape') {
    instance.close();
    return;
  }
}

export default {
  listOfElements,
  listOfImages,
  gallery,
  instance,
  onBigUrlImageClick,
  onEscapeButtonEvent,
};
