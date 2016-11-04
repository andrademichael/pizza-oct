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

var Pizza = function(pizzaSize, toppings, delivery) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.delivery = delivery;
  this.price = 0;
}

Pizza.prototype.cost = function() {
  pizza.toppings.forEach(function(topping) {
    if (topping.toppingTier === "basic") {
      pizza.price += 1000;
    } else if (topping.toppingTier === "premium") {
      pizza.price += 10000;
    }
  });
  pizza.cost += (pizzaSize * .5 * 3.1415927) ^ 2;
    if (pizza.delivery === true) {
      pizza.price += 7;
    }
  return pizza.cost;
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

var toppings = [pepperoni, cheese, sauce, pineapple, bacon, garlic, peppers, mushrooms, olives, kalamataOlives, ghostpeppers, pickledRadish, anchovies, brie];

//frontend
//previous customers info
jamesBond = new Client("James Bond", "30 Wellington Square, Chelsea, London SW3 4NR, UK", "American Express")
barackObama = new Client("Barack Obama", "1600 Pensylvania Ave NW, Washington, DC, 20500, USA", "gold bullion")


$(document).ready(function() {

  //preloaded client list
  $("#jb").click(function() {
    console.log(jamesBond.clientName);
    $("#clientNameDisplay").text("Client Name: " + jamesBond.clientName);
    $("#clientPaymentDisplay").text(jamesBond.clientName + " pays with " +jamesBond.paymentMethod + ".");
    $("#clientAddressDisplay").text(jamesBond.address);
  });
  $("#bo").click(function() {
    console.log(barackObama.clientName);
    $("#clientNameDisplay").text("Client Name: " + barackObama.clientName);
    $("#clientPaymentDisplay").text(barackObama.clientName + " pays with " +barackObama.paymentMethod + ".");
    $("#clientAddressDisplay").text(barackObama.address);
  });
  //populate toppings list

toppings.forEach(function(topping) {
  $("#toppingsSelect").append("<option value='" +  topping.toppingName + "'>" + topping.toppingName + " -- " + topping.toppingTier);
});

  //user clicks #clientInfoSubmitButton
  $("#clientInfoForm").submit(function(event) {
    event.preventDefault();
    var newClientName = $("#clientNameInput").val();
    var newClientAddress = $("#clientAddressInput").val();
    var newClientPayment = $("#clientPaymentInput").val();
    var newClient = new Client(newClientName, newClientAddress, newClientPayment);
    console.log(newClient);
    $("#clientList").append("<li>" + newClient.clientName + "</li>");
    $("#clientList li").last().click(function() {
      console.log(newClient.clientName);
      $("#clientNameDisplay").text("Client Name: " + newClient.clientName);
      $("#clientPaymentDisplay").text(newClient.clientName + " pays with " +newClient.paymentMethod + ".");
      $("#clientAddressDisplay").text(newClient.address);
    });
  });

  //user clicks #pizzaOrderSubmitButton
  $("#clientInfoFormGroup").submit(function(event) {
    event.preventDefault();
    //collect inputs
    //run pizza.cost
    //display value somewhere big


  });
});
