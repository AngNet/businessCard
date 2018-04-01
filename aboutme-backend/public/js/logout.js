$('#logout-button').click(function() {
      dpd.users.logout(function(res, err) {
        location.href = "/";
      });
    });
