import {OfferController} from './offer.controller';
export let OfferComponent = {
  restrict: 'E',
  bindings: {
    offer: '<',
    choose: '&'
  },
  controller: OfferController,
  template: `
                <h3 class="offer-title">Offer {{$ctrl.offer.id}}</h3>
                <p class="offer-desc">{{$ctrl.offer.desc}}</p>
                <h4 class="offer-price">{{$ctrl.offer.price}}&euro; per month</h4>
                <button ng-click="$ctrl.onValid($ctrl.offer.id)" class="button button-primary">Choose</button>
            `
}
