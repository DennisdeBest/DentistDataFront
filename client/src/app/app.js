(function() {
  'use strict';

  $(document).ready(function() {
    
  });

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function MainCtrl($log) {
    $log.debug('MainCtrl loaded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'app.routes',
      'ui.router',
      'ngStorage',
      'home',
      'propos',
      'nous',
      'pourquoi',
      'admin',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.directives.version'
    ])
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
