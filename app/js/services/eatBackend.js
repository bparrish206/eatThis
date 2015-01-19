"use strict";

module.exports = function(app) {

  app.factory('eatBackend', function() {
    return function() {
      return {
        getRecipeJson: function () {
        var titleKeyword = "lasagna";
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw=" + titleKeyword + "&api_key="+process.env.APIKEY;
        $.ajax({
          type: "GET",
          dataType: 'json',
          cache: false,
          url: url,
          success: function (data) {
            alert('success');
            console.log(data);
          }
    }
  );}
};
};
});
};
