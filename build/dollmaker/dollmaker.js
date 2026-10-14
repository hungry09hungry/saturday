const closetThumb = document.querySelectorAll('.thumb');
const btn = document.querySelector('#takepic');
console.log(btn + 'this is a button')
const hair = document.querySelector('#hair');

closetThumb.forEach((thumb) => {
    const thumbSrc = thumb.getAttribute('src');
    const partSrc = thumbSrc
    .replace('thumb/', '')
    .replace('-thumb', '');

    const targetID = thumb.closest('[data-target]').dataset.target;
    const clipSrc = thumb.dataset.clip;

    thumb.addEventListener('click', () => {
        document.getElementById(targetID).src = partSrc;
        if (targetID === 'outfit') {
            hair.style.maskImage = clipSrc ? `url('${clipSrc}')` : 'none';
        }
    });
});

btn.addEventListener('click', () => {
    html2canvas(document.querySelector('#doll')).then(function(canvas) {
        download(canvas);
    });
});

const download = function (canvas) {
    const link = document.createElement('a');
    link.download = 'trick-or-treat.png';
    link.href = canvas.toDataURL()
    link.click();
}
