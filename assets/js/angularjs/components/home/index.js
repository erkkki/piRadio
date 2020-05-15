import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import './home.css';

import HomeController from './home.controller';
import routing from './home.routes';

import RadioApi from '../../services/radio.service';



export default angular.module('app.home', [uiRouter, RadioApi])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;
