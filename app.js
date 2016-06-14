/**
 * Created by aaron on 2016-05-23.
 */

var app = angular.module('app', []);
app.controller('main', function($scope, globals) {
    // Controller stuff
    $scope.globals = globals;
});
app.controller('navBar', function($scope, globals) {
    // Controller stuff
    var pageLookup = {
        aboutMe: {
            templateUrl: 'about-me/about-me.html'
        },
        portfolio: {
            templateUrl: 'portfolio/portfolio.html'
        }
    };

    $scope.setCurPage = function (current) {
        globals.activePage = pageLookup[current];
    }
});
app.factory('globals', function() {
    return {
        activePage: {
            templateUrl: 'about-me/about-me.html'
        }
    }
});
