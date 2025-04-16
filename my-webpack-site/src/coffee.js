export function loadCoffee() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    const sections = [
        {
            header: 'Espresso',
            paragraph: 'Espresso is a concentrated coffee brewed by forcing hot water through finely-ground coffee beans.',
            imageSrc: 'images/espresso.jpg',
            imageAlt: 'A cup of espresso'
        },
        {
            header: 'Latte',
            paragraph: 'A latte is a coffee drink made with espresso and steamed milk, often topped with foam.',
            imageSrc: 'images/latte.jpg',
            imageAlt: 'A cup of latte'
        },
        {
            header: 'Cappuccino',
            paragraph: 'A cappuccino is a coffee drink that consists of espresso, steamed milk, and milk foam.',
            imageSrc: 'images/cappuccino.jpg',
            imageAlt: 'A cup of cappuccino'
        }
    ];


    //Loop through each array of sections
    sections.forEach(section => {
        const header = document.createElement('h2');
        header.textContent = section.header;
        const paragraph = document.createElement('p');
        paragraph.textContent = section.paragraph;
        const image = document.createElement('img');
        image.src = section.imageSrc;
        image.alt = section.imageAlt;
        const sectionDiv = document.createElement('div');
        sectionDiv.appendChild(header);
        sectionDiv.appendChild(paragraph);
        sectionDiv.appendChild(image);
        content.appendChild(sectionDiv);
    })



















}