(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  CheckList.prototype.addClickHandler = function(fn) {
    this.$element.on("click", "input", function(event) {
      var email = event.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };

  CheckList.prototype.addRow = function(personalInfo) {
    this.removeRow(personalInfo.emailAddress);

    var rowElement = new Row(personalInfo);

    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function(email) {
    this.$element
      .find("[value='" + email + "']")
      .closest("[data-coffee-order='checkbox']")
      .remove();
  };

  function Row(personalInfo) {
    var $div = $("<div></div>", {
      "user-form": "checkbox",
      "class": "checkbox"
    });

    var $label = $("<label></label>");

    var $checkbox = $("<input></input>", {
      type: "checkbox",
      value: personalInfo.emailAddress
    });

    var description = personalInfo.firstName + " ";
    description += personalInfo.lastName + ", ";
    description += " [" + personalInfo.location + "x]";
    description += " (" + personalInfo.email + ")";

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
