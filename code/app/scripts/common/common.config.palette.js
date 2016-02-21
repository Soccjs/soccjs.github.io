(function () {
  'use strict';

  function PaletteConfig($mdThemingProvider) {

    var customPrimary = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#fff3f5',
        '400': '#ffd9e0',
        '500': '#E91E63',//pink
        '600': '#ffa6b6',
        '700': '#ff8da1',
        '800': '#ff738c',
        '900': '#ff5a77',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#ff4062'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#ffffff',
        '100': '#e8fce8',
        '200': '#d2f8d2',
        '300': '#bcf5bc',
        '400': '#a6f1a6',
        '500': '#8bc34a',
        '600': '#7aeb7a',
        '700': '#64e764',
        '800': '#4ee44e',
        '900': '#38e038',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#22dd22'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);

    var customWarn = {
        '50': '#ffff80',
        '100': '#ffff66',
        '200': '#ffff4d',
        '300': '#ffff33',
        '400': '#ffff1a',
        '500': '#FFEB3B',
        '600': '#e5e600',
        '700': '#cccc00',
        '800': '#b2b300',
        '900': '#999900',
        'A100': '#ffff99',
        'A200': '#ffffb3',
        'A400': '#ffffcc',
        'A700': '#7f8000'
    };
    $mdThemingProvider
        .definePalette('customWarn', 
                        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': '#ffffff',
        '600': '#f2f2f2',
        '700': '#e6e6e6',
        '800': '#d9d9d9',
        '900': '#cccccc',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#bfbfbf'
    };
    $mdThemingProvider
        .definePalette('customBackground', 
                        customBackground);

    $mdThemingProvider.theme('customPalette')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground')
    }


  PaletteConfig.$inject = ['$mdThemingProvider'];

  angular.module('portfolio.common.config.palette', [])
    .config(PaletteConfig);
})();
