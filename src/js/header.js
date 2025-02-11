const burgerIcon = document.querySelector(".header-menu-img");
const headerModal = document.querySelector(".header-modal");
const closeModal = document.querySelector(".header-menu-close-img");
const headerOrderButton = document.querySelector(".header-modal-btn-order");
const modalNav = document.querySelector('.header-modal-menu-list');
const headerMenu = document.querySelector(".header-menu-btn");
const headerMenuNav = document.querySelector(".header-menu-list.header-hidden");

burgerIcon.addEventListener("click", () => {
  headerModal.classList.add("active");
  document.body.classList.add('overflow-hidden');
});

closeModal.addEventListener("click", () => {
  headerModal.classList.remove("active");
  document.body.classList.remove('overflow-hidden');
});

headerOrderButton.addEventListener("click", () => {
  headerModal.classList.remove("active");
  document.body.classList.remove('overflow-hidden');
})


modalNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    headerModal.classList.remove("active");
    document.body.classList.remove('overflow-hidden');
  }
});


headerMenu.addEventListener('click', () => {
  headerMenuNav.classList.toggle("header-hidden")
})
