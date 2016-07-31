export class DemoController {
  constructor ($log) {
    'ngInject'
    this.cardData = {}
    this._$log = $log
  }

  callbackCard (data) {
    this._$log.debug(data)
    this.cardData = data.cardData
  }
}
export default DemoController
