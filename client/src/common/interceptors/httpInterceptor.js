(function() {
  'use strict';

  function httpInterceptor($q, $location, $localStorage, $log) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
          $log.debug(config);
        if ($localStorage.token) {
          config.headers.Authorization = 'Bearer ' + $localStorage.token;
          $log.debug(config)
        }
        return config;
      },
      requestError: function(rejection) {
        $log.debug(rejection);
        return $q.reject(rejection);
      },
      response: function(response) {
        $log.debug('response: ', response);
        return response;
      },
      responseError: function(rejection) {
        $log.debug(rejection);
        return $q.reject(rejection);
      }
    };
  }

  httpInterceptor().$inject = ['$localStorage'];

  angular.module('common.interceptors.http', [])
    .factory('httpInterceptor', httpInterceptor);
})();
