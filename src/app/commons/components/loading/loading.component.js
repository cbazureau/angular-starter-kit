export let LoadingComponent = {
  restrict: 'E',
  bindings: {
    message: '@?'
  },
  template: `<div class="bubblingG">
              <span id="bubblingG_1"></span>
              <span id="bubblingG_2"></span>
              <span id="bubblingG_3"></span>
            </div>
            <p class="center strong" ng-if="$ctrl.message">{{$ctrl.message}}</p>`
}
