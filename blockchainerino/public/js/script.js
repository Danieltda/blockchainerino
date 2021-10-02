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
  var option = select.options[select.selectedIndex];
  console.log(option);
  document.getElementById("coinname").value = option.value;
  document.getElementById("current-price").value = select.value;
}

//function to update the total value
// Current price times the crypto amount
function totalValue() {
  let currentPrice = document.getElementById("current-price").value;
  console.log(currentPrice);
  let cryptoAmount = document.getElementById("total-amount").value;
  console.log(cryptoAmount);
  document.getElementById("total-value").value = currentPrice * cryptoAmount;
}
