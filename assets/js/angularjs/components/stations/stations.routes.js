routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('stations', {
            url: '/stations/by/{by}/{id}',
            template: require('./stations.html'),
            controller: 'StationsController',
            controllerAs: '$stations'
        });
}