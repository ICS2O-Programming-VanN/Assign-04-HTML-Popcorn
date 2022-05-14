
// Activates Strict Mode
"use strict";

// This Function takes in the user's choices of popcorn a outputs back the price of their order
function displayCost() {
  // Constants (Prices and Tax/HST)
  const HST = 0.13;
  const TOPPING_COST = 3.99;
  const SMALL_COST = 5.79;
  const MEDIUM_COST = 7.99;
  const LARGE_COST = 10.59;
  const EXTRA_LARGE_COST = 14.59;
  const SODA_COST = 2.17;
  const MAGIC_MILK_COST = 15.99;
  const FLAVOURED_POPCORN_COST = 2.00;
  const PLAIN_POPCORN_COST = 1.00;
  
  // Iniatializes Variable
  let subtotal = 0;
  let sizeCost = 0;
  let drinkCost = 0;
  let flavourCost = 0;
  
  // Input for Size Selection
  let sizeSelection = document.getElementById('size');
	let size = sizeSelection.options[sizeSelection.selectedIndex].value;

  // Input for Flavour Selection
  let flavourSelection = document.getElementById('flavour');
	let flavour = flavourSelection.options[flavourSelection.selectedIndex].value;

  // Toppings Cost and Input for Toppings
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let numToppings = checkboxes.length;
  let costToppings = numToppings * TOPPING_COST;

  // Input for Drink Selection
  let drink = document.querySelector('input[name="drink"]:checked').value;
  
  // IF user selected the Small Size
  if (size == "Small") {
    sizeCost = SMALL_COST
    // IF user selected the Medium Size
  } else if (size == "Medium") {
    sizeCost = MEDIUM_COST
    // IF user selected the Large Size
  } else if (size == "Large") {
    sizeCost = LARGE_COST
    // IF user selected the Extra Large Size
  } else {
    sizeCost = EXTRA_LARGE_COST
  }

  // If the user chose a popcorn flavour
  if (flavour == "Cheesy Dill" || flavour == "Jalapeno Jack" || flavour == "Salt and Vinegar"
      || flavour == "Buttersalt" || flavour == "Whalin' White Cheese") {
    flavourCost = FLAVOURED_POPCORN_COST
    // If the user chose the plain popcorn flavour
  } else {
    flavourCost = PLAIN_POPCORN_COST
  }

  // Assigns cost of drink IF user selected pepsi, ginger ale or nestea
  if (drink == "pepsi" || drink == "ginger-ale" || drink == "nestea") {
    drinkCost = SODA_COST
    // Assigns cost of drink IF user selected Van's Magic Milk
  } else if (drink == "magic-milk") {
    drinkCost = MAGIC_MILK_COST
    // If the user chose no side drink
  } else {
    drinkCost = 0
  }

  // Calculations for Subtotal, Tax and the true total
  subtotal = sizeCost + costToppings + drinkCost + flavourCost
  let tax = subtotal * HST;
  let total = subtotal + tax;

  // Displaying the totals to the screen
  document.getElementById("subtotal").innerHTML = "Your subtotal is $" + subtotal.toFixed(2)
  document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
  document.getElementById("total").innerHTML = "Your total is $" + total.toFixed(2)
  document.getElementById("message").innerHTML = "Enjoy your " + flavour.toUpperCase() + " flavoured Popcorn!"
}