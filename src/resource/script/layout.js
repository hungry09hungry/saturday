const background = document.querySelector('.background');
const main = document.querySelector('main');

background.insertAdjacentHTML('afterbegin', '<img src="/resource/img/aha-hand.webp" id="aha-hand" class="bgimgs"><img src="/resource/img/aha.webp" id="aha" class="bgimgs"><img src="/resource/img/tv.webp" id="tv" class="bgimgs"><img src="/resource/img/screen.webp" id="screen" class="bgimgs">');

main.insertAdjacentHTML('afterbegin', '<nav><a href="/index.html">index</a><a href="/gallery/index.html">gallery</a><a href="/journal/index.html">journal</a><a href="/oekaki/index.html">oekaki</a></nav>');
console.log(background.innerHTML);
console.log(main.innerHTML);