"use strict";


module.exports = function(app) {
  app.controller('mmmCtrl', ["$scope", "mmmBackend", "$http", function($scope, mmmBackend, $http) {
    $scope.search = function() {
      var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw=" + $scope.mmm.food +
      "&api_key="+'dvx748HNLFQ2iP293b1YmmE5K5nWkfen';
      $http.get(url).
      success(function(data) {
        var recep = data.Instructions;
        for (var i = 0; i<24; i++){
          var icon = data['Results'][i].ImageURL120;
        }
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
