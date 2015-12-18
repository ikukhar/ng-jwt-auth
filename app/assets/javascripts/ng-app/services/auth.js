function Auth($http, localStorage, $rootScope) {
  return {
    isAuthenticated: function() {
      return Boolean(localStorage.get('auth_token'))
    },
    login: function(formData) {
      $http.post('login', formData)
        .then(function(response) {

          localStorage.set('auth_token', response.data.token);
          localStorage.set('user', JSON.stringify(response.data.user));

          $rootScope.$emit('login');

        }, function(response) {
          if (response.data.message) {
            $rootScope.$emit('errorMessage', response.data.message);
          }
        });
    },
    logout: function() {

      localStorage.remove('auth_token');
      localStorage.remove('user');
      $rootScope.$emit('logout');

    },
    register: function(formData) {

      localStorage.remove('auth_token');
      $http.post('register', formData)
        .then(function(response) {

          localStorage.set('auth_token', response.data.token);
          localStorage.set('user', JSON.stringify(response.data.user));
          $rootScope.$emit('register');

        }, function(response) {
          if (response.data.message) {
            $rootScope.$emit('errorMessage', response.data.message);
          }
        });
    },
    getUser: function() {
      var result = {}

      var user_stor = localStorage.get('user');
      if (user_stor) {
        var user = JSON.parse(user_stor);
        user.signedIn = this.isAuthenticated();
        result = user;
      }

      return result;
    }
  }
}

Auth.$inject = ['$http', 'localStorageService', '$rootScope'];
app.factory("Auth", Auth);
