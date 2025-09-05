

//Nav----------------------------------------------

//menu mobile---------------------------------------------------------
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  const links = document.getElementsByClassName('a-nav');
  const logo = document.getElementById('logo');
  const menuIcon = document.querySelector('.menu-icon');

  if (window.scrollY > 0) {
    navbar.classList.add('scroll-active');
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = 'white';
    }
    logo.src = "assets/resources/img/svg/logo-white.svg";

    // só troca para menu branco se o menu não estiver aberto
    if (!document.querySelector('.mobile-menu').classList.contains('open')) {
      menuIcon.src = "assets/resources/img/svg/menu.svg";
    }
  } else {
    navbar.classList.remove('scroll-active');
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = '#5A0F98'; 
    }
    logo.src = "assets/resources/img/svg/logo-roxo.svg";

    // só troca para menu roxo se o menu não estiver aberto
    if (!document.querySelector('.mobile-menu').classList.contains('open')) {
      menuIcon.src = "assets/resources/img/svg/menu-roxo.svg";
    }
  }
});


function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  let menuIcon = document.querySelector('.menu-icon');

  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      
      // decide o ícone certo dependendo do scroll
      if (window.scrollY > 0) {
        menuIcon.src = "assets/resources/img/svg/menu.svg"; 
      } else {
        menuIcon.src = "assets/resources/img/svg/menu-roxo.svg"; 
      }
  } else {
      menuMobile.classList.add('open');
      if (window.scrollY > 0) {
        menuIcon.src = "assets/resources/img/svg/close.svg";
      } else {
        menuIcon.src = "assets/resources/img/svg/close-roxo.svg";
      }
  }
}

document.addEventListener('click', (event) => {
  const menuMobile = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');

  if (
      !menuMobile.contains(event.target) && 
      !menuIcon.contains(event.target)     
  ) {
      menuMobile.classList.remove('open');
      
      // decide o ícone certo dependendo do scroll
      if (window.scrollY > 0) {
        menuIcon.src = "assets/resources/img/svg/menu.svg"; 
      } else {
        menuIcon.src = "assets/resources/img/svg/menu-roxo.svg"; 
      }
  }
});
