import BookCaraousel from "./book-caraousel";
import PaginationButton from "./pagination-button";
import EventCarouselBook from "../handle/event-listener/carousel-book";

const DisplayMain = (data) => {
    const parent = document.getElementById('main-content')
    parent.innerHTML = ''

    const artikelCarousel = document.createElement('article')
    artikelCarousel.id = 'artikel-carousel'

    artikelCarousel.appendChild(BookCaraousel(data))
    artikelCarousel.appendChild(PaginationButton())
    parent.appendChild(artikelCarousel)
    EventCarouselBook()
}

export default DisplayMain;