'use strict';

describe('Controller: RootctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('leoApp'));

  var RootctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RootctrlCtrl = $controller('RootCtrl', {
      $scope: scope
    });
  }));

  /*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  */
});
