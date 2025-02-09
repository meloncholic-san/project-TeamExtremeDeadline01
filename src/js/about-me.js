import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.about-list', {
    duration: 400,
  });

  function toggleIcon(button, isOpen) {
    const iconUse = button.querySelector('use');
    if (iconUse) {
      const newIcon = isOpen ? 'icon-IconUp' : 'icon-IconDown';
      iconUse.outerHTML = `<use xlink:href="./img/icons/icon-sprite.svg#${newIcon}"></use>`;
    }
  }

  const items = document.querySelectorAll('.about-list-item');
  items.forEach(item => {
    const button = item.querySelector('.about-toggle-btn');
    const content = item.querySelector('.about-list-content');

    button.addEventListener('click', function () {
      const isActive = item.classList.toggle('is-active');
      toggleIcon(button, isActive);

      if (isActive) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
});
