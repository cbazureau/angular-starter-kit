export class SubscriptionStepOfferController {
  constructor (SubscriptionStorage, $log, $state, $timeout) {
    'ngInject'
    this._SubscriptionStorage = SubscriptionStorage
    this._$log = $log
    this._$state = $state
    SubscriptionStorage.init()
    this.steps = SubscriptionStorage.steps
    this.offers = null
    // Note 1 : Simulate async call
    $timeout(() => {
      this.offers = [{
        id: 1,
        price: 9.99,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lectus in elit iaculis interdum non vitae tortor'
      }, {
        id: 2,
        price: 11.99,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lectus in elit iaculis interdum non vitae tortor'
      }, {
        id: 3,
        price: 14.99,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lectus in elit iaculis interdum non vitae tortor'
      }]
    }, 2000)
  }

  onChoose (event) {
    this._SubscriptionStorage.offer = event.ofrId
    this._$state.go('^.payment')
  }
}
