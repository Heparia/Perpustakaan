const EventCarouselBook = () => {
    const paginationLeft = document.querySelector('.prev-button')
    const paginationRight = document.querySelector('.next-button')
    const container = document.querySelector('book-carousel');
    const content = document.querySelectorAll('book-container');
    let currentIndex = 0;

    const showDiv =(index) => {
        const percentage = -index * 100;
        container.style.transform = `translateX(${percentage}%)`;
    }

    paginationLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + content.length) % content.length;
        showDiv(currentIndex);
    });

    paginationRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % content.length;
        showDiv(currentIndex);
    });

    showDiv(currentIndex);
}

export default EventCarouselBook;