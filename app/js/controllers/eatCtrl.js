"use strict";


module.exports = function(app) {
  app.controller('eatCtrl', ["$scope", "eatBackend", function($scope, eatBackend) {
    $scope.test = "Code rawks my socks!";
    $scope.search = function() {
      $scope.eat.food = eatBackend().getRecipeJson();
    };
  }]);
};
