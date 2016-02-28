(function() {
  'use strict';

  function SidebarController( $timeout, $mdSidenav, $log, $mdComponentRegistry) {
    var vm = this;

    vm.toggle = angular.noop;

    vm.isOpen = isOpen;
    vm.close = close;
    vm.toggleLeft = toggleLeft;
    vm.toggleRight = toggleRight;


    function close(){
    	$mdSidenav('left').close();
                      // .then(function(){
                      //   $log.debug("close LEFT is done");
                      // });
 	  };


   	function toggleLeft(){
    	$mdSidenav('left').toggle();
                    // .then(function(){
                        //     $log.debug("toggle left is done");
                        // });
  	};
    function toggleRight(){
    	$mdSidenav('right').toggle();
                          // .then(function(){
                          //   $log.debug("toggle RIGHT is done");
                          // });
  	};

  	function isOpen(){ 
  		return false;
  	};

	$mdComponentRegistry
		.when('right')
		.then( function(sideNav){

		  vm.isOpen = angular.bind( sideNav, sideNav.isOpen );
		  vm.toggle = angular.bind( sideNav, sideNav.toggle );
		});

  }


  SidebarController.$inject = ['$timeout','$mdSidenav','$log','$mdComponentRegistry'];

  angular.module('portfolio.common.sidebarcontroller',['ngMaterial'])
    .controller('SidebarController', SidebarController);
})();
