export class SubscriptionStepConfirmController {
  constructor (SubscriptionStorage, $log, $cookies, $http, $interval, CONFIG) {
    'ngInject'
    this.offer = SubscriptionStorage.offer

    this._$log = $log
    this._$http = $http
    this._CONFIG = CONFIG
  }

}
