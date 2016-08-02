export class OffersController {
  constructor (EventEmitter) {
    'ngInject'
    this._EventEmitter = EventEmitter
  }

  // Note 1 : $onChanges is necessary for Async params offers
  $onChanges (changes) {
    if (changes.offers) {
      this.offers = angular.copy(this.offers)
    }
  }

  onValid (ofrId) {
    this.choose(this._EventEmitter({
      ofrId: ofrId
    }))
  }

}
export default OffersController
