export function loadAboutPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    // HERO
    const hero = document.createElement('section');
    hero.classList.add('section-hero', 'about-hero');
  
    const heroTitle = document.createElement('h1');
    heroTitle.innerText = 'About Us';
    const heroTagline = document.createElement('p');
    heroTagline.innerText = 'Rooted in Craft • Built on Passion • Serving Community';
  
    hero.appendChild(heroTitle);
    hero.appendChild(heroTagline);
    content.appendChild(hero);
  
    // ABOUT CONTENT
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
  
    const paragraph = document.createElement('p');
    paragraph.innerText = 'At Brewline Coffee Club, we believe in blending rich tradition with bold creativity. Our mission is to craft exceptional coffee experiences that bring people together — one cup at a time.';
  
    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/300x200';
    image.alt = 'Our Coffee Story';
  
    const button = document.createElement('button');
    button.classList.add('explore-button');
    button.innerText = 'Learn More';
    button.onclick = () => alert('More info coming soon!');
  
    aboutContainer.appendChild(paragraph);
    aboutContainer.appendChild(image);
    aboutContainer.appendChild(button);
  
    content.appendChild(aboutContainer);
  }
  