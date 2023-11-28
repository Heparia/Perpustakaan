import BookRender from "./book-render";
import BookCarousel from "../custom-element/book-carousel";

const BookCaraousel = (data) => {
    const carousel = document.createElement('book-carousel')
    carousel.id = 'book-carousel'
    carousel.className = 'carousel-inner'
    data.forEach(elements => {
      carousel.appendChild(BookRender(elements))
    })
    carousel.innerHTML += `    
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style="display:none" id="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style="display:none" id="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>`
    return carousel
}

export default BookCaraousel;