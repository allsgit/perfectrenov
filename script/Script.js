const mainContainer = document.querySelector('.main-container');
const hamburger = document.querySelector('.hamb');
const body = document.querySelector('body');
const footer = document.querySelector('.adress');
const date = new Date();
const year = date.getFullYear();

// responsiv menu
function HambResponsiv() {
  let isOpen = false;
  hamburger.addEventListener('click', () => {
    const spanOne = document.querySelector('.hamb-span1');
    const spanTwo = document.querySelector('.hamb-span2');
    const spanThree = document.querySelector('.hamb-span3');
    if (isOpen === false) {
      spanOne.style.transform = 'rotate(50deg)';
      spanOne.style.opacity = '0';
      spanTwo.style.transform = 'rotate(-50deg)';
      spanTwo.style.opacity = '0';
      spanThree.style.opacity = '0';
      spanThree.style.display = 'none';
      document.querySelector('.resp-menu').style.height = '243px';

      document.querySelector('.close2').style.opacity = '1';

      isOpen = true;
    } else if (isOpen === true) {
      spanOne.style.transform = 'rotate(0deg)';
      spanOne.style.opacity = '1';
      spanTwo.style.transform = 'rotate(0deg)';
      spanTwo.style.opacity = '1';
      spanThree.style.opacity = '1';
      spanThree.style.display = 'block';
      document.querySelector('.resp-menu').style.height = '0px';

      document.querySelector('.close2').style.opacity = '0';

      isOpen = false;
    }
  });
}
HambResponsiv();

function GetYearToAdd() {
  const yearForFooter = document.createElement('h3');
  footer.appendChild(yearForFooter);
  yearForFooter.innerText = `PERFECT RENOVATION ${year}`;
}
GetYearToAdd();
