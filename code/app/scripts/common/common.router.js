(function () {
  'use strict';

  function CommonRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
  
    $stateProvider
      .state('main',{
        url:'/',
        templateUrl: 'scripts/common/common.html'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'scripts/menu/about/about.html',
      })
      .state('project', {
        url:'/project',
        templateUrl: 'scripts/menu/project/project.html',
      })
      .state('study', {
        url:'/study',
        templateUrl: 'scripts/menu/study/study.html',
      });
  }


  CommonRouter.$inject = ['$stateProvider','$urlRouterProvider'];

  angular.module('portfolio.common.router', [])
    .config(CommonRouter);
})();