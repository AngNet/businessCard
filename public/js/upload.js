
var files = [];

$(".alert-success").hide();

/*eslint-disable no-unused-vars*/
var uploadFiles = function() {
  var fd = new FormData();
  for (var i in files) {
    fd.append("uploadedFile", files[i]);
  }

  dpd.users.get(function(data, error) {
    if (error) {
      alert(error.message);
    } else {
      var num1 = data.length - 1;
      var username = data[num1].username;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:2403/pic?username=" + username);
      xhr.onload = function() {
        var response = JSON.parse(this.responseText);
        console.log(response);
        if (this.status < 300) {
          $(".alert-success").append("Upload successful!<br />");
        } else {
          alert(response.message);
        }
      };

      xhr.onerror = function(err) {
        alert("Error: ", err);
      };
      xhr.send(fd);
    }
  });
};

var setFiles = function(element) {
  console.log("files:", element.files);
  // Turn the FileList object into an Array
  files = [];
  for (var i = 0; i < element.files.length; i++) {
    files.push(element.files[i]);
  }
};

/*eslint-disable no-undef*/
dpd.pic.get(function(data, error) {
  if (error) {
    alert(error.message);
  } else {
    console.log(data);
  }
});

// dpd.users.get(function(data, error) {
//   if (error) {
//     alert(error.message);
//   } else {
//     var num1 = data.length - 1;
//     console.log(data[num1]);
//     dpd.aboutme.get(function(result, error) {
//       if (error) {
//         alert(error.message);
//       } else {
//         var num2 = result.length - 1;
//         //result[num2].username = data[num1].username;
//         //console.log(result[num2]);
//         console.log(result);
//       }
//     });
//   }
// });


// var deleteFile = function(element, id) {
//     $(element).closest('tr').remove();
//     dpd.upload.del(id, function(data, status) {
//         $('.alert-success').show();
//         $('.alert-success').append("File removed!");
//     })
// }
