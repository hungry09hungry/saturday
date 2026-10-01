const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCap = document.getElementById('lightbox-cap');
const closeBtn = document.getElementById('lightbox-close');

//gallery

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const figcap = img.parentElement.querySelector('figcaption');
        console.log(figcap);
        lightboxImg.src = img.src;
        lightboxCap.textContent = figcap.textContent;
        lightbox.classList.add('open');
    });
});

function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
}

closeBtn.addEventListener('click', closeLightbox);