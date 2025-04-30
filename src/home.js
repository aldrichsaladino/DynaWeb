export function loadHomePage (){
    const content = document.getElementById('content')
    content.innerHTML = ""; //clears previous content

    //Hero Section
    const hero = document.createElement('section');
    hero.classList.add('hero');

    const heroTitle = document.createElement('h1');
    heroTitle.innerText = "Brewline Coffee Club"

    const heroTagline = document.createElement('p');
    heroTagline.innerText = "Crafted Blends • Cozy Vibes • Your Daily Brew"

    const exploreButton = document.createElement('button');
    exploreButton.textContent = "Shop our Coffee";
    exploreButton.classList.add('explore-button');
    exploreButton.onclick = function () {
        alert('Explore our coffee selection!');
    };

    //Append hero content
    hero.appendChild(heroTitle);
    hero.appendChild(heroTagline);
    hero.appendChild(exploreButton);

    //Append hero to content div
    content.appendChild(hero);

    //Cards Section
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const homeSections = [
        {
            title: 'Our Staple Roasts',
            description: 'Explore our best roasts for any occasion.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Bakery Anyone?',
            description: 'Freshly made to kickstart your morning, or settle your way into the afternoon.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Placeholder 3',
            description: '.',
            imageUrl: 'https://via.placeholder.com/150',
        }
    ]

    homeSections.forEach(section => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = section.imageUrl;
        image.alt = `${section.title} Image`;

        const title = document.createElement('h3');
        title.textContent = section.title;

        const description = document.createElement('p');
        description.textContent = section.description;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);

        //Append the card to the card container
        cardContainer.appendChild(card);
    })

    //Append the card container to the content div
    content.appendChild(cardContainer);
}