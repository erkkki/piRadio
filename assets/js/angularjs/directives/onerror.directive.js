import angular from 'angular';

/* @ngInject */
function onerror() {
    return {
        restrict:'A',
        link: function(scope, element, attr) {
            element.on('error', function() {
                element.attr('src', attr.onError);
            })
        }
    }
}

export default angular.module('directives.onerror', [])
    .directive('onError', onerror)
    .name;
