function Auth(Auth, $scope) {

  $scope.register = function(form) {
    if ($scope.form.$valid) {
      Auth.register($scope.data);
    }
  };

  $scope.login = function(form) {
    if ($scope.form.$valid) {
      Auth.login($scope.data);
    }
  };

  $scope.logout = function() {
    Auth.logout();
  };

};

Auth.$inject = ['Auth', '$scope'];
app.controller('Auth', Auth);
