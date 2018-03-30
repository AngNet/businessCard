(function(window) {
  "use strict";
  var FORM_SELECTOR = "[user-form='form']";
  var SERVER_URL = "http://localhost:2403/aboutme";
  var App = window.App;
  var Truck = App.Truck;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck(remoteDS);
  window.myTruck = myTruck;

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data);
  });

})(window);
