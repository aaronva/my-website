/**
 * Created by aaron on 2016-05-23.
 */

    var app = angular.module('app', []);
    app.controller('main', function($scope, global) {
        // Controller stuff
        $scope.activePage = global.activePage;
    });
    app.factory('global', function() {
        this.activePage = {
            templateUrl: 'about-me/about-me.html'
        }
    });

