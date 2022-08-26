const listOfElements = galleryItem => {
  return `
<div class="gallery__item">
<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>
</div>
`;
};

const listOfImages = galleryItems.map(listOfElements).join('');

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', listOfImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
});

export default {
  listOfElements,
  listOfImages,
  gallery,
  lightbox,
};
