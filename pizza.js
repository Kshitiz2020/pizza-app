/* const formElement = document.querySelector("[data-form]");
const finalOrderBillElement = document.querySelector("#final-order-bill");
const orderButtonElement = document.querySelector("#submit-button");
 */

const formElement = document.querySelector("[data-form]");
const finalOrderBillElement = document.querySelector("#final-order-bill");
const sizeOptions = document.querySelectorAll('input[type="radio"]');
const customerNameElement = document.querySelector("#nam");
const priceOfToppingElement = document.querySelectorAll(
  'input[type="checkbox"]'
);
const priceOfDeliveryElement = document.querySelector("#deliveryMethod");

/* const bill = document.querySelector("#final-order-bill");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();*/

//const customerNameElement = document.querySelector("[data-customer-name]"); // by data

//const priceOfPizzaElement = document.querySelector(
//  "[data-pizza-size]:checked"
//);

//const priceOfToppingElement = document.querySelectorAll(
/*   "[data-topping]:checked"
  );

  ////const priceOfDeliveryElement = document.querySelector("[data-delivery-mode]");
}); */

const pizzaOrder = () => {
  let customerName = customerNameElement.value;
  let sizeResult = "";
  let toppingResult = [];
  let price = 0;
  let deliveryResult =
    priceOfDeliveryElement.options[priceOfDeliveryElement.selectedIndex].value;

  sizeResult.forEach((item) => {
    if (item.checked) {
      sizeResult = item.id;
    }
  });

  switch (sizeResult) {
    case "radio1":
      price += 7.5;
      break;

    case "radio2":
      price += 19.5;
      break;

    case "radio3":
      price += 12.5;
      break;

    case "radio4":
      price += 15.5;
      break;
  }

  priceOfToppingElement.forEach((item) => {
    if (item.checked) {
      toppingResult.push(item.value);
    }
  });
  if (toppingResult.length > 4) {
    price += (toppingResult.length - 4) * 0.5;
  }

  if (deliveryResult === 5) {
    price += 5;
  }
  finalOrderBillElement.textContent = price.toFixed(2);
};
formElement.addEventListener("submit", pizzaOrder);
