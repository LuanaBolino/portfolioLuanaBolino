

//Nav----------------------------------------------

//menu mobile---------------------------------------------------------
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  const links = document.getElementsByClassName('a-nav');
  const logo = document.getElementById('logo')

  if (window.scrollY > 0) {
    navbar.classList.add('scroll-active');
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = 'white';
    }
    logo.src = "/assets/resources/img/svg/logo-white.svg";
  } else {
    navbar.classList.remove('scroll-active');
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = '#5A0F98'; // ou a cor que preferir
    }
  }
});


  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuIcon = document.querySelector('.menu-icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIcon.src = "assets/resources/img/svg/menu.svg"; 
    } else {
        menuMobile.classList.add('open');
        menuIcon.src = "assets/resources/img/svg/close.svg";
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
        menuIcon.src = "assets/resources/img/svg/menu.svg"; 
    }
});