const formElement = document.querySelector("[data-form]");
const orderButtonElement = document.querySelector("#submit-button");

/* 

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  // by data



  const priceOfToppingElement = document.querySelectorAll(
    "[data-topping]:checked"
  );




}); */

const pizzaOrder = (e) => {
  e.preventDefault();
  //correction
  const customerNameElement = document.querySelector("[data-customer-name]");
  //correction
  const priceOfDeliveryElement = document.querySelector("[data-delivery-mode]");
  //correction
  const bill = document.querySelector("#final-order-bill");
  //correction
  const priceOfPizzaElement = document.querySelector(
    "[data-pizza-size]:checked"
  );
  //correction
  const priceOfToppingElement = document.querySelectorAll(
    "[data-topping]:checked"
  );

  let customerName = customerNameElement.value;
  //correction
  //let sizeResult = "";
  let toppingResult = [];
  let price = 0;
  let deliveryResult =
    priceOfDeliveryElement.options[priceOfDeliveryElement.selectedIndex].value;

  //correction
  price += Number(priceOfPizzaElement.value);

  //correction
  /*   sizeResult.forEach((item) => {
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
  } */

  //correction
  priceOfToppingElement.forEach((item) => {
    toppingResult.push(item.value);
  });
  if (toppingResult.length > 4) {
    price += (toppingResult.length - 4) * 0.5;
  }

  if (priceOfDeliveryElement.value === "5") {
    price += 5;
  }
  bill.textContent = price.toFixed(2);
};
formElement.addEventListener("submit", pizzaOrder);
