window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
  // if (document.body.contains(document.querySelector('.header-with-content-wrapper'))) {
  //   const hamburgerMenu = document.querySelector('.toggle-btn');
  //   const menuContainer = document.querySelector('.main-header');
  //   const mainContainer = document.querySelector('.main-content');
  //   const closeMenu = document.querySelector(".close-btn");
  //   // const menu = document.querySelector('.menu');

  //   hamburgerMenu.addEventListener('click', function () {
  //     hamburgerMenu.classList.toggle('menu--open');
  //     menuContainer.classList.toggle('menu-container--open');
  //     mainContainer.classList.toggle('main-content--open');

  //   });
  //   closeMenu.addEventListener('click', function () {
  //     hamburgerMenu.classList.remove('menu--open');
  //     menuContainer.classList.remove('menu-container--open');
  //     mainContainer.classList.remove('main-content--open');

  //   });
  // }

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

  if (document.body.contains(document.querySelector('.inner-menu-wrapper'))) {
    const eventButtons = document.querySelectorAll('.toggle--menu');
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

  if (document.body.contains(document.querySelector('.faqs')))  {

    function toggleItem(elem) {
      for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function (e) {
          var current = this;
          for (var i = 0; i < elem.length; i++) {
            if (current != elem[i]) {
              elem[i].classList.remove('active-accordion');
            } else if (current.classList.contains('active-accordion') === true) {
              current.classList.remove('active-accordion');
            } else {
              current.classList.add('active-accordion')
            }
          }
          e.preventDefault();
        });
      };
    }
    toggleItem(document.querySelectorAll('.accordion-listing'));
        function toggleItem(elem) {
      for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function (e) {
          var current = this;
          for (var i = 0; i < elem.length; i++) {
            if (current != elem[i]) {
              elem[i].classList.remove('active-accordion');
            } else if (current.classList.contains('active-accordion') === true) {
              current.classList.remove('active-accordion');
            } else {
              current.classList.add('active-accordion')
            }
          }
          e.preventDefault();
        });
      };
    }
    toggleItem(document.querySelectorAll('accordion-listing'));
  }

});