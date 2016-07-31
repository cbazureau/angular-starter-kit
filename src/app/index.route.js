export function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $stateProvider.state('root', {
    template: '<ui-view/>',
    abstract: true,
    resolve: {
      settings: function () {
        'ngInject';
        // Use resolve carefully (blocking)
        return true
      }
    }
  })
    .state('root.home', {
      url: '/',
      data: { pageTitle: "Starter - Home" },
      template: '<header-light></header-light><navbar></navbar>'
    });

  $urlRouterProvider.otherwise('/');

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}
