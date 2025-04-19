
// Import the JavaScript files
import { loadHome } from "./home";
import { loadAbout } from "./about";
import { loadBaking } from "./baking";
import { loadCoffee } from "./coffee";


// Button click event listeners for each tab/ js file
document.getElementById("home").addEventListener("click", loadHome)
document.getElementById("about").addEventListener("click", loadAbout)
document.getElementById("baking").addEventListener("click", loadBaking)
document.getElementById("coffee").addEventListener("click", loadCoffee)



// default load
loadHome();