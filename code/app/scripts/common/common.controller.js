(function() {
  'use strict';

  function MainController($rootScope,$http,$state,$window, LoginService,ClientService,$stateParams) {
    
  }


  MainController.$inject = ['$rootScope','$http','$state','$window','LoginService','ClientService','$stateParams'];

  angular.module('portfolio.common.controller',[])
    .controller('MainController', MainController);
})();