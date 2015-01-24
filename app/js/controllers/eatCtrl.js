"use strict";


module.exports = function(app) {
  app.controller('mmmCtrl', ["$scope", "mmmBackend", "$http", function($scope, mmmBackend, $http) {
    $scope.search = function() {
      var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw=" + $scope.mmm.food +
      "&api_key="+'dvx748HNLFQ2iP293b1YmmE5K5nWkfen';
      $http.get(url).
      success(function(data) {
        var recep = data.Instructions;
        var icons = [];
        for (var i = 0; i<25; i++){
          icons.push(data['Results'][i].ImageURL120);
        }
        console.log(icons);
        $scope.pics = icons;

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
