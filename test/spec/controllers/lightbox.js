'use strict';

describe('Controller: LightboxctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('leoApp'));

  var LightboxctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LightboxctrlCtrl = $controller('LightboxctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
