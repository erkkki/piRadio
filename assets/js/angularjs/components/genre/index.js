import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import './genres.css';

import GenreController from './genre.controller';
import routing from './genre.routes';


export default angular.module('app.Genre', [uiRouter])
    .config(routing)
    .controller('GenreController', GenreController)
    .name;

// GenreController.$inject = ['$Scope','$http'];

