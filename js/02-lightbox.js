import { galleryItems } from './gallery-items.js';
// Change code below this line

const mainGallery = document.querySelector('.gallery');


galleryItems.forEach(item => {
  const myImage = document.createElement('li');
  myImage.innerHTML = `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`;
  mainGallery.append(myImage);
});


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });