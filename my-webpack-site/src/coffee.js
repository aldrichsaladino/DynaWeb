export function loadCoffee() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    const teaSections = [
        {
            header: 'Black Tea',
            paragraph: 'Rich in flavor and caffeine, our black tea is perfect for a morning boost.',
            price: '$3.50',
            imageSrc: 'images/black-tea.jpg',
            imageAlt: 'A cup of black tea'

        },
        {
            header: 'Green Tea',
            paragraph: 'A refreshing and healthy choice, our green tea is packed with antioxidants.',
            price: '$3.50',
            imageSrc: 'images/green-tea.jpg',
            imageAlt: 'A cup of green tea'
        },
        {
            header: 'Herbal Tea',
            paragraph: 'Our herbal tea selection offers a variety of caffeine-free options for relaxation.',
            price: '$3.50',
            imageSrc: 'images/herbal-tea.jpg',
            imageAlt: 'A cup of herbal tea'

        },
        {
            header: 'White Tea',
            paragraph: 'Delicate and light, our white tea is a subtle choice for any time of day.',
            price: '$3.50',
            imageSrc: 'images/white-tea.jpg',
            imageAlt: 'A cup of white tea'
        },
    ]

    teaSections.forEach(section => {
        const header = document.createElemeent('h2');
        const paragraph = document.createElement('p');
        const image = document.createElement('img');
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('tea-section'); // Add a class for styling

        header.textContent = section.header;
        paragraph.textContent = section.paragraph;
        image.src = section.imageSrc;
        image.alt = section.imageAlt;
        sectionDiv.appendChild(header);
        sectionDiv.appendChild(paragraph);
        sectionDiv.appendChild(image);
        content.appendChild(sectionDiv);


    })

    const coffeeSections = [
        {
            header: 'Espresso',
            paragraph: 'Espresso is a concentrated coffee brewed by forcing hot water through finely-ground coffee beans.',
            price: '$4.50',
            imageSrc: 'images/espresso.jpg',
            imageAlt: 'A cup of espresso'
        },
        {
            header: 'Latte',
            paragraph: 'A latte is a coffee drink made with espresso and steamed milk, often topped with foam.',
            price: '$4.50',
            imageSrc: 'images/latte.jpg',
            imageAlt: 'A cup of latte'
        },
        {
            header: 'Cappuccino',
            paragraph: 'A cappuccino is a coffee drink that consists of espresso, steamed milk, and milk foam.',
            price: '$4.50',
            imageSrc: 'images/cappuccino.jpg',
            imageAlt: 'A cup of cappuccino'
        }
    ];


    //Loop through each array of sections
    coffeeSections.forEach(section => {
        const header = document.createElement('h2');
        header.textContent = section.header;
        const paragraph = document.createElement('p');
        paragraph.textContent = section.paragraph;
        const image = document.createElement('img');
        image.src = section.imageSrc;
        image.alt = section.imageAlt;
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('coffee-section'); // Add a class for styling
        sectionDiv.appendChild(header);
        sectionDiv.appendChild(paragraph);
        sectionDiv.appendChild(image);
        content.appendChild(sectionDiv);
    })
}