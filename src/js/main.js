import '../scss/styles.scss';
import Icon from '../asset/image/logo.png';
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
    elements.forEach((element) => {
      const myIcon = new Image();
      myIcon.src = Icon; 
      element.appendChild(myIcon);
    });
  };
  
component();