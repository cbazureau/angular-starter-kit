export function twitterRoute ($stateProvider) {
  'ngInject'
  // error doesn't depend on root state in case of failed root resolutions
  $stateProvider
    .state('root.twitter', {
      url: '/twitter',
      data: { pageTitle: 'Starter - Twitter' },
      template: '<twitter></twitter>'
    })
}
