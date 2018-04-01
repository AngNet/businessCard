(function(window) {
  "use strict";
  var App = window.App || {};

  function User(db) {
    this.db = db;
  }

  User.prototype.createOrder = function(order) {
    /* eslint-disable no-console */
    console.log("Adding order for " + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  User.prototype.deliverOrder = function(customerId) {
    /* eslint-disable no-console */
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  };

  App.User = User;
  window.App = App;
})(window);
