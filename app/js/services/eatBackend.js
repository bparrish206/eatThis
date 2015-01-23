"use strict";

module.exports = function(app) {

  app.factory('mmmBackend', ['$http', function($http) {
    return function() {
      return {
        getRecipeJson: function () {
          var url = "http://api.bigoven.com/recipe/" + 47725 +
          "?api_key="+'dvx748HNLFQ2iP293b1YmmE5K5nWkfen';
          $http.get(url).
          success(function(data) {
            var recep = data.Instructions;
            console.log(recep);
            return recep;
          }).
          error(function(data) {
            console.log(data);
          });
        }
      };
    };
  }]);
};
