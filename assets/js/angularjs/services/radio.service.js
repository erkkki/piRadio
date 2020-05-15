import angular from 'angular';

/* @ngInject */
class RadioApi {
    constructor($http) {
        this.$http = $http;
    }

    getTopStations() {
        return this.$http.get('/api/radiobrowser/stations/byvote');
    }

    getCountries() {
        return this.$http.get('/api/radiobrowser/countries');
    }

    getGenres() {
        return this.$http.get('/api/radiobrowser/genres');
    }

    getStationById(station_id) {
        return this.$http.get('/api/radiobrowser/station/byid/'+ station_id);
    }

    getStationsByGenre(genre) {
        return this.$http.get('/api/radiobrowser/stations/bygenre/'+ genre);
    }

    getStationsByCountry(country) {
        return this.$http.get('/api/radiobrowser/stations/bycountry/'+ country);
    }
}

export default angular.module('services.radio', [])
    .service('RadioApi', RadioApi)
    .name;