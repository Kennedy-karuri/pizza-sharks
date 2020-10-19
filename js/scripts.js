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

  $("#confirm").click(function() {
    var delivery = $(".question :checked").val();
    var location = $("#place").val()
    var allCharge = parseInt($("#total").html());

    if (delivery === "deliver") {
      alert(`Thanks for shopping with Pizza-shark.
      Your total charge is ${allCharge + 250}/=
      Your delivery is en-route to ${location}`);
    } else {
       alert(`Thanks for shopping with Pizza-shark.
       Your total charge is ${allCharge}`);
    }
  });

  $("#pick-up").click(function() {
    $("#place").hide();
  });
  $("#deliver").click(function() {
    $("#place").show();
  });
});


function PizzaOrder(size, crust, toppings,number) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings; 
  this.count = number;
}

PizzaOrder.prototype.getPrice = function() {
  var sizePrice, crustPrice, toppingsPrice;
  sizePrice = parseInt(this.size.val());
  crustPrice = parseInt(this.crust.val());

  toppingsPrice = this.toppings.map(function() {
    return parseInt($(this).val());
  });
  var toppingsTotalPrice = 0;
  for (var i = 0; i < toppingsPrice.length; i++) {
    toppingsTotalPrice += toppingsPrice[i];
  }

  var orderPrice = (sizePrice + crustPrice + toppingsTotalPrice) * this.count;
  return orderPrice;
};

function addToCart(order) {
  var toppings = order.toppings
    .map(function() {
      return this.id;
    })
    .get()
    .join();

    $(".question tbody").append(`<tr>
    <td>${order.Order.no.html()}</td>
    <td>${order.Crust.html()}</td>
    <td>${Topping}</td>
    <td>${order.getPrice()}</td>
  </tr>`);

  var currentTotalCharge = parseInt($("#total").html());
  $("#total").html(currentTotalCharge + order.getPrice());
  $("#confirm").show();
  $("#delivery").show();
}
