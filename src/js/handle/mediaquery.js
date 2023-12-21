const mediaQuery = () => {
    const mediaQuery = window.matchMedia('only screen and (max-width: 361px)');
    if (mediaQuery.matches) {
        
    } else {
    console.log('Screen width is more than 361 pixels');
    }

    // Add a listener to respond to changes in the media query
    mediaQuery.addListener((event) => {
    if (event.matches) {
        console.log('Screen width changed to 361 pixels or less');
    } else {
        console.log('Screen width changed to more than 361 pixels');
    }
    });

}

export default mediaQuery;