/**
 * Created by aaron on 2016-05-23.
 */

var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/about-me', {
            templateUrl: 'about-me/about-me.html',
            controller: 'AboutMeController'
        })
        .when('/portfolio', {
            templateUrl: 'portfolio/portfolio.html',
            controller: 'PortfolioController'
        });

    $locationProvider.html5Mode(true);
});
app.controller('main', function($scope) {
    // Controller stuff
    // $scope.globals = globals;
});
app.controller('NavBarController', function ($scope, $route) {
    console.log($route.current);
});
app.controller('AboutMeController', function($scope) {
});
app.controller('PortfolioController', function($scope) {
});