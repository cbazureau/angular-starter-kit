export function subscriptionRoute ($stateProvider) {
  'ngInject'
  $stateProvider.state('root.subscription', {
    url: '/subscription',
    abstract: true,
    template: '<subscription></subscription>'
  })
    .state('root.subscription.offer', {
      url: '/offer',
      data: { pageTitle: 'Starter - Subscription - Offer' },
      template: '<subscription-step-offer></subscription-step-offer>'
    })
    .state('root.subscription.payment', {
      url: '/payment',
      data: { pageTitle: 'Starter - Subscription - Payment' },
      template: '<subscription-step-payment></subscription-step-payment>'
    })
    .state('root.subscription.confirm', {
      url: '/confirm',
      data: { pageTitle: 'Starter - Souscription - Confirmation' },
      template: '<subscription-step-confirm></subscription-step-confirm>'
    })
}
