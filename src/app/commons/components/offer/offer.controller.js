export class OfferController {
  constructor (EventEmitter) {
    'ngInject'
    this._EventEmitter = EventEmitter
  }

  onValid (ofrId) {
    this.choose(this._EventEmitter({
      ofrId: ofrId
    }))
  }

}
export default OfferController
