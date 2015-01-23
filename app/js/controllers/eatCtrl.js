"use strict";


module.exports = function(app) {
  app.controller('mmmCtrl', ["$scope", "mmmBackend", function($scope, mmmBackend) {
    $scope.test = "Code rawks my socks!";
    $scope.search = function() {
      $scope.list = mmmBackend().getRecipeJson();
      $scope.view = 'show';
    };
  }]);
};
