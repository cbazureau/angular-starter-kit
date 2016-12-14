Object.defineProperty(Array.prototype, 'uniqBy', {
  enumerable: false,
  value: function () {
    let keys = arguments
    if (!this) {
      throw new TypeError('Array.prototype.uniqBy called on null or undefined')
    }

    if(!keys.length ){
      throw new TypeError('At least one param has to be send')
    }
    let result = []
    let list = Object(this)
    let length = list.length >>> 0
    let value

    // First => iterate on the array
    for (let i = 0; i < length; i++) {
      value = list[i]
      let arrayLength = result.length
      let found = false
      // second => iterate on result tab
      for (let j = 0; j < arrayLength; j++) {
        // third => iterate on keys param
        let sameValue = true
        for (let k = 0; k < keys.length; k++) {
          sameValue = sameValue && !!(result[j] && result[j][keys[k]] === value[keys[k]])
        }
        if(sameValue){
          found = true
        }
      }
      if (!found) {
        result.push(value)
      }
    }
    return result
  }
})
