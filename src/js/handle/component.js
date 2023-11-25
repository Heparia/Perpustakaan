const component = (elements, icon) => {
    elements.forEach((element) => {
        const myIcon = new Image();
        myIcon.src = icon; 
        element.appendChild(myIcon);
    });
}

export default component;