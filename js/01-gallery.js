import { galleryItems } from './gallery-items.js';
// Change code below this line
const mainGallery = document.querySelector('.gallery');
const galleryContainer = [];

galleryItems.forEach(item => {
  const myImage = document.createElement('li');
  myImage.classList.add('gallery__item');
  myImage.innerHTML = `<a class="gallery__link" href=${item.original}>
  <img
    class="gallery__image"
    src=${item.preview}
    data-source=${item.original}
    alt=${item.description}
  />
</a>`;
  galleryContainer.push(myImage);
});

mainGallery.append(...galleryContainer);

console.log(galleryItems);
console.log(mainGallery);

mainGallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(
      `
		<img src=${e.target.dataset.source}>
	`,
      {
        onShow: instance => {
          document.addEventListener(
            'keydown',
            e => {
              if (e.key === 'Escape') {
                instance.close();
              }
            },
            { once: true }
          );
        },
      }
    )
    .show();
});