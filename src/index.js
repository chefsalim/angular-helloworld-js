import angular from 'angular';

import 'reflect-metadata';
import 'zone.js/dist/zone';
import { UpgradeAdapter } from '@angular/upgrade';

import {hello} from './app/hello';
import {HelloComponent} from './app/hello.component';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

const upgradeAdapter = new UpgradeAdapter();

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello)
  .directive('hellov2', upgradeAdapter.downgradeNg2Component(HelloComponent));

upgradeAdapter.bootstrap(document.body, ['app'], {strictDi: false});
