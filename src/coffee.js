export function loadCoffeePage() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    // Clear previous hero styles from #content
    content.className = '';

    // Create the hero section with both base and coffee-specific classes
    const hero = document.createElement('section');
    hero.classList.add('section-hero', 'coffee-hero');

    const title = document.createElement('h1');
    title.innerText = "Coffee & Tea";

    const tagline = document.createElement('p');
    tagline.innerText = "Our best brews, crafted to perfection";

    hero.appendChild(title);
    hero.appendChild(tagline);
    content.appendChild(hero);

    // Create a wrapper div for the coffee sections
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container', 'coffee-section');

    const coffeeSections = [
        {
            title: 'Sweet Hearth',
            description: 'Brew of the Month • Honduras | Medium',
            price: '12 oz | $17.95',
            imageUrl: 'https://images.unsplash.com/photo-1530496216518-a53d24e99c31?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 🔁 Updated
        },
        {
            title: 'Costa Rica',
            description: 'Costa Rica | Medium',
            price: '12 oz | $20.95',
            imageUrl: 'https://images.unsplash.com/photo-1631639801103-980b04eef880?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 🔁 Updated
        },
        {
            title: 'Velvet Blaze',
            description: 'Blend | Medium',
            price: '12 oz | $17.95',
            imageUrl: 'https://images.unsplash.com/photo-1488667499475-42a530fab02b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 🔁 Updated
        },
    ];

    coffeeSections.forEach(section => {
        const card = document.createElement('div');
        card.classList.add('card', 'coffee-card');

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

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            alert(`You clicked on ${section.title}`);
        });

        cardContainer.appendChild(card); // ✅ Append only once
    });

    content.appendChild(cardContainer);
}
