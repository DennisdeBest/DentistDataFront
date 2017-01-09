(function() {
    'use strict';

    function monkeyClickDirective($timeout) {
        var directive = {};

        //restrict = E, signifies that directive is Element directive
        directive.restrict = 'A';

        //template replaces the complete element with its text.
        directive.template = "{{time}}";

        //scope is used to distinguish each student element based on criteria.
        directive.scope = {
            time : "@"
        };


        //compile is called during application initialization. AngularJS calls it once when html page is loaded.

        directive.compile = function(element, attributes) {
            //element.css("border", "1px solid #cccccc");

            //linkFunction is linked with each element with scope to get the element specific data.
            var linkFunction = function($scope, element, attributes) {
                element.html($scope.time);
                element.css("border", "1px black outset");
                element.bind('click', function(event){
                    event.stopImmediatePropagation();
                    element.css("border", "1px black inset");
                    $timeout(function(){element.css("border", "1px black outset")}, element.html())
                });
            };
            return linkFunction;
        };
        return directive;
    }

    angular.module('common.directives.monkeyClick', [])
        .directive('monkeyClick', monkeyClickDirective);
})();
