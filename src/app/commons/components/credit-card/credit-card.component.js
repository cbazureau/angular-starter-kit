import {CreditCardController} from './credit-card.controller';

export let CreditCardComponent = {
  restrict: 'E',
  bindings: {
    cardData: '<',
    onCardChange: '&',
    highlightError: '<'
  },
  templateUrl: 'app/commons/components/credit-card/credit-card.html',
  controller: CreditCardController
};
