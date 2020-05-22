import angular from 'angular';

/* @ngInject */
class RadioApi {
    constructor($http) {
        this.$http = $http;
    }

    getTopStations() {
        return this.$http.get('/api/radio/stations');
    }

    getCountries() {
        return this.$http.get('/api/radio/countries');
    }

    getGenres() {
        return this.$http.get('/api/radio/genres');
    }

    getStationById(station_id) {
        return this.$http.get('/api/radio/stations/by/byuuid/'+ station_id);
    }

    getStationsByGenre(genre) {
        return this.$http.get('/api/radio/stations/by/bytag/'+ genre);
    }

    getStationsByCountry(country) {
        return this.$http.get('/api/radio/stations/by/bycountry/'+ country);
    }
}

export default angular.module('services.radio', [])
    .service('RadioApi', RadioApi)
    .name;