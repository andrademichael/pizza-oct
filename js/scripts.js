//backend
var Client = function(name, address, paymentMethod) {
  this.clientName = name;
  this.address = address;
  this.paymentMethod = paymentMethod;
}

//frontend


//event handlers
$(document).ready(function() {
  //user clicks #clientInfoSubmitButton
  $("#clientInfoForm").submit(function(event) {
    event.preventDefault();
    var clientInputs = function() {
      console.log(      document.getElementsByClassName("clientInputs"));
    };
    var newClientName = $("#clientNameInput").val();
    var newClientAddress = $("#clientAddressInput").val();
    var newClientPayment = $("#clientPaymentInput").val();
    var newClient = new Client(newClientName, newClientAddress, newClientPayment);
    $("#clientList").append("<li>" + newClient.clientName + "</li>");
    $("#clientList").last().click(function() {
      debugger;
      $("#clientNameDisplay").text(newClient.clientName);
      $("#clientPaymentDisplay").text(newClient.paymentMethod);
      $("#clientAddressDisplay").text(newClient.address);
    });
  });

  //user clicks #pizzaOrderSubmitButton
  $("#clientInfoFormGroup").submit(function(event) {
    event.preventDefault();

  });
});
