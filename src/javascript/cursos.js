const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    if (content.classList.contains('open')) {
      content.style.maxHeight = null;
      content.classList.remove('open');
    } else {
      content.style.maxHeight = (content.scrollHeight + 50) + 'px';
      content.classList.add('open');
    }
  });
});