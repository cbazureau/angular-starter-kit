export class CreditCardController {
  constructor (EventEmitter, ERROR) {
    'ngInject'
    this._EventEmitter = EventEmitter
    this.year = new Date().getFullYear() - 2000
    this._ERROR = ERROR
    this.initModel()
    this.displayCvcTooltip = false
  }

  $onChanges (changes) {
    if (changes.cardData) {
      this.cardData = angular.copy(this.cardData)
    }
  }

  initModel () {
    if (!this.cardData) {
      this.cardData = {}
    }
    this.cardDataModel = {
      number: this.transformNumber(this.cardData.number),
      expires: this.transformExpires(this.cardData.expireMonth, this.cardData.expireYear),
      cvc: this.transformCvc(this.cardData.cvc)
    }
    this.isValid()
    this.sendData()
  }

  isValid () {
    this.validation = {
      number: this.isNumberValid(this.cardData.number) && this.luhnValidate(this.cardData.number),
      expires: this.isExpiresValid(this.cardData.expireMonth, this.cardData.expireYear),
      cvc: this.isCvcValid(this.cardData.cvc)
    }
    this.errorMessages = {
      number: !this.validation.number ? this._ERROR.CB.ERR_INCORRECT_CARD_NUMBER : '',
      expires: !this.validation.expires ? this._ERROR.CB.ERR_EXPIRE_DATE : '',
      cvc: !this.validation.cvc ? this._ERROR.CB.ERR_CVC : ''
    }
    this.existError = !this.validation.number || !this.validation.expires || !this.validation.cvc
  }

  isNumberValid (number) {
    return number !== null
      && (/^\d+$/.test(number))
      && number.length === 16
  }

  isExpiresValid (month, year) {
    let monthInt = parseInt(month, 10)
    let monthYear = parseInt(year, 10) - 2000
    return month !== null
      && year !== null
      && (/^\d+$/.test(month))
      && (/^\d+$/.test(year))
      && !(monthYear < this.year || monthYear > (this.year + 5))
      && (monthInt > 0 && monthInt < 13)
      && month.length === 2
      && year.length === 4
  }

  isCvcValid (cvc) {
    return cvc !== null
      && (/^\d+$/.test(cvc))
      && cvc.length >= 3
      && cvc.length < 5
  }

  sendData () {
    this.onCardChange(this._EventEmitter({
      cardData: this.cardData,
      isValid: this.validation,
      errorMessages: this.errorMessages,
      existError: this.existError
    }))
  }

  transformNumber (number) {
    return number ? angular.copy(number.toUpperCase().replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()) : ''
  }

  transformCvc (cvc) {
    return this.isCvcValid(cvc) ? cvc : ''
  }

  transformExpires (month, year) {
    if (this.isExpiresValid(month, year)) {
      return month + ' / ' + year.substring(2, 4)
    }
    return ''
  }

  onKeyPressInt (event) {
    let digit = String.fromCharCode(event.which)
    if (!/^\d+$/.test(digit)) {
      event.preventDefault()
    }
  }

  onKeyUpNumber () {
    this.cardData.number = this.cardDataModel.number.replace(/ /g, '')
    this.cardDataModel.number = this.transformNumber(this.cardData.number)
    this.isValid()
    this.sendData()
  }

  onKeyUpCvc () {
    this.cardData.cvc = this.cardDataModel.cvc ? this.cardDataModel.cvc.replace(/ /g, '') : ''
    this.isValid()
    this.sendData()
  }

  onKeyUpExpires () {
    if (this.cardDataModel && this.cardDataModel.expires) {
      let newValue = ''
      let newYearInt = 0
      if (this.cardDataModel.expires.length === 4) {
        newValue = this.cardDataModel.expires.substring(0, 1)
      }else {
        newValue = angular.copy(this.cardDataModel.expires).replace(/ /g, '').replace(/\//g, '')
      }
      let newValueInt = parseInt(newValue)
      if (newValue.length === 1) {
        newValue = (newValueInt > 1) ? '' : newValue
      } else if (newValue.length === 2) {
        newValue = (newValueInt > 12) ? newValue.substring(0, 1) : (newValue.substring(0, 2) + ' / ')
      } else if (newValue.length === 3) {
        newValue = newValue.substring(0, 2) + ' / ' + newValue.substring(2, 3)
      } else if (newValue.length > 3) {
        newYearInt = parseInt(newValue.substring(2, 4))
        newValue = newValue.substring(0, 2) + ' / ' + newValue.substring(2, 4)
        if (newYearInt < this.year || newYearInt > (this.year + 5)) newValue = newValue.substring(0, 2) + ' / '
      }
      this.cardDataModel.expires = newValue
      if (newValue.length === 7) {
        let tab = newValue.split(' / ', 2)
        this.cardData.expireMonth = tab[0]
        this.cardData.expireYear = '20' + tab[1]
      }
    }
    this.isValid()
    this.sendData()
  }

  luhnValidate (number) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(number)) return false

    // The Luhn Algorithm
    let nCheck = 0, nDigit = 0, bEven = false
    number = number.replace(/\D/g, '')

    for (let n = number.length - 1; n >= 0; n--) {
      let cDigit = number.charAt(n)
      nDigit = parseInt(cDigit, 10)

      if (bEven) {
        if ((nDigit *= 2) > 9) nDigit -= 9
      }
      nCheck += nDigit
      bEven = !bEven
    }
    return (nCheck % 10) === 0
  }

}
export default CreditCardController
