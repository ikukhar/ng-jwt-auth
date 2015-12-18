function Sessions($state, $scope) {
  $scope.user = {
    signedIn: false,
    email: 'test@i.ua'
  };
  $scope.signin = function(form) {
    console.log(form)
  };
  $scope.authenticate = function(){
    console.log("authenticate")
  };
};

Sessions.$inject = ['$state', '$scope'];
app.controller('Sessions', Sessions);
