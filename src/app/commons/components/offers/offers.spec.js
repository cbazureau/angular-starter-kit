'use strict'

describe('component offers', () => {
  beforeEach(angular.mock.module('starter'))

  let _$scope, elem, offers

  beforeEach(inject(($rootScope, $compile) => {

    offers = [{ id: 1, desc: 'Description', price: 3.14 }]

    _$scope = $rootScope.$new()
    _$scope.offers = offers
    _$scope.choose = () => {
    }
    elem = angular.element('<offers offers="offers" choose="choose($event)"></offers>')
    $compile(elem)(_$scope)
    _$scope.$digest()
  }))

  it('should render', () => {
    // https://docs.angularjs.org/api/ng/function/angular.element
    // http://stackoverflow.com/questions/17283697/angularjs-how-to-find-using-jqlite
    let title = angular.element(elem[0].querySelector('.offer-title'))
    let price = angular.element(elem[0].querySelector('.offer-price'))
    let desc = angular.element(elem[0].querySelector('.offer-desc'))
    expect(title.eq(0).text()).toBe('Offer 1')
    expect(price.eq(0).text()).toBe('3.14€ per month')
    expect(desc.eq(0).text()).toBe('Description')
  })
})
