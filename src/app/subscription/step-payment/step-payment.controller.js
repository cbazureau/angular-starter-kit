export class SubscriptionStepPaymentController {
  constructor (SubscriptionStorage, $log, $state, ERROR) {
    'ngInject'

    this._$log = $log
    this._$state = $state
    // this._ContractService = ContractService
    this._ERROR = ERROR
    this.offer = SubscriptionStorage.offer
    this.steps = SubscriptionStorage.steps
    SubscriptionStorage.setStep("payment")
    this.cardData = {}
    this.errorMessages = {}
  }

  onCardChange (event) {
    let {number: isCardValid, expires: isDateValid, cvc: isCryptoValid} = event.isValid
    this.errorMessages = event.errorMessages

    if (isCardValid && isDateValid && isCryptoValid) {
      this.cardData = event.cardData
    }
  }

  onValid () {
    /*this._ContractService.subscribe(this.cardData)
      .then(() => this._$state.go('^.confirm'))
      .catch(() => this._$state.go('error', { context: 'ERROR_SUBSCRIPTION', errorCode: 'ERR_PAYMENT' }))
  */
    this._$state.go('^.confirm')
  }
}
