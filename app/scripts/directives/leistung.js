'use strict';

/**
 * @ngdoc directive
 * @name leoApp.directive:leistung
 * @description
 * # leistung
 */
var app = angular.module('leoApp');

app.directive('leistung', function($parse) {
    return {
        scope: {
            datum: '@',
            ort: '@',
            note: '@',
            bezkurz: '@',
            bezlang: '@'
        },
        restrict: 'E',
        replace: true,
        transclude: false,
        templateUrl: 'template/leistung.html',
        link: function(scope, element, attr) {}
    }
});
