routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('genre', {
            url: '/genres',
            template: require('./genre.html'),
            controller: 'GenreController',
            controllerAs: '$genre'
        });
}