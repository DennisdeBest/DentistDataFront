(function() {
  'use strict';

  function headerCtrl($scope, $log) {
    $scope.showLoginPopin = false;
    $scope.createLoginPopin = function(){
      $scope.showLoginPopin = ! $scope.showLoginPopin;
      console.log("create login popin");
      $log.debug($scope.showLoginPopin);
    };
  }
  headerCtrl.$inject = ['$scope', '$log'];
  angular.module('common.header', [])
      .controller('HeaderCtrl', headerCtrl);
})();
