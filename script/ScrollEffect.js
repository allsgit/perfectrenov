function ScrollEffect() {
    if (window.innerWidth >= 1024) {
      const realisation = document.querySelector('.realisation');
      const explain = document.querySelector('.explain');
      window.addEventListener('scroll', ()  => {
        if (window.scrollY <= 200) {
          realisation.style.opacity = '0';
          realisation.style.transition = '1.5s';
  
          explain.style.opacity = '0';
          explain.style.transition = '1s ease-in-out';
          explain.style.transform = 'translateY(150px)';
        } else {
          realisation.style.opacity = '1';
          explain.style.opacity = '1';
          explain.style.transform = 'translateY(0)';
        }
      });
      window.addEventListener('scroll', () => {
        const ContactButton = document.querySelector('.number');
        const ContactButton2 = document.querySelector('.num');
        const header = document.querySelector('header');
        const postHeader = document.querySelector('.postheader');
  
        if (window.scrollY >= 190) {
          header.appendChild(ContactButton);
          ContactButton.style.top = '5%';
          ContactButton.style.right = '36%';
          ContactButton.style.background = 'black';
          ContactButton2.style.color = '#AD974F';
          ContactButton.style.opacity = '1';
          ContactButton.style.transition = '0.3s';
        } else {
          postHeader.appendChild(ContactButton);
          ContactButton.style.top = '330px';
          ContactButton.style.right = '10%';
          ContactButton.style.background = 'white';
          ContactButton2.style.color = 'black';
          ContactButton.style.position = 'absolute';
        }
      });
    }
}
ScrollEffect()