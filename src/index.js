import angular from 'angular';

import 'reflect-metadata';
import 'zone.js/dist/zone';
import { UpgradeAdapter } from '@angular/upgrade';

import {hello} from './app/hello';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello);

const upgradeAdapter = new UpgradeAdapter();
upgradeAdapter.bootstrap(document.body, ['app'], {strictDi: false});
