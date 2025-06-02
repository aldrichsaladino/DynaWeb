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
    
        { type: "heading", title: "Espresso Drinks 🧋" }, // ✅ Added
    
        {
            title: 'Classic Latte',
            description: 'Espresso with steamed milk',
            price: '12 oz | $4.75',
            imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
        },
        {
            title: 'Cappuccino',
            description: 'Espresso with foamed milk',
            price: '8 oz | $4.50',
            imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1170&auto=format&fit=crop',
        },
        {
            title: 'Iced Caramel Macchiato',
            description: 'Espresso layered over milk and caramel',
            price: '16 oz | $5.25',
            imageUrl: 'https://images.unsplash.com/photo-1586480611834-bf74e425fee9?q=80&w=1170&auto=format&fit=crop',
        },
    
        { type: "heading", title: "Teas 🍵" }, // ✅ Added
    
        {
            title: 'Matcha Latte',
            description: 'Premium Japanese matcha with steamed milk',
            price: '12 oz | $5.00',
            imageUrl: 'https://images.unsplash.com/photo-1617957742160-d8cfb59a227e?q=80&w=1170&auto=format&fit=crop',
        },
        {
            title: 'Chai Latte',
            description: 'Spiced chai tea with steamed milk',
            price: '12 oz | $4.75',
            imageUrl: 'https://images.unsplash.com/photo-1615551041256-24f5eab83546?q=80&w=1170&auto=format&fit=crop',
        },
        {
            title: 'Earl Grey Tea',
            description: 'Black tea with bergamot aroma',
            price: '12 oz | $3.25',
            imageUrl: 'https://images.unsplash.com/photo-1608889175123-38e3eeea7463?q=80&w=1170&auto=format&fit=crop',
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
    
}
