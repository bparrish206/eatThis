"use strict";


module.exports = function(app) {
  app.controller('eatCtrl', ["$scope", "eatBackend", function($scope, eatBackend) {
    $scope.search = function() {
      $scope.food = eatBackend().getRecipeJson();
    };
  }]);
};
