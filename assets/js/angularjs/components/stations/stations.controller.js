/* @ngInject */
export default class StationsController {
    constructor ($stateParams, $window, RadioApi) {
        this.$stateParams = $stateParams;
        this.$window = $window;
        this.RadioApi = RadioApi;

        this.stations = [];
    }

    $onInit() {
        let self = this;

        if(this.$stateParams.by === 'country') {
            this.RadioApi.getStationsByCountry(this.$stateParams.id)
                .then(function (response) {
                    self.stations = response.data;
                }
            );
        }
        else if(this.$stateParams.by === 'genre') {
            this.RadioApi.getStationsByGenre(this.$stateParams.id)
                .then(function (response) {
                        self.stations = response.data;
                    }
                );
        }
        else {
            this.$window.location.href = '/';
        }

    }
}
