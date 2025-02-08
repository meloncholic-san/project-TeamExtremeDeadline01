function toggleAnimation(elementSelector, className) {
  const element = document.querySelector(elementSelector);
  if (!element) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      });
    },
    { threshold: 0.001 }
  );

  observer.observe(element);
}

toggleAnimation('.covers-list', 'covers-animation');
