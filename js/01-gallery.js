import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

galleryContainer.addEventListener('click', onImgClick);


function onImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName === "IMG") {
        const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
`)
        instance.show();

    galleryContainer.addEventListener('keydown', evt => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    })
    
    }

    
}
 

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
}

