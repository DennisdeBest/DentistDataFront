(function() {
  'use strict';

  /**
   * @name  NousCtrl
   * @description Controller
   */

     window.onload = function() {
       Materialize.updateTextFields();
     };
  function NousCtrl($scope) {
     
  }
    NousCtrl.$inject = ['$scope'];
  angular.module('nous', [])
    .controller('NousCtrl', NousCtrl);
})();
