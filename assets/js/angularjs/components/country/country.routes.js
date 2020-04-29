routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('country', {
            url: '/country',
            template: require('./country.html'),
            controller: 'CountryController',
            controllerAs: '$country'
        });
}