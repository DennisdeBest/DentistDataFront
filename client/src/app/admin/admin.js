(function() {
  'use strict';

  /**
   * @name  AdminCtrl
   * @description Controller
   */
  function AdminCtrl($scope, $http, $log) {
    var postObject = {};
    postObject.test = "test";
    $log.debug(postObject);
    $http.post('http://devapi.dentist-data.fr/api/', JSON.stringify(postObject)).success(function (data) {
      $log.debug(data);
    });
  }
  //AdminCtrl.$inject = ['$scope', '$log', '$http', '$localStorage'];
  angular.module('admin', [])
    .controller('AdminCtrl', AdminCtrl);
})();
