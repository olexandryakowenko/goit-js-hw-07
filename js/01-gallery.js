import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onImageClick);

function createMarkup(arr) {
  return arr.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`,
    ""
  );
}

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(`
  <img src = "${evt.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
