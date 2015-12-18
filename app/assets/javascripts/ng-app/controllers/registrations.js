function Registrations(Auth, $location, $scope) {
  $scope.signUp = function(form) {
    if ($scope.form.$valid) {
      Auth.register($scope.data).then(function() {
        $location.path('/user');
      }, function(err) {
      //  vm.errors.push(err);
      });
    }
  };
};

Registrations.$inject = ['Auth', '$location', '$scope'];
app.controller('Registrations', Registrations);
