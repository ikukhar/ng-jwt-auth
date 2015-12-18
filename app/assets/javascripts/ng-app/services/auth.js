function Auth($http) {
  return {
    isAuthenticated: function() {
      return localStorage['auth_token']
    },
    login: function(credentials) {
      var login = $http.post('sessions', credentials);
      login.success(function(result) {
        localStorage['auth_token'] = result.token;
        var user = {
          id: result.id,
          username: result.username,
          avatarUrl: result.avatarUrl
        }
        localStorage['user'] = JSON.stringify(user);
      });

      return login;
    },
    logout: function(){
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    },
    register: function(formData) {
      console.log('Auth:register');
      localStorage.removeItem('auth_token');
      var register = $http.post('registrarions', formData);
      register.success(function(result) {
        localStorage['auth_token'] = result.token;
      });

      return register;
    }
  }
}

Auth.$inject = ['$http'];
app.factory("Auth", Auth);
