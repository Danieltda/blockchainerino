document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("blockchainerino JS imported successfully!");
  },
  false
);

//update current price based on coin
function update() {
  var select = document.getElementById("coinname");
  console.log(select);
  // var select1 = document.getElementById("price");
  // console.log(select1);
  var option = select.options[select.selectedIndex];
  console.log(option);
  // var option1 = select1.options[select1.selectedIndex].value;
  // console.log(option1);
  // var price = document.getElementById("price").value;
  // console.log(price);

  let coinName = (document.getElementById("coinname").value = option.value);
  let currentPrice = (document.getElementById("current-price").value =
    select.value);
}

update();

//function to update the total value
// Current price times the crypto amount
function totalValue(coinPrice, totalAmount) {
  let totalValue = document.getElementById("total-value");

  totalValue = coinPrice * totalAmount;
}
