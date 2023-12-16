import BookCaraousel from "../../render/book-caraousel";
import BookFiltering from "../../render/book-filtering";
import PaginationButton from "../../render/pagination-button";
import event from "./event";


const DisplayMain = (data) => {

    const parent = document.getElementById('main-content')
    parent.innerHTML = ''

    const artikelTools = document.createElement('article')
    artikelTools.id = 'tools'
    artikelTools.appendChild(BookFiltering())
    artikelTools.appendChild(PaginationButton())

    const artikelCarousel = document.createElement('article')
    artikelCarousel.id = 'carouselExample'
    artikelCarousel.className = 'carousel slide'
    artikelCarousel.appendChild(BookCaraousel(data))

    parent.appendChild(artikelTools)
    parent.appendChild(artikelCarousel)

    document.querySelector('book-container').className = 'carousel-item active'
    document.getElementById('prev-button').addEventListener('click', () => {
        document.getElementById('prev').click()
    })
    document.getElementById('next-button').addEventListener('click', () => {
        document.getElementById('next').click()
    })
    event()
}

export default DisplayMain;