document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("blockchainerino JS imported successfully!");
    update();
  },
  false
);

//update current price based on coin
function update() {
  const select = document.getElementById("coinname");
  const options = select.options;

  const index = [...options].find((element) => {
    return element.value === select.value;
  });

  const currentPrice = document.getElementById("current-price");

  currentPrice.value = index.dataset.coinvalue;
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
