import {OffersController} from './offers.controller';
export let OffersComponent = {
  restrict: 'E',
  bindings: {
    offers: '<',
    choose: '&'
  },
  controller: OffersController,
  template: `<div class="offers-loading" ng-if="!$ctrl.offers"><h3>Loading offers ...</h3></div>
            <div class="offers" ng-if="$ctrl.offers">
              <div class="offer" ng-repeat="offer in $ctrl.offers">
                  <h3 class="offer-title">Offer {{offer.id}}</h3>
                  <p class="offer-desc">{{offer.desc}}</p>
                  <h4 class="offer-price">{{offer.price}}&euro; per month</h4>
                  <button ng-click="$ctrl.onValid(offer.id)" class="button button-primary">Choose</button>
              </div>
            </div>
            `
}
