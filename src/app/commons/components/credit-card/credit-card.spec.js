'use strict'

describe('component credit-card', () => {
  beforeEach(angular.mock.module('starter'))

  let _$scope, elem, _$compile

  function buildComponent (_cardData, _highlightError) {
    _$scope.cardData = _cardData
    _$scope.highlightError = _highlightError
    _$scope.onCardChange = () => true
    elem = angular.element('<credit-card card-data="cardData" highlight-error="highlightError" on-card-change="onCardChange"></credit-card>')
    _$compile(elem)(_$scope)
    _$scope.$digest()
  }

  beforeEach(inject(($rootScope, $compile) => {
    _$scope = $rootScope.$new()
    _$compile = $compile
  }))

  it('should render correct data', () => {

    buildComponent({
      number: '7777777777777771',
      expireMonth: '12',
      expireYear: '2020',
      cvc: '222'
    }, false)

    let inputs = elem.find('input')
    expect(inputs.eq(0).hasClass('credit-card-number')).toBe(true)
    expect(inputs.eq(0).hasClass('input-error')).toBe(false)
    expect(inputs.eq(0).val()).toBe('7777 7777 7777 7771')
    expect(inputs.eq(1).hasClass('credit-card-expire')).toBe(true)
    expect(inputs.eq(1).hasClass('input-error')).toBe(false)
    expect(inputs.eq(1).val()).toBe('12 / 20')
    expect(inputs.eq(2).hasClass('credit-card-cvc')).toBe(true)
    expect(inputs.eq(2).hasClass('input-error')).toBe(false)
    expect(inputs.eq(2).val()).toBe('222')
  })

  it('should render wrong number', () => {

    buildComponent({
      number: '111155551111',
      expireMonth: '12',
      expireYear: '2020',
      cvc: '222'
    }, true)

    let inputs = elem.find('input')
    expect(inputs.eq(0).hasClass('credit-card-number')).toBe(true)
    expect(inputs.eq(0).hasClass('input-error')).toBe(true)
    expect(inputs.eq(0).val()).toBe('1111 5555 1111')
    expect(inputs.eq(1).hasClass('credit-card-expire')).toBe(true)
    expect(inputs.eq(1).hasClass('input-error')).toBe(false)
    expect(inputs.eq(1).val()).toBe('12 / 20')
    expect(inputs.eq(2).hasClass('credit-card-cvc')).toBe(true)
    expect(inputs.eq(2).hasClass('input-error')).toBe(false)
    expect(inputs.eq(2).val()).toBe('222')
  })

  it('should render wrong number Key', () => {

    buildComponent({
      number: '7777777777777772',
      expireMonth: '12',
      expireYear: '2020',
      cvc: '222'
    }, true)

    let inputs = elem.find('input')
    expect(inputs.eq(0).hasClass('credit-card-number')).toBe(true)
    expect(inputs.eq(0).hasClass('input-error')).toBe(true)
    expect(inputs.eq(0).val()).toBe('7777 7777 7777 7772')
    expect(inputs.eq(1).hasClass('credit-card-expire')).toBe(true)
    expect(inputs.eq(1).hasClass('input-error')).toBe(false)
    expect(inputs.eq(1).val()).toBe('12 / 20')
    expect(inputs.eq(2).hasClass('credit-card-cvc')).toBe(true)
    expect(inputs.eq(2).hasClass('input-error')).toBe(false)
    expect(inputs.eq(2).val()).toBe('222')
  })

  it('should render wrong month', () => {

    buildComponent({
      number: '7777777777777771',
      expireMonth: '13',
      expireYear: '2020',
      cvc: '222'
    }, true)

    let inputs = elem.find('input')
    expect(inputs.eq(0).hasClass('credit-card-number')).toBe(true)
    expect(inputs.eq(0).hasClass('input-error')).toBe(false)
    expect(inputs.eq(0).val()).toBe('7777 7777 7777 7771')
    expect(inputs.eq(1).hasClass('credit-card-expire')).toBe(true)
    expect(inputs.eq(1).hasClass('input-error')).toBe(true)
    expect(inputs.eq(1).val()).toBe('')
    expect(inputs.eq(2).hasClass('credit-card-cvc')).toBe(true)
    expect(inputs.eq(2).hasClass('input-error')).toBe(false)
    expect(inputs.eq(2).val()).toBe('222')
  })

  it('should render wrong cvc', () => {

    buildComponent({
      number: '7777777777777771',
      expireMonth: '12',
      expireYear: '2020',
      cvc: '55555'
    }, true)

    let inputs = elem.find('input')
    expect(inputs.eq(0).hasClass('credit-card-number')).toBe(true)
    expect(inputs.eq(0).hasClass('input-error')).toBe(false)
    expect(inputs.eq(0).val()).toBe('7777 7777 7777 7771')
    expect(inputs.eq(1).hasClass('credit-card-expire')).toBe(true)
    expect(inputs.eq(1).hasClass('input-error')).toBe(false)
    expect(inputs.eq(1).val()).toBe('12 / 20')
    expect(inputs.eq(2).hasClass('credit-card-cvc')).toBe(true)
    expect(inputs.eq(2).hasClass('input-error')).toBe(true)
    expect(inputs.eq(2).val()).toBe('')
  })
})
