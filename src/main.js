"use strict";
require('core-js');
require('reflect-metadata');
require('zone.js/dist/zone');
const _1 = require('../node_modules/@angular/platform-browser-dynamic/');
const http_1 = require('@angular/http');
const app_component_1 = require('./app/app.component');
_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
