import angular from 'angular';

import './station.css';

import StationController from './station.controller';

function station() {
    return {
        restrict: 'E',
        template: require('./station.html'),
        controller: StationController,
        controllerAs: '$station',
    }
}

/* @ngInject */
export default angular.module('directives.station', [])
    .directive('station', station)
    .name;
