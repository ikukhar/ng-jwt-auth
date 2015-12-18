
var app = angular.module('jwt-auth', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $stateProvider
    .state('sign_in', {
      url: "/sign_in",
      templateUrl: "templates/sign_in"
    })
    .state('sign_up', {
      url: "/sign_up",
      templateUrl: "templates/sign_up"
    })
    .state('home', {
      url: "/",
      templateUrl: "templates/index"
    });
  $urlRouterProvider.otherwise("");

  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('AuthInterceptor');

});
