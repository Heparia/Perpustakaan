import '../scss/styles.scss';
import Icon from '../asset/image/logo.png';
import lightIcon from '../asset/image/light.png';
import darkIcon from '../asset/image/dark.png';
import head from '../asset/image/head.png';
import theme from './handle/theme.js';

import _ from 'lodash';
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

import BookParameters from "./handle/book/book-parameters.js";
import BookRunner from "./handle/book/book-runner.js";
import display from "./display/display.js";
require('dotenv').config();

document.addEventListener('DOMContentLoaded', async () => {
    console.log("Percobaan Default Get")
    let data = await BookRunner.runnerGet(BookParameters.default(["harry", "potter"]));
    console.log(data)
    display(data)
})

const component = () => {
    const elements = document.querySelectorAll('.logo');
    const iconLight = document.querySelectorAll('.light-icon');
    const iconDark = document.querySelectorAll('.dark-icon');
    const headImg = document.querySelectorAll('.head-img');
    elements.forEach((element) => {
      const myIcon = new Image();
      myIcon.src = Icon; 
      element.appendChild(myIcon);
    });
    iconLight.forEach((icon) => {
      const myIcon = new Image();
      myIcon.src = lightIcon;
      icon.appendChild(myIcon);
    })
    iconDark.forEach((icon) => {
      const myIcon = new Image();
      myIcon.src = darkIcon;
      icon.appendChild(myIcon);
    })
    headImg.forEach((icon) => {
      const myIcon = new Image();
      myIcon.src = head;
      icon.appendChild(myIcon);
    })
  };
  
component();

document.querySelector('.dark-icon').addEventListener('click', () => {
  theme(0);
})
document.querySelector('.light-icon').addEventListener('click', () => {
  theme(1);
})