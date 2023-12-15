console.log('hello');

import { data } from './data.js';

const burgerMenu = document.querySelector('.burger-button');
const buttonClose = document.querySelector('.burger-close');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const openMenu = () => {
  header.style.display = 'block';
  main.style.display = 'none';
};
const closeMenu = () => {
  header.style.display = 'none';
  main.style.display = 'block';
};
burgerMenu.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);
