export function loadHome() {
    var content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content
    // Create and append new content
    var heading = document.createElement("h1");
    heading.textContent = "Home Page";

    var image = document.createElement("img");
    image.src = "https://sdmntprwestus.oaiusercontent.com/files/00000000-b764-6230-8e25-efa1c5d11696/raw?se=2025-04-18T07%3A12%3A56Z&sp=r&sv=2024-08-04&sr=b&scid=aaa4c954-f63b-5e1a-af44-525dcceb4dc0&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-18T00%3A46%3A16Z&ske=2025-04-19T00%3A46%3A16Z&sks=b&skv=2024-08-04&sig=opL1cwpZJkmWomqXZJXlcidgDFqD16z6GftWHHQagnM%3D";
    image.alt = "Placeholder Image";
    var paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to the home page of my awesome website!";
    var section = document.createElement("section");
    section.classList.add("home-section"); // Add a class for styling

    //append all items to section
    section.append(heading, paragraph, image)


    //Append section to content
    content.appendChild(section);

}   