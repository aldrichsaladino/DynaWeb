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
        
        { type: "heading", title: "Espresso Drinks ☕ (Hot / Iced)" },

        {
            title: 'Espresso',
            description: 'Pure concentrated coffee shot',
            price: '1 oz | $2.50',
            imageUrl: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Americano',
            description: 'Espresso with hot water for a mellow flavor',
            price: '8 oz | $3.50',
            imageUrl: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Classic Latte',
            description: 'Espresso with steamed milk',
            price: '12 oz | $4.75',
            imageUrl: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Cappuccino',
            description: 'Espresso with foamed milk',
            price: '8 oz | $4.50',
            imageUrl: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Flat White',
            description: 'Espresso with microfoam milk, smoother than a latte',
            price: '6 oz | $5.00',
            imageUrl: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Cortado',
            description: 'Equal parts espresso and steamed milk for a smooth, balanced taste',
            price: '4 oz | $4.25',
            imageUrl: 'https://images.unsplash.com/photo-1519532059956-a63a37af5deb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Macchiato',
            description: 'Espresso with a small amount of foam',
            price: '2 oz | $3.00',
            imageUrl: 'https://images.unsplash.com/photo-1570517130750-10c67ffdde09?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Mocha',
            description: 'Espresso with steamed milk and chocolate syrup',
            price: '12 oz | $5.00',
            imageUrl: 'https://images.unsplash.com/photo-1618576230663-9714aecfb99a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Cold Brew',
            description: 'Slow-brewed coffee served cold, smooth and less acidic',
            price: '16 oz | $4.75',
            imageUrl: 'https://images.unsplash.com/photo-1565990436705-4bc429d16511?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Nitro Cold Brew',
            description: 'Cold brew infused with nitrogen for a smooth, creamy texture',
            price: '16 oz | $5.25',
            imageUrl: 'https://images.unsplash.com/photo-1644764399224-f7d18b1e8d1c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    
        { type: "heading", title: "Teas 🍵 (Hot / Iced)" }, // ✅ Added
    
        {
            title: 'Matcha Latte',
            description: 'Premium Japanese matcha with steamed milk',
            price: '12 oz | $5.00',
            imageUrl: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Chai Latte',
            description: 'Spiced chai tea with steamed milk',
            price: '12 oz | $4.75',
            imageUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Earl Grey Tea',
            description: 'Black tea with bergamot aroma',
            price: '12 oz | $3.25',
            imageUrl: 'https://images.unsplash.com/photo-1498604636225-6b87a314baa0?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        
        { type: "heading", title: "Coffee Bags ☕" }, // ✅ Added
    
        {
            title: 'Sweet Hearth',
            description: 'Brew of the Month • Honduras | Medium',
            price: '12 oz | $17.95',
            imageUrl: 'https://images.unsplash.com/photo-1530496216518-a53d24e99c31?q=80&w=1332&auto=format&fit=crop',
        },
        {
            title: 'Costa Rica',
            description: 'Costa Rica | Medium',
            price: '12 oz | $20.95',
            imageUrl: 'https://images.unsplash.com/photo-1631639801103-980b04eef880?q=80&w=1170&auto=format&fit=crop',
        },
        {
            title: 'Velvet Blaze',
            description: 'Blend | Medium',
            price: '12 oz | $17.95',
            imageUrl: 'https://images.unsplash.com/photo-1488667499475-42a530fab02b?q=80&w=1170&auto=format&fit=crop',
        },
    
    ];
    

    coffeeSections.forEach(section => {
        if (section.type === "heading") {
            const heading = document.createElement('h2');
            heading.innerText = section.title;
            heading.classList.add('section-subtitle'); // Add this class to your CSS
            cardContainer.appendChild(heading);
            return;
        }
    
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
    
        cardContainer.appendChild(card);
    });
    
    content.appendChild(cardContainer);

}
