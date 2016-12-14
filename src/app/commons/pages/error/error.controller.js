export class ErrorController {
  constructor(ErrorService) {
    'ngInject';
    this._ErrorService = ErrorService

  }

  $onInit() {
    this.error = {
      message: this._ErrorService.getMessage(this.context, this.errorCode),
      errorCode: this.errorCode
    }
  }

}
