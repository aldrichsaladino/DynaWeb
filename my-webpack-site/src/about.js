export function loadAbout() {
    var content = document.getElementById("content")
        content.innerHTML = "" // Clear previous content
    var heading = document.createElement("h1")
        heading.textContent = "About Us"
        content.appendChild(heading)
    var paragraph = document.createElement("p")
        paragraph.textContent = "This is the about page of my awesome website."
        content.appendChild(paragraph)
    var image = document.createElement("img")
        image.src = "https://via.placeholder.com/150"
        image.alt = "Placeholder Image"
        content.appendChild(image)
    var paragraph2 = document.createElement("p")
        paragraph2.textContent = "This is the second paragraph of the about page."
        content.appendChild(paragraph2)





}