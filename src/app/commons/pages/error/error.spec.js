'use strict'

describe('Error', () => {

  let _$compile,
    _ERROR,
    _$rootScope

  beforeEach(angular.mock.module('starter'))

  beforeEach(() => {
    inject(($rootScope, $compile, ERROR) => {
      _$compile = $compile
      _$rootScope = $rootScope.$new()
      _ERROR = ERROR
    })
  })

  describe('page', () => {

    it('should render ASSOCIATE message when code/context exist in constant file', () => {

      let context = Object.keys(_ERROR)[0]
      let errorCode = Object.keys(_ERROR[context])[0]
      let message = _ERROR[context][errorCode]

      let element = _$compile(`<error context="'${context}'" error-code="'${errorCode}'"></error>`)(_$rootScope)
      _$rootScope.$digest()
      expect(element.html()).toContain(message)
    })

    it('should render DEFAULT message when code/context not exist in constant file', () => {

      let defaultMessage = _ERROR['DEFAULT']['DEFAULT']

      let element = _$compile(`<error context="'NOT_EXIST'" error-code="'NOT_EXIST'"></error>`)(_$rootScope)
      _$rootScope.$digest()
      expect(element.html()).toContain(defaultMessage)
    })
  })
}
)
