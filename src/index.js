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

//default page
loadHomePage();