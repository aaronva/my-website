/**
 * Created by aaron on 2016-05-23.
 */

var app = angular.module('app', []);
app.controller('main', function($scope, global) {
    // Controller stuff
    $scope.global = global;

    global.activePage = {
        templateUrl: 'about-me/about-me.html'
    }
});
app.factory('global', function() {
    return {
        // templateUrl: 'about-me/about-me.html'
        // templateUrl: 'sidebar/sidebar.html'
    }
});
