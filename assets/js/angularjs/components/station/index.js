import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import StationController from './station.controller';
import routing from './station.routes';

export default angular.module('app.station', [uiRouter])
    .config(routing)
    .controller('StationController', StationController)
    .name;

StationController.$inject = ['$rootScope','$scope','$http','$stateParams'];