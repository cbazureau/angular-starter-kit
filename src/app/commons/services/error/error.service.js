export class ErrorService {
  constructor ($log, ERROR, $q) {
    'ngInject'
    this._$log = $log
    this._$q = $q
    this._ERROR = ERROR
  }

  getMessage (context, error) {
    return (this._ERROR[context] && this._ERROR[context][error]) ? this._ERROR[context][error] : this._ERROR.DEFAULT.DEFAULT
  }

  buildError (error) {
    this._$log.error(error)
    return this._ERROR.DEFAULT.DEFAULT
  }
}
