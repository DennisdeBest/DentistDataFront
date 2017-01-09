(function() {
  'use strict';

  $(document).ready(function() {
    $('select').material_select();
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
      'home',
      'propos',
      'nous',
      'pourquoi',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.services.returningvisitor',
      'common.directives.version',
      'common.directives.monkeyClick',
      'common.directives.transclude',
      'common.filters.uppercase',
      'common.filters.trunc',
    ])
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
