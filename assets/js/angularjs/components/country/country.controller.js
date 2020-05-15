/* @ngInject */
export default class CountryController {
    constructor (RadioApi) {
        this.RadioApi = RadioApi;
        this.countrys = [];
    }

    $onInit() {
        let self = this;

        this.RadioApi.getCountries().then(function (response) {
            self.countrys = JSON.parse(response.data);
        })
    }
}