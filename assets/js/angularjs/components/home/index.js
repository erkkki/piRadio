import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import HomeController from './home.controller';
import routing from './home.routes';


export default angular.module('app.home', [uiRouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;

HomeController.$inject = ['$rootScope','$http'];