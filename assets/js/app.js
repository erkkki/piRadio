// any CSS you import will output into a single css file (app.css in this case)
import '../css/global.scss';
import '../css/player.css';
import '../css/stations.css';
import '../css/country.css';
import '../css/genres.css';
import '../css/sidebar.css';
import '../css/mobile-navbar.css';
import '../css/glow-ball.css';
import '../css/glow-ball-2.css';
import '../css/alert.css';
import '../css/view-animation.css';
import '../css/svgTitle.css';


const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesContext.keys().forEach(imagesContext);

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
require('bootstrap');
require('hls.js');

// AngularJS
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import uiRouter from '@uirouter/angularjs';

import routing from './app.config';
import HomeState from './angularjs/components/home';
import GenreState from './angularjs/components/genre';
import CountryState from './angularjs/components/country';
import StationsState from './angularjs/components/stations';

import PlayerDirective from './angularjs/directives/player/player.directive';
import StationDirective from './angularjs/directives/station/station.directive';
import AlertDirective from './angularjs/directives/alert/alert.directive';


angular
    .module('app',[uiRouter, ngRoute, ngAnimate,
        HomeState, GenreState, CountryState, StationsState,
        PlayerDirective, AlertDirective, StationDirective])
    .config(routing)
    .filter('genreLimit',function () {
        return function (x) {
            return x.filter(genre => genre.stationcount > 200);
        }
    })
    .filter('stationLimit',function () {
        return function (x) {
            return x.filter(station => station.votes > 5);
        }
    })
    .filter('stationCountGreater',function () {
        return function (item,max) {
            if(item === undefined) return false;
            return item.filter(function(country){
                return country.stationcount > max;
            });
        }
    });

