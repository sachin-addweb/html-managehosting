window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
  const hamburgerMenu = document.querySelector('.toggle-btn');
  const menuContainer = document.querySelector('.main-header');
  const mainContainer = document.querySelector('.main-content');
  const closeMenu = document.querySelector(".close-btn");
  // const menu = document.querySelector('.menu');

  hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('menu--open');
    menuContainer.classList.toggle('menu-container--open');
    mainContainer.classList.toggle('main-content--open');

  });
  closeMenu.addEventListener('click', function () {
    hamburgerMenu.classList.remove('menu--open');
    menuContainer.classList.remove('menu-container--open');
    mainContainer.classList.remove('main-content--open');

  });

});