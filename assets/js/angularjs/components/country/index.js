import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import './country.css';

import CountryController from './country.controller';
import routing from './country.routes';


export default angular.module('app.country', [uiRouter])
    .config(routing)
    .controller('CountryController', CountryController)
    .name;