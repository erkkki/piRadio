routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('station', {
            url: '/stations/by/{by}/{id}',
            template: require('./station.html'),
            controller: 'StationController',
            controllerAs: '$station'
        });
}