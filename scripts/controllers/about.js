'use strict';

/**
 * About page controller
 */
angular.module('AngularApp1')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.setActivePage('about');
  }]);
