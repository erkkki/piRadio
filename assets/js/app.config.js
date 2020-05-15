/* @ngInject */
export default function config($provide, $urlRouterProvider, $locationProvider) {
    // Player initial volume range 0-100.
    $provide.value('initVolume', 10);

    // $locationProvider.html5Mode(true);
    // $urlRouterProvider.otherwise('/');
}