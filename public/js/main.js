(function(window) {
  "use strict";
  var FORM_SELECTOR = "[user-form='form']";
  var SERVER_URL = "http://localhost:2403/aboutme";
  var App = window.App;
  var User = App.User;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;

  var getUser = App.getUser;
  var username = new getUser("http://localhost:2403/register");

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myUser = new User(remoteDS);
  window.myUser = myUser;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myUser.createOrder.call(myUser, data);
    username.getUserPage();
  });

})(window);
