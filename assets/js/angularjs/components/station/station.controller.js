export default class StationController {
    /* @ngInject */
    constructor ($rootScope ,$scope, $http, $stateParams) {
        this.$rootScope = $rootScope;
        this.$http = $http;
        this.$stateParams = $stateParams;

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

    changeStation (station_id) {
        this.$rootScope.$broadcast('station', station_id);
    }
}
