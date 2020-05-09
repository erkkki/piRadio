import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import StationsController from './stations.controller';
import routing from './stations.routes';

export default angular.module('app.stations', [uiRouter])
    .config(routing)
    .controller('StationsController', StationsController)
    .name;

StationsController.$inject = ['$rootScope','$scope','$http','$stateParams'];