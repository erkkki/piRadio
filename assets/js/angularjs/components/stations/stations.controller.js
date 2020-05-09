/* @ngInject */
export default class StationsController {
    constructor ($rootScope,$scope, $http, $stateParams) {
        this.$rootScope = $rootScope;
        this.$stateParams = $stateParams;
        this.$http = $http;
        this.stations = [];
    }

    $onInit() {
        let self = this;

        let path = '/api/radiobrowser/stations/';

        if(this.$stateParams.by === 'country') {
            path = path + 'bycountry/';
        }
        else if(this.$stateParams.by === 'genre') {
            path = path + 'bytag/';
        }
        else {
            path = path + 'bycountry/';
        }

        this.$http.get(path + this.$stateParams.id)
            .then(function (response) {
                self.stations = JSON.parse(response.data);
            });

    }
}
