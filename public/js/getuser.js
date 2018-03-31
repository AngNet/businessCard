(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function getUser(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  getUser.prototype.getUserPage = function() {
    $.ajax(this.serverUrl, {
      type: "GET",
      dataType: "json",
      success: function(serverResponse) {
        /* eslint-disable no-console */
        console.log(serverResponse);
        var user =  serverResponse.username;

        $.ajax("http://localhost:2403/aboutme", {
          type: "POST",
          contentType: "json",
          success: function(aboutme) {
            console.log(aboutme);
            aboutme.username =  user;
          },
          error: function(xhr) {
            alert(xhr.responseText);
          }
        });
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  App.getUser = getUser;
  window.App = App;
})(window);
