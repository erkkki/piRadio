import angular from 'angular';
import AlertController from './alert.controller';

import './alert.css';


export default angular.module('directives.alert', [])
    .directive('alert', function () {
        return {
            restrict: 'E',
            template: require('./alert.html'),
            controller: AlertController,
            controllerAs: '$alert',
        }
    })
    .name;


