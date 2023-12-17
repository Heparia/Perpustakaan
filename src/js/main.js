import '../scss/styles.scss';

import component from './handle/component.js';
import Icon from '../asset/image/logo.png';
import lightIcon from '../asset/image/light.png';
import darkIcon from '../asset/image/dark.png';
import head from '../asset/image/head.png';
import email from '../asset/image/email.png';
import telp from '../asset/image/telp.png';
import jam from '../asset/image/jam.png';
import pinterest from '../asset/image/pinterest.png';
import canva from '../asset/image/canva.png'
import DisplayHeaderBeranda from './display/beranda/display-header.js';

import BookDefault from './handle/book/book-default.js';
import DisplayMain from './display/buku/display-main.js';
import DisplayHeader from './display/buku/display-header.js';
import theme from './handle/theme.js';
import DisplayMainBeranda from './display/beranda/display-main.js';
import BookNewest from './handle/book/book-newest.js';
import Beranda from './display/beranda.js';
import pengguna from './local-storage/pengguna.js';
import kontak from './display/kontak.js';
import search from './handle/search.js';

import _, { forIn } from 'lodash';
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

  const femail = document.querySelectorAll('.icon-foot-email');
  const ftelp = document.querySelectorAll('.icon-foot-telp');
  const fjam = document.querySelectorAll('.icon-foot-jam');
  component(femail, email, 'email')
  component(ftelp, telp, 'telp')
  component(fjam, jam, 'jam')
  console.log(femail)

  const p = document.querySelectorAll('.foot-pinterest')
  const c = document.querySelectorAll('.foot-canva')
  component(p, pinterest, 'pinterest')
  component(c, canva, 'canva')
}

document.addEventListener('DOMContentLoaded', () => {
  pengguna();
  Beranda(top_book)
  loadComponent();
  const body = document.querySelector('body')
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', async function(event) {
          event.preventDefault();
          const pageName = this.getAttribute('data-page');
          navLinks.forEach(navLink => {
              navLink.classList.remove('clicked');
          });

          if(pageName == "beranda") {
            Beranda(top_book)
            const headImg = document.querySelectorAll('.head-img');
            component(headImg, head, 'head-img');
            body.id = 'beranda'
          }
          else if(pageName == "buku"){
            const data = await BookDefault(defaultBook);
            DisplayHeader()
            DisplayMain(data);
            body.id = 'buku'
          }
          else if(pageName =="kontak"){
            kontak();
            body.id = "kontak"
          }
          this.classList.add('clicked');
      });
  });
  theme()
  window.addEventListener("scroll", () => {
    const body = document.body;
    if (window.scrollY > 0) {
      body.classList.add("scrolling");
    } else {
      body.classList.remove("scrolling");
    }
  });
});