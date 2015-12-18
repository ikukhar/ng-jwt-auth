var app = angular.module('jwt-auth', [
  'ngRoute',
  'LocalStorageModule',
  'ui-notification'
]);

app.config(function($routeProvider, $locationProvider, $httpProvider, NotificationProvider) {

  $routeProvider
    .when('/', {
      //  templateUrl: '/templates/start'
      //  controller: 'ProjectsController',
      // resolve: {
      //   auth: ['$auth', ($auth) ->
      //     return $auth.validateUser();
      //   ]
      // }
    })
    .when('/login', {
      templateUrl: '/templates/login'
        //  controller: 'SessionsController'
    })
    .when('/register', {
      templateUrl: '/templates/register'
        //    controller: 'UserRegistrationsController'
    })
    .when('/user', {
      templateUrl: '/templates/user'
        //    controller: 'UserRegistrationsController'
    })
    //   .otherwise({
    //      redirectTo: '/'
    //   })

  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('AuthInterceptor');

  NotificationProvider.setOptions({
    startTop: 55
  });

});

app.run(['$rootScope', 'Auth', '$location', 'Notification',
  function($rootScope, Auth, $location, Notification) {
    $rootScope.setUser = function() {
      $rootScope.user = Auth.getUser();
    };
    $rootScope.setUser();

    $rootScope.$on('login', function(event) {
      $rootScope.setUser();
      $location.path('/user');
    });

    $rootScope.$on('register', function(event) {
      $rootScope.setUser();
      $location.path('/user');
    });

    $rootScope.$on('logout', function(event) {
      $rootScope.setUser();
      $location.path('/login');
    });

    $rootScope.$on('errorMessage', function(event, message) {
      Notification.error(message);
    });
  }
]);
