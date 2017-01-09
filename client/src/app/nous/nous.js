(function() {
  'use strict';

  /**
   * @name  NousCtrl
   * @description Controller
   */

     $(document).ready(function() {
       Materialize.updateTextFields();
     });
  function NousCtrl($scope, ReturningVisitorService) {
      $scope.test = "Testsdgfsdfgsgdsgfdsgfsqg";
      if(ReturningVisitorService.get("nous")) {
          $scope.returning = "Welcome Back !";
      } else {
          $scope.returning = "Welcome";
      }
      ReturningVisitorService.add("nous");
  }
    NousCtrl.$inject = ['$scope', 'ReturningVisitorService'];
  angular.module('nous', [])
    .controller('NousCtrl', NousCtrl);
})();
