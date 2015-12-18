function Registrations(Auth, $state, $scope) {
  $scope.register = function(form) {
    if ($scope.form.$valid) {
      Auth.register($scope.data).then(function() {
        $state.go('home');
      }, function(err) {
      //  vm.errors.push(err);
      });
    }
  };
};

Registrations.$inject = ['Auth', '$state', '$scope'];
app.controller('Registrations', Registrations);
