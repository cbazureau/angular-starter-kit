export class SubscriptionStepPaymentController {
  constructor (SubscriptionStorage, $log, $state, ERROR) {
    'ngInject'
    this._SubscriptionStorage = SubscriptionStorage
    this._$log = $log
    this._$state = $state
    this._ERROR = ERROR
  }

  $onInit() {
    this.offer = this._SubscriptionStorage.offer
    this.steps = this._SubscriptionStorage.steps
    this._SubscriptionStorage.setStep('payment')
    this.cardData = {}
    this.shouldDisplayErrors = false
    this.isValid = false
    this.errorMessages = {}
    if (!this.offer) {
      this._$state.go('^.offer')
    }
  }

  onCardChange (event) {
    let {number: isCardValid, expires: isDateValid, cvc: isCryptoValid} = event.isValid
    this.errorMessages = event.errorMessages

    if (isCardValid && isDateValid && isCryptoValid) {
      this.cardData = event.cardData
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  onValid () {
    if (!this.isValid || !this.isCGVChecked) {
      this.shouldDisplayErrors = true
    } else {
      this._$state.go('^.confirm')
    }
  }
}
