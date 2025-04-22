export function loadAboutPage() {
    const content = document.getElementById('content'); // 🔄 FIX: get existing content div
    content.innerHTML = ''; // Clear previous content

    const header = document.createElement('h1');
    header.innerText = 'About Us';

    const paragraph = document.createElement('p');
    paragraph.innerText = 'We are a company that values excellence and innovation.';

    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/150';
    image.alt = 'Placeholder Image';

    const button = document.createElement('button');
    button.innerText = 'Learn More';
    button.onclick = function () {
        alert('More information about us.');
    };

    content.appendChild(header);
    content.appendChild(paragraph);
    content.appendChild(image);
    content.appendChild(button);
}
