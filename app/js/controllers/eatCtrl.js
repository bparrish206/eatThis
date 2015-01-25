"use strict";

module.exports = function(app) {
  app.controller('mmmCtrl', ["$scope", "$http", function($scope, $http) {
    $scope.search = function() {
      var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw=" + $scope.mmm.food +
      "&api_key="+ 'dvx748HNLFQ2iP293b1YmmE5K5nWkfen';

      $http.get(url).
      success(function(data) {
        var searchObj = data['Results'];
        console.log(searchObj);
        $scope.searchObj = searchObj;
      }).
      error(function(data) {
        console.log(data);
      });
      $scope.view = 'show';
    };

    $scope.recipe = function(num) {
      console.log(num);
      var recipeUrl = "http://api.bigoven.com/recipe/" + num + "?api_key="+ 'dvx748HNLFQ2iP293b1YmmE5K5nWkfen';
      $http.get(recipeUrl).
      success(function(data) {
        console.log(data);
        $scope.ings = data.Ingredients;
        $scope.inst = data.Instructions;
      });
    };
  }]);
};
