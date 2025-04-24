export function loadHomePage (){
    const content = document.getElementById('content')
    content.innerHTML = "";

    const brewOfTheMonth = document.createElement('div');
    brewOfTheMonth.classList.add('brewMonth');
    brewOfTheMonth.innerHTML = `
        <h1>Brew of the Month</h1>
        <p>Discover our featured brew of the month, handpicked for you!</p>
        <img src="https://via.placeholder.com/150" alt="Brew of the Month">
    `;
    content.appendChild(brewOfTheMonth);

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
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('homeSection');

        const title = document.createElement('h2');
        title.innerText = section.title;

        const description = document.createElement('p');
        description.innerText = section.description;

        const image = document.createElement('img');
        image.src = section.imageUrl;
        image.alt = `${section.title} Image`;

        sectionDiv.appendChild(title);
        sectionDiv.appendChild(description);
        sectionDiv.appendChild(image);

        //append the section to the content div
        content.appendChild(sectionDiv);
    })
}