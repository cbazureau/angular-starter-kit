export class SubscriptionStepOfferController {
  constructor (SubscriptionStorage, $log, $state) {
    'ngInject'
    this._SubscriptionStorage = SubscriptionStorage
    this._$log = $log
    this._$state = $state
    SubscriptionStorage.init()
    this.steps = SubscriptionStorage.steps
  }

  onValid (ofrId) {
    this._SubscriptionStorage.offer = ofrId
    this._$state.go('^.payment')
  }
}
