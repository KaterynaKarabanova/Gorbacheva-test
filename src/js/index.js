import { data } from './data.js';

const burgerMenu = document.querySelector('.burger-button');
const buttonClose = document.querySelector('.burger-close');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const handleMenu = () => {
  header.classList.toggle('open');
};

burgerMenu.addEventListener('click', handleMenu);
buttonClose.addEventListener('click', handleMenu);
