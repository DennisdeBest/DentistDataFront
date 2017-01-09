(function() {
    'use strict';

    function trunc() {
        return function(text, limit) {
            return text ? text.substring(0, limit)+ "..." : text;
        };
    }

    angular.module('common.filters.trunc', [])
        .filter('trunc', trunc);
})();
