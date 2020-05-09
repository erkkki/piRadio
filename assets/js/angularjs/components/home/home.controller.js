/* @ngInject */
export default class HomeController {
    constructor ($rootScope, $http) {
        this.$rootScope = $rootScope;
        this.$http = $http;
        this.stations = [];
    }

    $onInit() {
        let self = this;
        this.$http.get('/api/radiobrowser/stations/byvote')
            .then(function (response) {
                self.stations = JSON.parse(response.data);
            });
    }
}


