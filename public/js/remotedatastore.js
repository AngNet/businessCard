(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      /* eslint-disable no-console */
      console.log(serverResponse);
      // dpd.users.get(function(data, error) {
      //   if (error) {
      //     alert(error.message);
      //   } else {
      //     var num1 = data.length - 1;
      //     dpd.aboutme.get(function(result, error) {
      //       if (error) {
      //         alert(error.message);
      //       } else {
      //         var num2 = result.length - 1;
      //         result[num2].username = data[num1].username;
      //         console.log(result[num2]);
      //       }
      //     });
      //   }
      // });
    });
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    //$.get(this.serverUrl, function(serverResponse) {
    /* eslint-disable no-console */
    //  console.log(serverResponse);
    //cb(serverResponse);
    //});
    $.ajax(this.serverUrl + "aboutme/", {
      type: "GET",
      success: function(serverResponse) {
        /* eslint-disable no-console */
        console.log(serverResponse);
        cb(serverResponse);
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    //$.get(this.serverUrl + "/" + key, function(serverResponse) {
    /* eslint-disable no-console */
    //console.log(serverResponse);
    //cb(serverResponse);
    //});
    $.ajax("aboutme/" + key, {
      type: "GET",
      success: function(serverResponse) {
        /* eslint-disable no-console */
        console.log(serverResponse);
        cb(serverResponse);
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    $.ajax(this.serverUrl + "?emailAddress=" + key, {
      type: "GET",
      dataType: "json",
      success: function(serverResponse) {
        $.ajax("http://localhost:2403/aboutme" + "/" + serverResponse[0].id, {
          type: "DELETE",
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

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
