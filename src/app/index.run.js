export function runBlock ($rootScope, $state){
  'ngInject'
  // To deal with <title>
  $rootScope.$state = $state;
}
