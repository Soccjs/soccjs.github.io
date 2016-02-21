'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('portfolio')
  .controller('MainCtrl', function ($scope, $mdSidenav) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	  };
  });
