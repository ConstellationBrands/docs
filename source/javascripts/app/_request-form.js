$(document).ready(function () {
  $('#requestKeyModal').appendTo("body");
  $('#successModal').appendTo("body");
  $('#failureModal').appendTo("body");
  var requestForm = $("form#requestForm");
  requestForm.submit(function(event){
    event.preventDefault();

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "worker_api_key_request";
    requestForm.find("button#submit").text("Sending...");
    emailjs.sendForm(service_id,template_id,"requestForm")
      .then(function(){ 
        $('#requestKeyModal').modal('hide');
        $('#successModal').modal('show');
         requestForm.find("button#submit").text("Request Key");
      }, function(err) {
         $('#requestKeyModal').modal('hide');
         $('#failureModal').modal('show');
         requestForm.find("button#submit").text("Request Key");
      });
    return false;
  });
});