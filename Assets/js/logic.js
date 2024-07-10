
// toggle switch 
const themeSwitcher = document.querySelector("#themeSwitcher");
const body = document.querySelector("body");
const footer = document.querySelector("footer");

// Dark Mode
let mode = "dark";

// Listen event 
themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    body.setAttribute("class", "light");
  }
  // If light make dark
  else {
    mode = "dark";
    body.setAttribute("class", "dark");
  }
});