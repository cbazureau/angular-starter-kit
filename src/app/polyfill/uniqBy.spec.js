'use strict'

describe('uniqBy', () => {
  beforeEach(angular.mock.module('interstellar'))
  let data = [
    {
      value1: 'v1',
      value2: 'v2'

    },
    {
      value1: 'v1',
      value2: 'v3'
    },
    {
      value1: 'v1',
      value2: 'v2'
    }]
  it('should return uniqTab by property value1', () => {
    let result1 = [{value1: 'v1', value2: 'v2'}]
    expect(data.uniqBy('value1')).toEqual(result1)
  })

  it('should return uniqTab based on property value1 and value2', () => {
    let result2 = [{value1: 'v1', value2: 'v2'}, {value1: 'v1', value2: 'v3'}]
    expect(data.uniqBy('value1', 'value2')).toEqual(result2)
  })

})
