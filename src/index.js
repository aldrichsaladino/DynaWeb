//import js
import { loadAboutPage } from "./about.js";
import { loadBakeryPage } from "./bakery.js";
import { loadHomePage } from "./home.js";
import { loadCoffeePage } from "./coffee.js";

//import the css
import './styles.css';
//buttons
document.getElementById("about").addEventListener("click", loadAboutPage);
document.getElementById("bakery").addEventListener("click", loadBakeryPage);
document.getElementById("home").addEventListener("click", loadHomePage);
document.getElementById("coffee").addEventListener("click", loadCoffeePage);

//import logos
import brownLogo from './assets/brewline-logo-brown.png';
import whiteLogo from './assets/brewline-logo-white.png';

document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.querySelector(".logo");

    const imgDefault = document.createElement("img");
    imgDefault.src = whiteLogo;
    imgDefault.className = "logo-default";
    imgDefault.alt = "Brewline Coffee Club Logo";

    const imgHover = document.createElement("img");
    imgHover.src = brownLogo;
    imgHover.className = "logo-hover";
    imgHover.alt = "Brewline Coffee Club hover";

    logoContainer.appendChild(imgDefault);
    logoContainer.appendChild(imgHover);
});


//default page
loadHomePage();