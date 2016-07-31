import {BreadcrumbController} from './breadcrumb.controller';

export let BreadcrumbComponent = {
  restrict: 'E',
  bindings: {
    navigation: '<'
  },
  template: `<ul>
            <li ng-repeat="step in $ctrl.navigation" ng-class="{'done':$ctrl.calcDone(step.id),'active':step.active}">{{step.name}}</li>
        </ul>`,
  controller: BreadcrumbController
};
