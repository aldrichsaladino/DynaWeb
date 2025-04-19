export function loadBaking () {
    const content = document.getElementById('content');
    content.innerHTML = ""; // Clear previous content

    const sections = [
        {
            header: 'Bread',
            paragraph: 'Bread is a staple food prepared from a dough of flour and water.',
            imageSrc: 'images/bread.jpg',
            imageAlt: 'A loaf of bread'

        },
        {
            header: 'Cookies',
            paragraph: 'Cookies are sweet baked treats that come in various flavors.',
            imageSrc: 'images/cookies.jpg',
            imageAlt: 'A plate of cookies'
        },
        {
            header: 'Cakes',
            paragraph: 'Cakes are sweet baked desserts, often layered and frosted.',
            imageSrc: 'images/cake.jpg',
            imageAlt: 'A slice of cake'
        }        
    ];

    // loop through the sections array and create elements for each section
    sections.forEach(section => {
        const header = document.createElement('h2');
        header.textContent = section.header;
        const paragraph = document.createElement('p');
        paragraph.textContent = section.paragraph;
        const image = document.createElement('img');
        image.src = section.imageSrc;
        image.alt = section.imageAlt;
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('baking-section'); // Add a class for styling
        
        // Append the header, paragraph, and image to the sectionDiv
        sectionDiv.appendChild(header);
        sectionDiv.appendChild(paragraph);
        sectionDiv.appendChild(image);
        content.appendChild(sectionDiv);
    })
}