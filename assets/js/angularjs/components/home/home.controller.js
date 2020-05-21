/* @ngInject */
export default class HomeController {
    constructor (RadioApi) {
        this.RadioApi = RadioApi;
        this.stations = [];

    }

    $onInit() {
        let self = this;

        this.RadioApi.getTopStations().then(function (response) {
            self.stations = response.data;
        })
    }
}


