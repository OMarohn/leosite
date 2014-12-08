'use strict';

/**
 * @ngdoc function
 * @name leoApp.controller:RootctrlCtrl
 * @description
 * # RootctrlCtrl
 * Controller of the leoApp
 */
angular.module('leoApp')
  .controller('RootCtrl', function ($scope, $location) {
    $scope.isActive = function isActive(pfad) {
        var ret = "";

        if ($location.$$path.localeCompare(pfad) === 0) {
            ret = "active";
        }
        return ret;
    };
});