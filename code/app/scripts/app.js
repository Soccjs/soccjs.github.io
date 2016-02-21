'use strict';

/**
 * @ngdoc overview
 * @name portfolio
 * @description
 * # portfolio
 *
 * Main module of the application.
 */
angular
  .module('portfolio', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ui.router',

    'portfolio.common'
  ]);
