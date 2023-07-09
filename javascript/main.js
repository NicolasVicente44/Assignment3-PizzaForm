document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var quantity = document.getElementById("quantity").value;
    var pizzaSize = document.querySelector('input[name="pizza-size"]:checked');
    var crustType = document.getElementById("crust-type").value;
    var cheeseType = document.getElementById("cheese-type").value;
    var toppings = document.querySelectorAll('input[name="topping"]:checked');
    var specialInstructions = document.getElementById("textbox").value;

    if (
      !quantity ||
      !pizzaSize ||
      !crustType ||
      !cheeseType ||
      toppings.length === 0
    ) {
      alert("Please specify all order details before submitting.");
      return;
    }
    var selectedToppings = Array.from(toppings).map((topping) => topping.value);

    var order = {
      quantity: quantity,
      pizzaSize: pizzaSize,
      crustType: crustType,
      cheeseType: cheeseType,
      toppings: selectedToppings,
      specialInstructions: specialInstructions,
    };

    var orderSummary = `You ordered ${quantity} ${
      pizzaSize.value
    } pizza(s) with ${crustType} crust. The pizza(s) will have ${cheeseType} cheese along with ${selectedToppings.join(
      ", "
    )} and we will make sure to follow your special instructions: ${specialInstructions}`;
    document.getElementById("output").textContent = orderSummary;

    document.getElementById("modal-overlay").style.display = "block";
  });

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("modal-overlay").style.display = "none";
});
