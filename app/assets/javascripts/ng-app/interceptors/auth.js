function AuthInterceptor($q, $location, localStorage) {
  return {
    request: function(config) {
      var token;
      console.log('reguest');
      if (localStorage.get('auth_token')) {
        token = localStorage.get('auth_token');
      }

      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;
    },
    responseError: function(response) {
      console.log('responseError');
      if (response.status === 401 || response.status === 403) {
        localStorage.remove('auth_token');
        $location.path('/login');
      }

      return $q.reject(response);
    }
  }
}

AuthInterceptor.$inject = ['$q', '$location', 'localStorageService'];
app.factory('AuthInterceptor', AuthInterceptor);
