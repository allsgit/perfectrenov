const carousel = document.querySelector('.carrousel');


function CarrouselFunc() {
  if (window.innerWidth > 400) {
    const arrowL = document.querySelector('.arrow-left');
    const arrowR = document.querySelector('.arrow-right');
    let init = 0;
    let amount = 200;
    arrowL.addEventListener('click', () => {
      if (init >= 600) {
        carousel.style.transform = `translate(0px)`;
        init = 0;
      } else {
        init += amount;
        carousel.style.transform = `translate(${init}px)`;
      }
    });
    let initT = 0;
    let amountT = 200;
    arrowR.addEventListener('click', () => {
      if (initT <= -600) {
        carousel.style.transform = `translate(0px)`;
        initT = 0;
      } else {
        initT = initT - amountT;
        carousel.style.transform = `translate(${initT}px)`;
      }
    });
  }
}
CarrouselFunc()
