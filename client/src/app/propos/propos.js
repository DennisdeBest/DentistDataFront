(function() {
  'use strict';

  /**
   * @name  proposCtrl
   * @description Controller
   */
  function ProposCtrl($log) {
    var docs = this;
    docs.someMethos = function () {
      $log.debug('I\'m a method');
    };
  }

  angular.module('propos', [])
    .controller('ProposCtrl', ProposCtrl);
})();
