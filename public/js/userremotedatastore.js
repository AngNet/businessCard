(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  //constructor
  function userRemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  //register new User
  userRemoteDataStore.prototype.add = function(key, val) {
    $.ajax(this.serverUrl, {
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(val),
      success: function(serverResponse) {
        console.log(serverResponse);
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  // get all users
  userRemoteDataStore.prototype.getAll = function(cb) {

    $.ajax(this.serverUrl, {
      type: "GET",
      success: function(serverResponse) {
        console.log(serverResponse);
        cb(serverResponse);
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  //get an user with key=username
  userRemoteDataStore.prototype.get = function(key, cb) {

    $.ajax({
      method: "GET",
      url: this.serverUrl,
      success: function(serverResponse) {
        console.log(serverResponse);

        //get id from username
        var id = null, i = 0, l = serverResponse.length;
        while (id == null && i < l){
          if (serverResponse[i].username == key) {
            id = serverResponse[i].id;
          }
          i++;
        }

        console.log(id);

        $.ajax({
          method: "GET",
          url: this.url + "/" + id,
          success: function(serverResponse) {
            console.log(this.url);
            console.log(serverResponse);
            cb(serverResponse);
          },
          error: function(xhr) {
            alert(xhr.responseText);
          }
        });
      },
    });
  };

  userRemoteDataStore.prototype.remove = function(key) {
    /*$.ajax(this.serverUrl + "/" + key, {
      type: "DELETE"
    });*/

    $.ajax({
      method: "GET",
      url: this.serverUrl,
      success: function(serverResponse) {
        console.log(serverResponse);

        //get id from emailAddress
        var id = null, i = 0, l = serverResponse.length;
        while (id == null && i < l){
          if (serverResponse[i].emailAddress == key) {
            id = serverResponse[i].id;
          }
          i++;
        }
        console.log(id);
        $.ajax({
          method: "DELETE",
          url: this.url + "/" + id,
          success: function(serverResponse) {
            console.log(this.url);
            console.log(serverResponse);
            console.log("delete item " + id);
          },
          error: function(xhr) {
            alert(xhr.responseText);
          }
        });
      },
    });
  };

  App.userRemoteDataStore = userRemoteDataStore;
  window.App = App;
})(window);
