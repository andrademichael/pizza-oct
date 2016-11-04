//backend
var Client = function(name, address, paymentMethod) {
  this.clientName = name;
  this.address = address;
  this.paymentMethod = paymentMethod;
};

var Topping = function(name, tier) {
  this.toppingName = name;
  this.toppingTier = tier;
};

var Pizza = function(pizzaSize, toppings, delivery) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.delivery = delivery;
  this.price = 0;
};

Pizza.prototype.cost = function() {
  price = 0;
  (this.toppings).forEach(function(topping) {
    console.log(topping);
    if (topping == "basic") {
      price += 1000;
      console.log(this.price);
    } else if (topping == "premium") {
      price += 10000;
      console.log(this.price);
    }
  });
  price += ((this.pizzaSize * this.pizzaSize) * .5 * 3.14159);
    if (this.delivery === "true") {
      price += 7;
    }
  return price.toFixed(2);
};

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
var pickledRadish = new Topping("pickled radish", "premium")
var anchovies = new Topping("anchovies", "premium")
var brie = new Topping("brie", "premium")

var toppings = [pepperoni, cheese, sauce, pineapple, bacon, garlic, peppers, mushrooms, olives, kalamataOlives, ghostpeppers, pickledRadish, anchovies, brie];
console.log(toppings);

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
  //populate multiselect with contents of toppings[]

  toppings.forEach(function(topping) {
    $("#toppingsSelect").append("<option value='" +  topping.toppingTier + "'>" + topping.toppingName + " -- " + topping.toppingTier);
});

  //user clicks #clientInfoSubmitButton
  $("#clientInfoForm").submit(function(event) {
    event.preventDefault();
    //collect inputs from form
    var newClientName = $("#clientNameInput").val();
    var newClientAddress = $("#clientAddressInput").val();
    var newClientPayment = $("#clientPaymentInput").val();
    //input validation
    console.log(newClientName, newClientAddress, newClientPayment);
    if (!newClientName || !newClientAddress || !newClientPayment) {
      $("#clientNameInput #clientAddressInput").addClass("has-error");
      $("#welcome").text("Make sure you have all fields filled out. We already know the answers, but it's for liability.")
    } else {
      //assign collected inputs to new Client object
      var newClient = new Client(newClientName, newClientAddress, newClientPayment);
      currentClient = newClient;
      //add new client's name to the list...
      $("#clientList").append("<li>" + newClient.clientName + "</li>");
      //...then attach a click handler to display client's info later
      $("#clientList li").last().click(function() {
        $("#clientNameDisplay").text("Client Name: " + newClient.clientName);
        $("#clientPaymentDisplay").text(newClient.clientName + " pays with " + newClient.paymentMethod + ".");
        $("#clientAddressDisplay").text(newClient.address);
        currentClient = newClient;
      });
      //hide form and show details
      $("#clientInfoForm").fadeOut(1500);
      $("#clientDetailsDisplay").fadeIn(1100);
      $("#newClientButton").fadeIn(1100);
      $("#pizzaOrderForm").fadeIn(1500);
    }; //end error-catching if-else statement
  });//end client info form

    //When someone clicks #pizzaOrderSubmitButton
  $("#pizzaOrderSubmitButton").click(function(event) {
    event.preventDefault();
    console.log("pizza order Form running")
    //collect inputs
    console.log(currentClient);
    var sizeInput = parseFloat($("#pizzaSizeSelect").val());
    var toppingsInput = $("#toppingsSelect").val();
    var deliveryInput = $("#deliveryCheckbox").val();
    //create Pizza object
    newPizza = new Pizza(sizeInput, toppingsInput, deliveryInput);
    console.log(newPizza);
    //run pizza.cost to calculate total and display value somewhere big
    var orderCost = newPizza.cost();
    $("#orderDisplay").text("Thanks for your order, " + currentClient.clientName + "! $" + orderCost + " will be your total. Don't worry about sending payment, we know where you keep your" + currentClient.paymentMethod + ".");
  });//end order form submit
});//end document ready
