app.controller('myController', function($scope) {
  $scope.greeting = "Hellllooooo";
});

app.controller('AdditionController', function($scope, $routeParams, $location) {
  $scope.greeting = "This is the addition route.";
  $scope.result = "The sum of the two numbers in the URL is...";
  $scope.number1= $routeParams.x;
  $scope.number2= $routeParams.y;
  $scope.parseInt = parseInt;
  // console.log($route.params);
});

app.controller('DivisionController', function($scope, $routeParams) {
  $scope.greeting = "This is the division route.";
  $scope.result = "Division of the two numbers in the URL is...";
  $scope.number1= $routeParams.x;
  $scope.number2= $routeParams.y;
  $scope.parseInt = parseInt;
});


