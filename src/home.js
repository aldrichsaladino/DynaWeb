export function loadHomePage (){
    const content = document.getElementById('content')
    content.innerHTML = ""; //clears previous content

    //Hero Section
    const hero = document.createElement('section');
    hero.classList.add('section-hero', 'home-hero'); // background image for home
    
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
            imageUrl: 'https://images.unsplash.com/photo-1646325742177-21f298f470c6?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Bakery Anyone?',
            description: 'Freshly made to kickstart your morning, or settle your way into the afternoon.',
            imageUrl: 'https://images.unsplash.com/photo-1745950099402-6fb5625d534b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Locations',
            description: 'Multiple locations to serve you better.',
            imageUrl: 'https://images.unsplash.com/photo-1633524418541-4390f0fbeca9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navButtons = document.querySelector(".nav-buttons");
  
    hamburger.addEventListener("click", () => {
      navButtons.classList.toggle("show");
    });
  
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  
    // Optional: close menu when clicking a nav item
    document.querySelectorAll(".nav-buttons button").forEach(btn => {
      btn.addEventListener("click", () => {
        navButtons.classList.remove("show");
      });
    });
  });
  