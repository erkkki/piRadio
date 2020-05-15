/* @ngInject */
export default class StationController {
    constructor($rootScope) {
        this.name = 'Station Controller';
        this.$rootScope = $rootScope;
    }
    changeStation (station_id) {
        this.$rootScope.$broadcast('station', station_id);
    }
}