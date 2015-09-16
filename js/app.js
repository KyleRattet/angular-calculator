var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
      .when('/add/:number1/:number2', {
        templateUrl: 'partials/addition.html',
        controller: 'AdditionController'
      })
      .when('/divide/:number1/:number2', {
        templateUrl: 'partials/division.html',
        controller: 'DivisionController'
      })
});



