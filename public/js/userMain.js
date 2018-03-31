(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-signup='form']";
  var SERVER_URL = "http://localhost:2403/users";
  var App = window.App;
  var Userreg = App.Userreg;
  var userRemoteDataStore = App.userRemoteDataStore;
  var userFormHandler = App.userFormHandler;

  var userRemoteDS = new userRemoteDataStore(SERVER_URL);
  var newRegSession = new Userreg("dummy_regID", userRemoteDS);

  window.newRegSession = newRegSession;
  var userFH = new userFormHandler(FORM_SELECTOR);

  userFH.addSubmitHandler(function(data) {
    var modalDialog;

    //check passwords matched
    if (data.password != data.password2) {
      modalDialog = "<p>Password not matched. Please re-enter password.</p>";
      $(modalDialog).modal();
      return;
    }
    newRegSession.registerNew.call(newRegSession, data);
  });

})(window);
