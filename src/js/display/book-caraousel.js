import BookRender from "./book-render";
import BookCarousel from "../custom-element/book-carousel";

const BookCaraousel = (data) => {
    const carousel = document.createElement('book-carousel')
    carousel.id = 'book-carousel'
    data.forEach(elements => {
      carousel.appendChild(BookRender(elements))
    })
    return carousel
}

export default BookCaraousel;