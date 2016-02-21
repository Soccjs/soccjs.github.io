(function () {
  'use strict';

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
  
    $stateProvider
      .state('/',{
        url:'/',
        templateUrl: 'scripts/main/main.html'
      })
      .state('/about', {
        templateUrl: 'scripts/main/about.html',
      });
  }


  MainRouter.$inject = ['$stateProvider','$urlRouterProvider'];

  angular.module('portfolio.common.router', [])
    .config(MainRouter);
})();