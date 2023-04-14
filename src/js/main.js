window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
  if (document.body.contains(document.querySelector('.header-with-content-wrapper'))) {
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
  }

  // Onlick for dots 
  if (document.body.contains(document.querySelector('.dashboard-grid-view'))) {
    const dropButtons = document.querySelectorAll('.toggle-dropdown');
    const openDivs = document.querySelectorAll('.site-overview-inner-menu');

    dropButtons.forEach((button, index) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        openDivs[index].classList.toggle('expanded');
        e.stopPropagation();
      });
    });

    document.addEventListener('click', (event) => {
      openDivs.forEach(openDiv => {
        if (openDiv.classList.contains('expanded') && !openDiv.contains(event.target)) {
          openDiv.classList.remove('expanded');
        }
      });
    });
  }

  if (document.body.contains(document.querySelector('.sub-inner-header'))) {
    const eventButtons = document.querySelectorAll('.events-alert');
    const openMenu = document.querySelectorAll('.listing-dropdown');

    eventButtons.forEach((button, index) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        openMenu[index].classList.toggle('expanded-isting-dropdown');
        e.stopPropagation();
      });
    });

    document.addEventListener('click', (event) => {
      openMenu.forEach(openDiv => {
        if (openDiv.classList.contains('expanded-isting-dropdown') && !openDiv.contains(event.target)) {
          openDiv.classList.remove('expanded-isting-dropdown');
        }
      });
    });
  }



});