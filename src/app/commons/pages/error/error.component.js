import {ErrorController} from './error.controller';

export let ErrorComponent = {
  restrict: 'E',
  bindings: {
    context:'<',
    errorCode: '<'
  },
  templateUrl: 'app/commons/pages/error/error.html',
  controller: ErrorController
};
