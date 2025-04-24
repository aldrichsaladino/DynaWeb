export function loadBakeryPage() {
    const content = document.getElementById('content')
    content.innerHTML = "";

    const bakerySections = [
        {
            title: 'Pastries',
            description: 'This is the first bakery section.',
            imageUrl: 'https://via.placeholder.com/150',

        },
        {
            title: 'Bakery Section 2',
            description: 'This is the second bakery section.',
            imageUrl: 'https://via.placeholder.com/150',

        },
        {
            title: 'Bakery Section 3',
            description: 'This is the third bakery section.',
            imageUrl: 'https://via.placeholder.com/150',
        }


    ]

    bakerySections.forEach(section=> {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('bakerySection');

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