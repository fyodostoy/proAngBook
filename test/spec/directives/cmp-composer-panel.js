'use strict';

describe('Directive: cmpComposerPanel', function () {

  // load the directive's module
  beforeEach(module('angularSeedTemplateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cmp-composer-panel></cmp-composer-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cmpComposerPanel directive');
  }));
});
