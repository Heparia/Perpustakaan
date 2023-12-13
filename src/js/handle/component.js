const component = (elements, icon, id) => {
    elements.forEach((element) => {
        const myIcon = new Image();
        myIcon.src = icon; 
        myIcon.id = id;
        element.appendChild(myIcon);
    });
}

export default component;