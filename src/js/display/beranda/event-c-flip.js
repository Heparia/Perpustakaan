const eventflip =()=> {
    const container = document.querySelector('.c-inner');
    console.log(document.getElementById("prev"))
    
    document.getElementById("prev").addEventListener('click', () => {
        console.log("kiri");
        container.scrollTo({
            left: container.scrollLeft - 240,
            behavior: 'smooth'
        });
    
        // Check if reached the beginning
        if (container.scrollLeft <= 0) {
            // Move to the last item
            container.scrollTo({
                left: container.scrollWidth,
                behavior: 'smooth'
            });
        }
    });
    
    document.getElementById("next").addEventListener('click', () => {
        console.log("kanan");
        container.scrollTo({
            left: container.scrollLeft + 240,
            behavior: 'smooth'
        });
    
        // Check if reached the end
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            // Move to the first item
            container.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    });
}

export default eventflip