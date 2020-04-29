import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import GenreController from './Genre.controller';
import routing from './genre.routes';


export default angular.module('app.Genre', [uiRouter])
    .config(routing)
    .controller('GenreController', GenreController)
    .name;

// GenreController.$inject = ['$Scope','$http'];
