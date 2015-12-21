var app = angular.module('jwt-auth', [
  'ngRoute',
  'LocalStorageModule',
  'ui-notification'
]);

app.config(function($routeProvider, $locationProvider, $httpProvider, NotificationProvider) {

  $routeProvider
    .when('/', {
    })
    .when('/login', {
      templateUrl: '/templates/login'
    })
    .when('/register', {
      templateUrl: '/templates/register'
    })
    .when('/user', {
      templateUrl: '/templates/user'
    })
    .otherwise({
      redirectTo: '/'
    })

  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('AuthInterceptor');

  NotificationProvider.setOptions({
    startTop: 55
  });

});

app.run(['$rootScope', 'Auth', '$location', 'Notification', '$window', '$http',
  function($rootScope, Auth, $location, Notification, $window, $http) {
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

    $rootScope.$on('auth_error', function(event, message) {
      Notification.error(message);
      $location.path('/login');
    });
    // $rootScope.$on('$locationChangeStart', function(event, next, current) {
    //   //alert('locationChangeStart')
    // });
    //
  }
]);
