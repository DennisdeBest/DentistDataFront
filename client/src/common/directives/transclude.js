(function() {
    'use strict';

    angular.module('common.directives.transclude', [])
        .directive('appTransclude', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {title: '@'},
            template: '<div>' +
            '<div>{{title}}</div>' +
            '<ng-transclude></ng-transclude>' +
            '</div>'
        };
    })
        .controller('TranscludeController', ['$scope', function($scope) {
        $scope.title = 'Ma Grosse Bite';
        $scope.text = 'Hehe ça marche enkii';
    }]);
})();