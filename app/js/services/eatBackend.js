"use strict";

module.exports = function(app) {

  app.factory('eatBackend', '$http', function($http) {
    return function() {
      return {
        getRecipeJson: function () {
        var titleKeyword = "lasagna";
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw=" + titleKeyword + "&api_key="+process.env.APIKEY;
        $http.get(url).
          success(function (data) {
            return data;
          }).
          error(function(data) {
            console.log(data);
          });
        }
      };
    };
  });
};
