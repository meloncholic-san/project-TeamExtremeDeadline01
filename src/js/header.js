const burgerIcon = document.querySelector(".header-menu-img");
const headerModal = document.querySelector(".header-modal");
const closeModal = document.querySelector(".header-menu-close-img");
const headerOrderButton = document.querySelector(".header-modal-btn-order");
const modalNav = document.querySelector('.header-modal-menu-list');
const headerMenu = document.querySelector(".header-menu-btn");
const headerMenuNav = document.querySelector(".header-menu-list.header-hidden");

burgerIcon.addEventListener("click", () => {
  headerModal.classList.add("active");
  document.body.classList.add("overflow-hidden");

  burgerIcon.classList.add("header-icon-hidden");
  closeModal.classList.add("header-icon-visible");
});

closeModal.addEventListener("click", () => {
  headerModal.classList.remove("active");
  document.body.classList.remove("overflow-hidden");

  burgerIcon.classList.remove("header-icon-hidden");
  closeModal.classList.remove("header-icon-visible");
});

headerOrderButton.addEventListener("click", () => {
  headerModal.classList.remove("active");
  document.body.classList.remove('overflow-hidden');

  burgerIcon.classList.remove("header-icon-hidden");
  closeModal.classList.remove("header-icon-visible");
})


modalNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    headerModal.classList.remove("active");
    document.body.classList.remove('overflow-hidden');

    burgerIcon.classList.remove("header-icon-hidden");
    closeModal.classList.remove("header-icon-visible");
  }
});


headerMenu.addEventListener('click', () => {
  if (headerMenuNav.classList.contains("menu-show")) {
    headerMenuNav.classList.remove("menu-animated");
    
    setTimeout(() => {
      headerMenuNav.classList.remove("menu-show"); 
      headerMenuNav.classList.add("header-hidden"); 
    }, 300); 
    
  } else {
    headerMenuNav.classList.remove("header-hidden"); 
    headerMenuNav.classList.add("menu-show"); 
    
    setTimeout(() => {
      headerMenuNav.classList.add("menu-animated");
    }, 10);
  }
});

  headerMenuNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      headerMenuNav.classList.remove("menu-animated");
      setTimeout(() => {
        headerMenuNav.classList.remove("menu-show"); 
        headerMenuNav.classList.add("header-hidden"); 
      }, 300); 
    }
  });
