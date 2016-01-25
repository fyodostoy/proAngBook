'use strict';

describe('Directive: tdlTodoPanel', function () {

  // load the directive's module
  beforeEach(module('angularSeedTemplateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tdl-todo-panel></tdl-todo-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tdlTodoPanel directive');
  }));
});
