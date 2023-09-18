const formElement = document.querySelector("[data-form]");
//const finalOrderBillElement = document.querySelector("#final-order-bill");
const orderButtonElement = document.querySelector("#submit-button");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  const customerNameElement = document.querySelector("[data-customer-name]"); // by data

  const priceOfPizzaElement = document.querySelector(
    "[data-pizza-size]:checked"
  );

  const priceOfToppingElement = document.querySelectorAll(
    "[data-topping]:checked"
  );

  const priceOfDeliveryElement = document.querySelector("[data-delivery-mode]");

  const bill = document.querySelector("#final-order-bill");
});

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
    case "size2":
      price += 7.5;
      break;

    case "size4":
      price += 19.5;
      break;

    case "size6":
      price += 12.5;
      break;

    case "size8":
      price += 15.5;
      break;
  }

  toppingResult.forEach((item) => {
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
  bill.textContent = price.toFixed(2);
};
formElement.addEventListener("input", pizzaOrder);
