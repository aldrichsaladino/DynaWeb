export function loadCoffeePage () {
    const content = document.getElementById('content')
    content.innerHTML = "";
    content.className = ''; // clear previous hero class
    content.classList.add('coffee-hero');

    //Need to add HERO section for coffee for background image
    const hero = document.createElement('section');
    hero.classList.add('section-hero');

    const title = document.createElement('h1');
    title.innerText = "Coffee & Tea";

    const tagline = document.createElement('p');
    tagline.innerText = "Our best brews, crafted to perfection";

    hero.appendChild(title);
    hero.appendChild(tagline);
    content.appendChild(hero);


    //Create a wrapper div for the coffee sections
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container', 'coffee-section');

    const coffeeSections = [
        {
            title: 'Sweet Hearth',
            description: 'Brew of the Month • Honduras | Medium',
            price: '12 oz | $17.95',
            imageUrl: 'https://via.placeholder.com/300x300?text=Sweet+Hearth',
        },
        {
            title: 'Costa Rica',
            description: 'Costa Rica | Medium',
            price: '12 oz | $20.95',
            imageUrl: 'https://via.placeholder.com/300x300?text=Costa+Rica',
        },
        {
            title: 'Velvet Blaze',
            description: 'Blend | Medium',
            price: '12 oz | $17.95',
            imageUrl: 'https://via.placeholder.com/300x300?text=Velvet+Blaze',
        },
    ]

    coffeeSections.forEach(section => {
        const card = document.createElement('div');
        card.classList.add('card', 'coffee-card'); // 👈 Add a modifier class


        const image = document.createElement('img');
        image.src = section.imageUrl;
        image.alt = `${section.title} Image`;

        const title = document.createElement('h3');
        title.innerText = section.title;

        const price = document.createElement('p');
        price.innerText = section.price;
        price.classList.add('price');

        const description = document.createElement('p');
        description.innerText = section.description;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(description);

        card.addEventListener('click', () => {
            alert(`You clicked on ${section.title}`);
        });
        
        card.style.cursor = 'pointer';
        cardContainer.appendChild(card);
        

        cardContainer.appendChild(card);
    });

    content.appendChild(cardContainer);
}