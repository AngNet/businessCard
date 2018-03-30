(function(window) {
  "use strict";
  var App = window.App || {};

  function Truck(db) {
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    /* eslint-disable no-console */
    console.log("Adding order for " + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function(customerId) {
    /* eslint-disable no-console */
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  };

  App.Truck = Truck;
  window.App = App;
})(window);
