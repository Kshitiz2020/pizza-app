const formElement = document.querySelector("[data-form]");
const finalOrderBillElement = document.querySelector("#final-order-bill");
const orderButtonElement = document.querySelector("#submit-button");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  const customerNameElement = document.querySelector("[data-customer-name]"); // by data
  console.log(customerNameElement.value);

  const priceOfPizzaElement = document.querySelector(
    "[data-pizza-size]:checked"
  );
  console.log(priceOfPizzaElement.value);

  const priceOfToppingElement = document.querySelectorAll(
    "[data-topping]:checked"
  );
  console.log(priceOfToppingElement.length);

  const priceOfDeliveryElement = document.querySelector("[data-delivery-mode]");
  console.log(priceOfDeliveryElement.value);
});

/* let totalPrice = 0;
function price() {
  if (value === 2) {
    price = 7.5;
  } else if (value === 4) {
    price = 10.5;
  } else if (value === 6) {
    price = 12.5;
  } else if (value === 8) {
    price = 15.5;
  } else {
    alert('choose the size of pizza')
  }
}

function toppingPrice() {
  if ()
}
 */
