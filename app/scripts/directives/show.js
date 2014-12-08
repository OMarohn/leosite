'use strict';

/**
 * @ngdoc directive
 * @name leoApp.directive:show
 * @description
 * # show
 */
var app = angular.module('leoApp');

// Direktive fuer die Erfolge-Seite
app.directive('show', function($parse) {
    return {
        scope: {
            datum: '@',
            ort: '@',
            note: '@'
        },
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'template/ausstellung.html',
        link: function(scope, element, attr) {}
    }
});