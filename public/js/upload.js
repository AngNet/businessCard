
var files = [];

$(".alert-success").hide();

/*eslint-disable no-unused-vars*/
var uploadFiles = function() {
  var fd = new FormData();
  for (var i in files) {
    fd.append("uploadedFile", files[i]);
  }

  var username = $("#username").val(); //var to grab the username

  // var subdir = $('#subdir').val();
  // var comments = $('#comments').val();
  // var uniqueFilename = $('#uniqueFilename').prop('checked');

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:2403/pic?username=" + username);
  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    console.log(response);
    if (this.status < 300) {
      $(".alert-success").append("Upload successful!<br />");
      // for (var index in response) {
      //    appendUploadedFileToTable(response[index]);
      // }
    } else {
      alert(response.message);
    }
  };
  xhr.onerror = function(err) {
    alert("Error: ", err);
  };
  xhr.send(fd);
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

// dpd.pic.get(function(data, statusCode, headers, config) {
//   console.log(data);
//     // for(var index in data) {
//     //     appendUploadedFileToTable(data[index]);
//     // }
// });

// var deleteFile = function(element, id) {
//     $(element).closest('tr').remove();
//     dpd.upload.del(id, function(data, status) {
//         $('.alert-success').show();
//         $('.alert-success').append("File removed!");
//     })
// }
