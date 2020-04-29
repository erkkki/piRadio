export default class CountryController {
    /* @ngInject */
    constructor ($scope, $http) {
        this.$scope = $scope;
        this.$http = $http;

        this.countrys = [];
    }

    $onInit() {
        let self = this;
        this.$http.get('/api/radiobrowser/countries')
            .then(function (response) {
                self.countrys = JSON.parse(response.data);
            });
    }
}