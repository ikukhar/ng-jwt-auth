function AuthInterceptor($q, $location, localStorage, $rootScope) {
  return {
    request: function(config) {
      var token;
      if (localStorage.get('auth_token')) {
        token = localStorage.get('auth_token');
      }
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;
    },
    responseError: function(response) {
      if (response.status === 401 || response.status === 403) {
        localStorage.remove('auth_token');
        $rootScope.$emit('auth_error', 'Unauthorized!');
      }

      return $q.reject(response);
    }
  }
}

AuthInterceptor.$inject = ['$q', '$location', 'localStorageService', '$rootScope'];
app.factory('AuthInterceptor', AuthInterceptor);
