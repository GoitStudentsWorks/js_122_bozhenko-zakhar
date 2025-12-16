import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion', {
  duration: 300,
  showMultiple: false,
  collapse: true,
});

const buttons = document.querySelectorAll('.ac-header .ac-trigger');

buttons.forEach(button => {
  const icon = button.querySelector('.icon-plus');
  button.addEventListener('click', () => {
    const useTag = icon.querySelector('use');
    const current = useTag.getAttribute('href');
    if (current.includes('icon-add')) {
      useTag.setAttribute('href', './img/sprite.svg#icon-close');
    } else {
      useTag.setAttribute('href', './img/sprite.svg#icon-add');
    }
  });
});




