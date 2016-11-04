//backend
var Client = function(name, address, paymentMethod) {
  this.clientName = name;
  this.address = address;
  this.paymentMethod = paymentMethod;
}

var Topping = function(name, tier) {
  this.toppingName = name;
  this.toppingTier = tier;
}

//toppings list
var pepperoni = new Topping("pepperoni", "basic");
var cheese =  new Topping("cheese", "basic");
var sauce =  new Topping("sauce", "basic");
var pineapple =  new Topping("pineapple", "basic");
var bacon =  new Topping("bacon", "basic");
var garlic =  new Topping("garlic", "basic");
var peppers =  new Topping("peppers", "basic");
var mushrooms =  new Topping("mushrooms", "basic");
var olives =  new Topping("olives", "basic");
var kalamataOlives = new Topping("Kalamata Olives", "premium")
var ghostpeppers = new Topping("ghost peppers", "premium")
var pickledRadish = new Topping("aickled radish", "premium")
var anchovies = new Topping("anchovies", "premium")
var brie = new Topping("brie", "premium")


var toppingsMenu = forEach(function(topping) {
  toppingsMenu.push(topping);
});
//frontend
//previous customers info
jamesBond = new Client("James Bond", "30 Wellington Square, Chelsea, London SW3 4NR, UK", "American Express")
barackObama = new Client("Barack Obama", "1600 Pensylvania Ave NW, Washington, DC, 20500, USA", "gold bullion")


$(document).ready(function() {
  //preloaded event handlers
  $("#jb").click(function() {
    console.log(jamesBond.clientName);
    $("#clientNameDisplay").text("Client Name: " + jamesBond.clientName);
    $("#clientPaymentDisplay").text(jamesBond.clientName + " pays in " +jamesBond.paymentMethod + ".");
    $("#clientAddressDisplay").text(jamesBond.address);
  });
  $("#bo").click(function() {
    console.log(barackObama.clientName);
    $("#clientNameDisplay").text("Client Name: " + barackObama.clientName);
    $("#clientPaymentDisplay").text(barackObama.clientName + " pays in " +barackObama.paymentMethod + ".");
    $("#clientAddressDisplay").text(barackObama.address);
  });
  //populate toppings list
toppings.forEach(function(topping)) {
  $("#toppingsSelect").append("<option value='"topping.toppingName"'>" + topping.toppingName + " -- " + topping.toppingTier);
}

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
    console.log(newClient);
    $("#clientList").append("<li>" + newClient.clientName + "</li>");
    $("#clientList li").last().click(function() {
      console.log(newClient.clientName);
      $("#clientNameDisplay").text("Client Name: " + newClient.clientName);
      $("#clientPaymentDisplay").text(newClient.clientName + " pays in " +newClient.paymentMethod + ".");
      $("#clientAddressDisplay").text(newClient.address);
    });
  });

  //user clicks #pizzaOrderSubmitButton
  $("#clientInfoFormGroup").submit(function(event) {
    event.preventDefault();

  });
});
