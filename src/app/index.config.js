export function config ($logProvider, $httpProvider, ErrorServiceProvider) {
  'ngInject'
  // Enable log
  $logProvider.debugEnabled(true)

  $httpProvider.interceptors.push(() => ( {
    request: function (config) {
      if (!config.timeout) config.timeout = 3000
      return config
    },
    response: function (response) {
      return response
    },
    responseError: function (rejection) {
      return ErrorServiceProvider.$get().buildError(rejection)
    }
  }
  ))
  $httpProvider.defaults.withCredentials = true;
}
