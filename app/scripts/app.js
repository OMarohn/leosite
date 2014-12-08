'use strict';

/**
 * @ngdoc overview
 * @name leoApp
 * @description
 * # leoApp
 *
 * Main module of the application.
 */
var mod = angular.module('leoApp', [
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.bootstrap.carousel'
  ]);

mod.config(['$routeProvider',
    function ($routeProvider) {    
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'SlideCtrl'
        }).
        when('/galerie/:welche', {
            templateUrl: 'partials/lightbox.html',
            controller: 'lightBoxCtrl'
        }).
        when('/news', {
            templateUrl: 'partials/news_2.html'
        }).
        when('/leo', {
            templateUrl: 'partials/leo.html'
        }).
        when('/pedigree', {
            templateUrl: 'partials/pedigree.html'
        }).
        when('/ausstellungen', {
            templateUrl: 'partials/ausstellungen_2.html'
        }).
        when('/pruefungen', {
            templateUrl: 'partials/pruefungen.html'
        }).
        when('/zucht', {
            templateUrl: 'partials/zucht.html',
        }).
        when('/contact', {
            templateUrl: 'partials/contact.html',
        }).
        when('/impressum', {
            templateUrl: 'partials/impressum.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

mod.run(function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (event,pfad) {
        if (ga) {
            ga('send', 'pageview', {'page': pfad});  
        }
    });
});
