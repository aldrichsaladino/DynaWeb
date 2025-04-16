export function loadHome() {
    var content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content
    // Create and append new content
    var heading = document.createElement("h1");
    heading.textContent = "Home Page";
    content.appendChild(heading);
}