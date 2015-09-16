var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/add/:number1/:number2', {
        templateUrl: 'partials/addition.html',
        controller: 'AdditionController'
      })
      .when('/divide/:number1/:number2', {
        templateUrl: 'partials/division.html',
        controller: 'DivisionController'
      })

       // use the HTML5 History API
      $locationProvider.html5Mode(true);
});



