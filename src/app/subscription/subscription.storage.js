const SUBSCRIPTION_STEPS = [
  { id: 'offer', name: 'Offer', active: true },
  { id: 'payment', name: 'Payment', active: false }
]

export class SubscriptionStorage {
  constructor ($log, $http, CONFIG) {
    'ngInject'
    this._$log = $log
    this._$http = $http
    this._CONFIG = CONFIG

    this.init()
  }

  init () {

    // Offre
    this.offer = null

    // Etapes du parcours de souscription
    this.steps = angular.copy(SUBSCRIPTION_STEPS)
  }

  setStep (stepId) {
    this.steps.forEach(step => {
      step.active = stepId === step.id
    })
  }
}
