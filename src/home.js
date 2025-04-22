export function loadHomePage (){
    const content = document.getElementById('content')
    content.innerHTML = "";

    const homeSections = [
        {
            title: 'Home Section 1',
            description: 'This is the first home section.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Home Section 2',
            description: 'This is the second home section.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Home Section 3',
            description: 'This is the third home section.',
            imageUrl: 'https://via.placeholder.com/150',
        }
    ]

    homeSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('home-section');

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