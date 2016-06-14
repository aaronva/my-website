/**
 * Created by aaron on 2016-05-23.
 */

var app = angular.module('app', []);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/about-me', {
            templateUrl: 'about-me/about-me.html',
            // controller: 'AboutMeController',
        })
        .when('/portfolio', {
            templateUrl: 'portfolio/portfolio.html',
            // controller: 'PortfolioController'
        });
});

app.controller('main', function($scope, globals) {
    // Controller stuff
    // $scope.globals = globals;
});
// app.controller('navBar', function($scope, globals) {
//     // Controller stuff
//     var pageLookup = {
//         aboutMe: {
//             templateUrl: 'about-me/about-me.html'
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
//             templateUrl: 'about-me/about-me.html'
//         }
//     }
// });
