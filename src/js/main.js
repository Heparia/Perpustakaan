import '../scss/styles.scss';

import component from './handle/component.js';
import Icon from '../asset/image/logo.png';
import lightIcon from '../asset/image/light.png';
import darkIcon from '../asset/image/dark.png';
import head from '../asset/image/head.png';

import BookDefault from './handle/book/book-default.js';
import BookRender from './display/book-render.js';

import _ from 'lodash';
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

import display from "./display/display.js";

require('dotenv').config();

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', async function(event) {
          event.preventDefault();
          const pageName = this.getAttribute('data-page');
          if(pageName =="buku"){
            BookRender(await BookDefault());
          }
      });
  });
  const elements = document.querySelectorAll('.logo');
  const iconLight = document.querySelectorAll('.light-icon');
  const iconDark = document.querySelectorAll('.dark-icon');
  const headImg = document.querySelectorAll('.head-img');
  component(elements, Icon);
  component(iconLight, lightIcon);
  component(iconDark, darkIcon);
  component(headImg, head);
});
