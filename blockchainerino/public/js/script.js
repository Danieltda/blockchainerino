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

update();

//function to update the total value
// Current price times the crypto amount
function totalValue() {
  let currentPrice = document.getElementById("current-price").value;
  console.log(currentPrice);
  let cryptoAmount = document.getElementById("total-amount").value;
  console.log(cryptoAmount);
  document.getElementById("total-value").value = currentPrice * cryptoAmount;
}

//Created a hamburger menu
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

//Get user input from the index ethereum
function getEthereumAddress() {
  let input = document.getElementById("ethereum-input").value;
  totalEthereumAmount(input);
  console.log(input);
}

//Show total value
function totalEthereumAmount(input) {
  let inputTotal = (document.getElementById("total-amount").value = input);
  console.log(inputTotal);
}
