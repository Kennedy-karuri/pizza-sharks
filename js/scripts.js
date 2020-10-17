$(document).ready(function() {
  $("form#pizzaMenu").submit(function(event) {
    var size, crust, toppings, count;
    size = $("#size :selected");
    crust = $("#crust :selected");
    toppings = $("#pizzaToppings :checked");

    count = parseInt($("#number").val());

    var pizzaOrder = new PizzaOrder(size, crust, toppings, count);
    addToCart(pizzaOrder);

    event.preventDefault();
    
  });