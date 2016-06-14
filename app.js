/**
 * Created by aaron on 2016-05-23.
 */

var app = angular.module('app', []);
app.controller('main', function($scope, activePage) {
    // Controller stuff
    $scope.activePage = activePage;

    activePage = {
        templateUrl: 'about-me/about-me.html'
    }
});
app.factory('activePage', function() {
    return {
        // templateUrl: 'about-me/about-me.html'
        // templateUrl: 'sidebar/sidebar.html'
    }
});
