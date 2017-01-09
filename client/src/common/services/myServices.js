(function () {
    'use strict';
    function returningVisitorService() {
        var self = this;
        var tab = [];

        self.add = function (str) {
            tab.push(str);
        };
        self.get = function (str) {
            return tab.indexOf(str) !== -1;
        }
    }

    angular.module('common.services.returningvisitor', [])
        .service('ReturningVisitorService', returningVisitorService);
})();