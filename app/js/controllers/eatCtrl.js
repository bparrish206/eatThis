"use strict";


module.exports = function(app) {
  app.controller('mmmCtrl', ["$scope", "mmmBackend", "$http", function($scope, mmmBackend, $http) {
    $scope.test = "Code rawks my socks!";
    $scope.search = function() {
      var url = "http://api.bigoven.com/recipe/" + 47725 +
      "?api_key="+'dvx748HNLFQ2iP293b1YmmE5K5nWkfen';
      $http.get(url).
      success(function(data) {
        var recep = data.Instructions;
        console.log(recep);
        $scope.list = recep;
        return recep;
      }).
      error(function(data) {
        console.log(data);
      });
      $scope.view = 'show';
    };
  }]);
};
