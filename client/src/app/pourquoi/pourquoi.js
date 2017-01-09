(function() {
  'use strict';

  /**
   * @name  pourquoiCtrl
   * @description Controller
   */
  function PourquoiCtrl($log) {
    var docs = this;
    docs.someMethos = function () {
      $log.debug('I\'m a method');
    };
  }

  angular.module('pourquoi', [])
    .controller('PourquoiCtrl', PourquoiCtrl);
})();
