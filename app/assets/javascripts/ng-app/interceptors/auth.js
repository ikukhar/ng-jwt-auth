function AuthInterceptor($q, $injector) {
  return {
    request: function(config) {
      var token;

      if (localStorage['auth_token']) {
        token = localStorage['auth_token'];
      }

      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;
    },
    responseError: function(response) {

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('auth_token');
        $injector.get('$state').go('login');
      }

      return $q.reject(response);
    }
  }
}

AuthInterceptor.$inject = ['$q', '$injector'];
app.factory('AuthInterceptor', AuthInterceptor);
