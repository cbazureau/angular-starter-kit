export class ErrorController {
  constructor (ErrorService) {
    'ngInject';
    this.error = {
      message: ErrorService.getMessage(this.context, this.errorCode),
      errorCode: this.errorCode
    }

  }
}
