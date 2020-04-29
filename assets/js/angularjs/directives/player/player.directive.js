import angular from 'angular';
import PlayerController from './player.controller';
import OnErrorDirective from '../onerror.directive';


function player() {
    return {
        restrict: 'E',
        template: require('./player.html'),
        controller: PlayerController,
        controllerAs: '$player',
    }
}

/* @ngInject */
export default angular.module('directives.player', [OnErrorDirective])
    .directive('player', player)
    .name;
