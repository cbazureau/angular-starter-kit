'use strict'

describe('uniq', () => {
  beforeEach(angular.mock.module('interstellar'))
  it('should return a uniqTab', () => {
    let flattenData = ['a', 'b', 'c', 'c']
    expect(flattenData.uniq()).toEqual(['a', 'b', 'c'])
  })
})
