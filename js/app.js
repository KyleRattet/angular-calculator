var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/add/:x/:y', {
        templateUrl: 'partials/addition.html',
        controller: 'AdditionController'
      })
      .when('/divide/:x/:y', {
        templateUrl: 'partials/division.html',
        controller: 'DivisionController'
      })

       // use the HTML5 History API
      $locationProvider.html5Mode(true);
});



