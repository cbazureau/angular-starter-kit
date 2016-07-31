import { SubscriptionComponent } from './subscription.component'
import { SubscriptionStepOfferComponent } from './step-offer/step-offer.component'
import { SubscriptionStepPaymentComponent } from './step-payment/step-payment.component'
import { SubscriptionStepConfirmComponent } from './step-confirm/step-confirm.component'
import { SubscriptionStorage } from './subscription.storage'
import { subscriptionRoute } from './subscription.route'

let SubscriptionModule = angular.module('starter.subscription', [])
  .component('subscription', SubscriptionComponent)
  .component('subscriptionStepOffer', SubscriptionStepOfferComponent)
  .component('subscriptionStepPayment', SubscriptionStepPaymentComponent)
  .component('subscriptionStepConfirm', SubscriptionStepConfirmComponent)
  .service('SubscriptionStorage', SubscriptionStorage)
  .config(subscriptionRoute)

export default SubscriptionModule
