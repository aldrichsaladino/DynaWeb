export function loadCoffeePage () {
    const content = document.getElementById('content')
    content.innerHTML = "";

    const coffeeSections = [
        {
            title: 'Coffee Section 1',
            description: 'This is the first coffee section.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Coffee Section 2',
            description: 'This is the second coffee section.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Coffee Section 3',
            description: 'This is the third coffee section.',
            imageUrl: 'https://via.placeholder.com/150',
        }
    ]

    coffeeSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('coffee-section');

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
    const coffeeSection = document.createElement('div');   
    coffeeSection.classList.add('coffee-section');
}