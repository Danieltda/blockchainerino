document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("blockchainerino JS imported successfully!");
  },
  false
);

//update current price based on coin
var select = document.getElementById("coinname");
var value = select.options[select.selectedIndex].text;
console.log(value);

function update() {
  var select = document.getElementById("coinname");
  var option = select.options[select.selectedIndex];

  document.getElementById("coinname").value = option.text;
  document.getElementById("current-price").value = option.text;
}

update();
