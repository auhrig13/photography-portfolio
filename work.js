let lightboxImages = document.querySelectorAll(".work-img-grid img")

for(let i = 0; i < lightboxImages.length; i++) {
    lightboxImages[i].addEventListener("click", openLightbox)
}

function openLightbox(ev) {
    document.querySelector(".featured-image").src = ev.target.src
    document.querySelector(".lightbox-container").style.display = "flex";
}

const closeButton = document.querySelector(".close-button")
console.log(closeButton)

closeButton.addEventListener("click", closeLightbox)

function closeLightbox() {
    document.querySelector(".lightbox-container").style.display = "none";
}