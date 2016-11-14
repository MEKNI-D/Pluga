import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone'
import { RouterModule } from '@angular/router'

import { bootstrap } from '../node_modules/@angular/platform-browser-dynamic/';
import { HTTP_PROVIDERS } from '@angular/http';
import  { Router } from '@angular/router'
import { AppComponent } from './app/app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS, RouterModule]);