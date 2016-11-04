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
  this.toppings.forEach(function(topping) {
    if (topping.toppingTier === "basic") {
      this.price += 1000;
    } else if (topping.toppingTier === "premium") {
      this.price += 10000;
    }
  });
  this.cost += (this.pizzaSize * .5 * 3.1415927) ^ 2;
    if (this.delivery === true) {
      this.price += 7;
    }
  return this.cost;
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
//set default customer


$(document).ready(function() {

  //preloaded client list
  $("#jb").click(function() {
    console.log(jamesBond.clientName);
    $("#clientNameDisplay").text("Client Name: " + jamesBond.clientName);
    $("#clientPaymentDisplay").text(jamesBond.clientName + " pays with " +jamesBond.paymentMethod + ".");
    $("#clientAddressDisplay").text(jamesBond.address);
    currentClient = jamesBond;
  });
  $("#bo").click(function() {
    console.log(barackObama.clientName);
    $("#clientNameDisplay").text("Client Name: " + barackObama.clientName);
    $("#clientPaymentDisplay").text(barackObama.clientName + " pays with " +barackObama.paymentMethod + ".");
    $("#clientAddressDisplay").text(barackObama.address);
    currentClient = barackObama;
  });
  //Bond appears on pageload
  $("#jb").click();
  //populate toppings list with contents of var toppings

toppings.forEach(function(topping) {
  $("#toppingsSelect").append("<option value='" +  topping.toppingName + "'>" + topping.toppingName + " -- " + topping.toppingTier);
});

  //user clicks #clientInfoSubmitButton
  $("#clientInfoForm").submit(function(event) {
    event.preventDefault();
    //collect inputs from form
    var newClientName = $("#clientNameInput").val();
    var newClientAddress = $("#clientAddressInput").val();
    var newClientPayment = $("#clientPaymentInput").val();
    //assign collected inputs to new Client object
    var newClient = new Client(newClientName, newClientAddress, newClientPayment);
    //add new client's name to the list
    $("#clientList").append("<li>" + newClient.clientName + "</li>");
    //attach a click handler to display client's info
    $("#clientList li").last().click(function() {
      $("#clientNameDisplay").text("Client Name: " + newClient.clientName);
      $("#clientPaymentDisplay").text(newClient.clientName + " pays with " + newClient.paymentMethod + ".");
      $("#clientAddressDisplay").text(newClient.address);
      currentClient = newClient;
    });
  });

  //user clicks #pizzaOrderSubmitButton
  $("#pizzaOrderForm").submit(function(event) {
    event.preventDefault();
    console.log("pizza order Form running")
    //collect inputs
    console.log(currentClient);
    sizeInput = parseFloat($("#pizzaSizeSelect").val());
    toppingsInput = $("#toppingsSelect").val();
    deliveryInput = $("#deliveryCheckbox").val();
    //create Pizza object
    newPizza = new Pizza(sizeInput, toppingsInput, deliveryInput);
    console.log(newPizza);
    //run pizza.cost to calculate total and display value somewhere big
    var orderCost = newPizza.cost();
    $("#orderDisplay").text("Thanks for your order, " + currentClient.clientName + "! $" + orderCost + " will be your total. Don't worry about sending payment, we know where you keep your" + currentClient.paymentMethod + ".");
  });
});
