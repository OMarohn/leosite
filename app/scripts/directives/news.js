'use strict';

/**
 * @ngdoc directive
 * @name leoApp.directive:news
 * @description
 * # news
 */
var app = angular.module('leoApp');

// Direktive fuer die News-Seite
app.directive('news', function($parse) {
    return {
        scope: {
            datum: '@',
            image: '@'
        },
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'template/news.html',
        link: function(scope, element, attr) {}
    }
});