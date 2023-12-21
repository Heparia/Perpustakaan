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
import peringatan from './local-storage/peringatan.js';

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

  document.querySelector('.icon-foot').innerHTML = `
  <a href="mailto:heparia.ramdhani@gmail.com?subject=Web%20Perpustakaan&body=Pesan%20dari%20web%20perpustakaan"><img src='${email}' title="heparia.ramdhani@gmail.com"></a>
  <a href="tel:+6282135701110"><img src='${telp}' title="+6282135701110"></a>
  <a href="#"><img src='${jam}' title="09.00-17.00 WIB"></a>`
}

let navAktif = "beranda";
  
const navbar =() => {
  const selectElement = document.querySelector('.navbar-select');
  const targetValue = navAktif;
  for (var i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].value === targetValue) {
      selectElement.selectedIndex = i;
      break;
    }
  }
  document.querySelector('.navbar-select').addEventListener('change', async function() {
    const body = document.querySelector('body')
    const pageName = this.value;
    try {
      if(pageName == "beranda") {
        Beranda(top_book)
        const headImg = document.querySelectorAll('.head-img');
        component(headImg, head, 'head-img');
        body.id = 'beranda'
        navAktif = 'beranda'
      }
      else if(pageName == "buku"){
        const data = await BookDefault(defaultBook);
        DisplayHeader()
        DisplayMain(data);
        body.id = 'buku'
        navAktif = 'buku'
      }
      else if(pageName =="kontak"){
        kontak();
        body.id = "kontak"
        navAktif = 'kontak'
      }
    } catch {
      alert("Server mengalami kesalahan. Tolong coba lagi dalam beberapa menit kedepan!")
    }
  });  
}

document.addEventListener('DOMContentLoaded', () => {
  pengguna();
  Beranda(top_book)
  loadComponent();
  const body = document.querySelector('body')
  peringatan()
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.classList.remove('clicked');
      if(link.getAttribute('data-page') === navAktif){
        console.log(link)
        console.log("halo")
        link.classList.add('clicked')
      }
      link.addEventListener('click', async function(event) {
        console.log(link)
          event.preventDefault();
          const pageName = this.getAttribute('data-page');
          navLinks.forEach(navLink => {
              navLink.classList.remove('clicked');
          });
          try {
            if(pageName == "beranda") {
              Beranda(top_book)
              const headImg = document.querySelectorAll('.head-img');
              component(headImg, head, 'head-img');
              body.id = 'beranda'
              navAktif = 'beranda'
            }
            else if(pageName == "buku"){
              const data = await BookDefault(defaultBook);
              DisplayHeader()
              DisplayMain(data);
              body.id = 'buku'
              navAktif = 'buku'
            }
            else if(pageName =="kontak"){
              kontak();
              body.id = "kontak"
              navAktif = 'kontak'
            }
            this.classList.add('clicked');
          } 
          catch {
            alert("Server mengalami kesalahan. Tolong coba lagi dalam beberapa menit kedepan!")
          }
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
  const myFunction = (x) => {
  
    if (x.matches) {
      document.querySelector('.ns-second').classList.remove('inactive')
      document.querySelector('.ns-first').classList.add('inactive')
      navbar()
    } else {
      document.querySelector('.ns-second').classList.add('inactive')
      document.querySelector('.ns-first').classList.remove('inactive')
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
          link.classList.remove('clicked');
          if(link.getAttribute('data-page') === navAktif){
            console.log(link)
            console.log("halo")
            link.classList.add('clicked')
          }
        }
      )
    }
  }
  
  const x = window.matchMedia("only screen and (max-width: 600px)");
  myFunction(x);
  x.addEventListener("change", function () {
    myFunction(x);
  });
  
});