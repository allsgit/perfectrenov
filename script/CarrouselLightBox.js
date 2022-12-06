function LightboxPop() {
  const image = document.querySelectorAll('.thumbnail-1');
  image.forEach((element) => {
    element.addEventListener('click', (e) => {
      mainContainer.style.filter = 'blur(10px)';
      const lightbox = document.querySelector('.overbox');
      lightbox.style.display = 'flex';
      lightbox.style.opacity = '1';
      mainContainer.style.pointerEvents = 'none';
      const imageAppend = document.createElement('img');
      const close = document.createElement('button');
      close.className = 'close';
      close.innerText = 'X';
      lightbox.appendChild(imageAppend);
      lightbox.appendChild(close);
      imageAppend.src = e.target.src;
      close.addEventListener('click', () => {
        lightbox.style.display = 'none';
        imageAppend.remove();
        close.remove();
        mainContainer.style.filter = 'blur(0px)';
        mainContainer.style.pointerEvents = 'auto';
      });
    });
  });
}
LightboxPop();
