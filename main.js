size.forEach((item) => {
  if (item.checked) {
    sizeResult = item.id;
  }
});

switch (sizeResult) {
  case "size2":
    price += 7.5;
    break;
  case "size4":
    price += 10.5;
    break;
  case "size6":
    price += 12.5;
    break;
  case "size8":
    price += 15.5;
    break;
};

order_price.textContent = price
)
