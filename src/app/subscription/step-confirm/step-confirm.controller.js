export class SubscriptionStepConfirmController {
  constructor (SubscriptionStorage, $log, $http, $interval, CONFIG) {
    'ngInject'
    this._SubscriptionStorage = SubscriptionStorage
    this._$log = $log
    this._$http = $http
    this._CONFIG = CONFIG
  }

  $onInit() {
    this.offer = this._SubscriptionStorage.offer
  }

}
