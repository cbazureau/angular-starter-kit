'use strict';

describe('component breadcrumb', () => {
  beforeEach(angular.mock.module('starter'));

  let _$scope, elem, step;

  beforeEach(inject(($rootScope, $compile) => {

    step = [
      { id: "step1", name: "Step One", active: false },
      { id: "step2", name: "Step Two", active: true },
      { id: "step3", name: "Step Three", active: false }
    ];

    _$scope = $rootScope.$new();
    _$scope.steps = step;
    elem = angular.element('<breadcrumb navigation="steps"></breadcrumb>');
    $compile(elem)(_$scope);
    _$scope.$digest();

  }));

  it('should render', () => {
    // https://docs.angularjs.org/api/ng/function/angular.element
    let lis = elem.find('li');
    expect(lis.eq(0).text()).toBe('Step One');
    expect(lis.eq(1).text()).toBe('Step Two');
    expect(lis.eq(2).text()).toBe('Step Three');
    expect(lis.eq(0).hasClass("active")).toBe(false);
    expect(lis.eq(1).hasClass("active")).toBe(true);
    expect(lis.eq(2).hasClass("active")).toBe(false);
    expect(lis.eq(0).hasClass("done")).toBe(true);
    expect(lis.eq(1).hasClass("done")).toBe(true);
    expect(lis.eq(2).hasClass("done")).toBe(false);
  });
});
