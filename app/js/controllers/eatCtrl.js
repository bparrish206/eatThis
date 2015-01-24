"use strict";


module.exports = function(app) {
  app.controller('mmmCtrl', ["$scope", "mmmBackend", "$http", function($scope, mmmBackend, $http) {
    $scope.search = function() {
      var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw=" + $scope.mmm.food +
      "&api_key="+'dvx748HNLFQ2iP293b1YmmE5K5nWkfen';
      $http.get(url).
      success(function(data) {
        var recep = data.Instructions;
        var icon = data.object;
        console.log(icon);
        $scope.pic = icon;

        $scope.list = "data here";
        return recep;
      }).
      error(function(data) {
        console.log(data);
      });
      $scope.view = 'show';
    };
  }]);
};
