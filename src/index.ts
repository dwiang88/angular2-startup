require('zone.js');
import 'reflect-metadata';

import { bootstrap } from 'angular2/platform/browser';
import { App } from './app';

document.addEventListener('DOMContentLoaded', function (event) {
  bootstrap(App);
}, false);
