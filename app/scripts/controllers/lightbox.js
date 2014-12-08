'use strict';

/**
 * @ngdoc function
 * @name leoApp.controller:LightboxctrlCtrl
 * @description
 * # LightboxctrlCtrl
 * Controller of the leoApp
 */
var app = angular.module('leoApp');

app.controller('lightBoxCtrl', function($scope, $http, $route, $routeParams, $location) {

    var daten = {};
    daten['Welpe'] = 'daten/lb_welpe.json';
    daten['Jugend'] = 'daten/lb_jugend.json';
    daten['Rebel'] = 'daten/lb_rebel.json';

    $http.get(daten[$routeParams.welche]).success(
        function(data, status) {
            $scope.akDaten = data;
        });

    $scope.$on('$viewContentLoaded', function() {
        //mieser Hack!! Da muss ich mal schauen wie es besser geht
        setTimeout(function() {
            $("#thumbnails").yoxview();
        }, 250);
    });
});
