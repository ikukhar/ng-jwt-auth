function Sessions(Auth, $scope) {

  $scope.signIn = function(form) {
    if ($scope.form.$valid) {
      Auth.login($scope.data);
    }
  };
  $scope.signOut = function() {
    Auth.logout();
  };

};

Sessions.$inject = ['Auth', '$scope'];
app.controller('Sessions', Sessions);
