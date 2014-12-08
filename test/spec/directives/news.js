'use strict';

describe('Directive: news', function () {

  // load the directive's module
  beforeEach(module('leoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<news></news>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the news directive');
  }));
});
