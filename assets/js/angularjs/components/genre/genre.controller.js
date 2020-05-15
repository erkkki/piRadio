/* @ngInject */
export default class GenreController {
    constructor (RadioApi) {
        this.RadioApi = RadioApi;
        this.genres = [];
    }

    $onInit() {
        let self = this;

        this.RadioApi.getGenres().then(function (response) {
            self.genres = JSON.parse(response.data);
        })
    }
}
