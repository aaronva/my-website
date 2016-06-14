/**
 * Created by aaron on 2016-05-23.
 */

var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/about-me', {
            templateUrl: 'about-me-1/about-me.html',
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
app.controller('AboutMeController', function($scope) {
});
app.controller('PortfolioController', function($scope) {
});

// app.controller('navBar', function($scope, globals) {
//     // Controller stuff
//     var pageLookup = {
//         aboutMe: {
//             templateUrl: 'about-me-1/about-me-1.html'
//         },
//         portfolio: {
//             templateUrl: 'portfolio/portfolio.html'
//         }
//     };
//
//     $scope.setCurPage = function (current) {
//         globals.activePage = pageLookup[current];
//     }
// });
// app.factory('globals', function() {
//     return {
//         activePage: {
//             templateUrl: 'about-me-1/about-me-1.html'
//         }
//     }
// });
