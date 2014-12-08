'use strict';

/**
 * @ngdoc function
 * @name leoApp.controller:SlideCtrl
 * @description
 * # SlideCtrl
 * Controller of the leoApp
 */
var mod = angular.module('leoApp');

mod.controller('SlideCtrl', ['$scope', function($scope) {

        $scope.pfad = "bilda/";

	  	var slides = $scope.slides = [];
	  	
	  	slides.push({
	      	image: $scope.pfad + 'leo_41.jpg',
            text: "Leo im Wasser 1"
	    });

	  	slides.push({
	      	image: $scope.pfad + 'leo_171.jpg',
            text: "Leo im Wasser 2"
	    });
	  	slides.push({
	      	image: $scope.pfad + 'leo_172.jpg',
            text: "Leo im Wasser 3"
	    });
	  	slides.push({
	      	image: $scope.pfad + 'leo_173.jpg',
            text: "Leo im Wasser 4"
	    });
	  	slides.push({
	      	image: $scope.pfad + 'leo_170.jpg',
            text: "Leo im Wasser 5"
	    });

    }
]);
