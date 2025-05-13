export function loadBakeryPage() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    // Hero Section
    const hero = document.createElement('section');
    hero.classList.add('section-hero', 'bakery-hero');

    const heroTitle = document.createElement('h1');
    heroTitle.innerText = "Baked Goods";

    const heroTagline = document.createElement('p');
    heroTagline.innerText = "Freshly Made • Locally Loved • Always Sweet";

    hero.appendChild(heroTitle);
    hero.appendChild(heroTagline);
    content.appendChild(hero);

    // Card Section
    const bakeryContainer = document.createElement('div');
    bakeryContainer.classList.add('card-container');

    const bakerySections = [
        {
            title: 'Croissant',
            description: 'Flaky, buttery, and baked fresh every morning.',
            price: '$3.75',
            imageUrl: 'https://images.unsplash.com/photo-1723532108634-4bacae8aef26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Blueberry Muffin',
            description: 'Bursting with blueberries and just the right sweetness.',
            price: '$3.25',
            imageUrl: 'https://images.unsplash.com/photo-1668095736406-7078568e66f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVmZmluJTIwYW5kJTIwY29mZmVlfGVufDB8MHwwfHx8MA%3D%3D',
        },
        {
            title: 'Banana Bread',
            description: 'Moist, rich, and a cozy classic.',
            price: '$4.00',
            imageUrl: 'https://images.unsplash.com/photo-1675712841671-cbcbe2c84103?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    ];

    bakerySections.forEach(section => {
        const card = document.createElement('div');
        card.classList.add('card', 'bakery-card');

        const image = document.createElement('img');
        image.src = section.imageUrl;
        image.alt = `${section.title} Image`;

        const title = document.createElement('h3');
        title.textContent = section.title;

        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = section.price;

        const description = document.createElement('p');
        description.textContent = section.description;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(description);

        bakeryContainer.appendChild(card);
    });

    content.appendChild(bakeryContainer);
}
