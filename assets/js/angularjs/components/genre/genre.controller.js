export default class GenreController {
    /* @ngInject */
    constructor ($scope, $http) {
        this.$scope = $scope;
        this.$http = $http;

        this.genres = [];
    }

    $onInit() {
        let self = this;
        this.$http.get('/api/radiobrowser/tags')
            .then(function (response) {
                self.genres = JSON.parse(response.data);
            });
    }
}
