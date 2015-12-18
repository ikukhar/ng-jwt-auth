function Auth($http, localStorage, $rootScope) {
  return {
    isAuthenticated: function() {
      return Boolean(localStorage.get('auth_token'))
    },
    login: function(formData) {
      $http.post('sessions', formData)
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
      var register = $http.post('registrations', formData);
      register.success(function(result) {
        localStorage.set('auth_token', result.token);
        localStorage.set('user', JSON.stringify(result.user));
        $rootScope.$emit('register');
      }).error(function(error) {
        if (error.messages) {
          $rootScope.$emit('errorMessage', error.messages);
        }
      });
    },
    getUser: function() {
      var user_stor = localStorage.get('user');
      if (user_stor) {
        var user = JSON.parse(user_stor);
        user.signedIn = this.isAuthenticated();
        return user;
      } else {
        return {}
      }
    }
  }
}

Auth.$inject = ['$http', 'localStorageService', '$rootScope'];
app.factory("Auth", Auth);
