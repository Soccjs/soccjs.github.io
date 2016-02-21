(function () {
  'use strict';

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
  
    $stateProvider
      .state('/',{
        url:'/',
        templateUrl: 'scripts/views/main.html'
      })
      .state('/about', {
      templateUrl: 'scripts/views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
      });
  }


  MainRouter.$inject = ['$stateProvider','$urlRouterProvider'];

  angular.module('portfolio.common.router', [])
    .config(MainRouter);
})();