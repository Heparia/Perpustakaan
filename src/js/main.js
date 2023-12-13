import '../scss/styles.scss';

import component from './handle/component.js';
import Icon from '../asset/image/logo.png';
import lightIcon from '../asset/image/light.png';
import darkIcon from '../asset/image/dark.png';
import head from '../asset/image/head.png';
import DisplayHeaderBeranda from './display/beranda/display-header.js';

import BookDefault from './handle/book/book-default.js';
import DisplayMain from './display/buku/display-main.js';
import DisplayHeader from './display/buku/display-header.js';
import theme from './handle/theme.js';
import DisplayMainBeranda from './display/beranda/display-main.js';
import BookNewest from './handle/book/book-newest.js';
import Beranda from './display/beranda.js';

import _ from 'lodash';
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

const defaultBook = {
  'filter': 'free-ebooks',
  'listQuery' : ['teknologi', 'edukasi', 'pendidikan', 'informatika', 'komputer'],
}

const top_book = {
  'q':'Artificial Intelligent',
  'pengurutan': 'newest',
}

const loadComponent = () => {
  const elements = document.querySelectorAll('.logo');
  const iconLight = document.querySelectorAll('.light-icon');
  const iconDark = document.querySelectorAll('.dark-icon');
  const headImg = document.querySelectorAll('.head-img');
  component(elements, Icon, 'logo');
  component(iconLight, lightIcon, 'light-icon');
  component(iconDark, darkIcon, 'dark-icon');
  component(headImg, head, 'head-img');
}

document.addEventListener('DOMContentLoaded', () => {
  Beranda(top_book)
  loadComponent()
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', async function(event) {
          event.preventDefault();
          const pageName = this.getAttribute('data-page');
          if(pageName == "beranda") {
            Beranda(top_book)
            const headImg = document.querySelectorAll('.head-img');
            component(headImg, head, 'head-img');
          }
          else if(pageName == "buku"){
            const data = await BookDefault(defaultBook);
            DisplayHeader()
            DisplayMain(data);
          }
      });
  });
  theme()
});