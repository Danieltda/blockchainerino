document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("blockchainerino JS imported successfully!");
  },
  false
);

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

// //Get user input from the index ethereum
// function getEthereumAddress() {
//   let input = document.getElementById("ethereum-input").value;
//   totalEthereumAmount(input);
//   console.log(input);
// }

// //Show total value
// function totalEthereumAmount(input) {
//   let inputTotal = (document.getElementById("total-amount").value = input);
//   console.log(inputTotal);
// }
