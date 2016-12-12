Object.defineProperty(Array.prototype, 'uniq', {
  enumerable: false,
  value: function () {
    if (!this) {
      throw new TypeError('Array.prototype.uniq called on null or undefined')
    }

    let result = []
    let list = Object(this)
    let length = list.length >>> 0
    let value
    for (let i = 0; i < length; i++) {
      value = list[i]
      let arrayLength = result.length
      let found = false
      for (let j = 0; j < arrayLength; j++) {
        if (result[j] && result[j] === list[i]) {
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
