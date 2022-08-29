import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${original} >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
  )
  .join("");

galleryList.innerHTML = markup;

galleryList.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
  <img src=${e.target.dataset.source}>`);

  instance.show();

  galleryList.addEventListener("keydown", closeOnEsc);

  function closeOnEsc(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
