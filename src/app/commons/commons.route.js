export function commonsRoute ($stateProvider) {
  'ngInject'
  // error doesn't depend on root state in case of failed root resolutions
  $stateProvider
    .state('error', {
      url: '/erreur/:context/:errorCode',
      data: { pageTitle: 'Starter - Error' },
      template: '<error context="$state.params.context" error-code="$state.params.errorCode"></error>'
    })
    .state('root.demo', {
      url: '/demo',
      data: { pageTitle: 'Starter - Demo' },
      template: '<demo></demo>'
    })
}
