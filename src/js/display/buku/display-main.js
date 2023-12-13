import BookCaraousel from "../../render/book-caraousel";
import BookFiltering from "../../render/book-filtering";
import PaginationButton from "../../render/pagination-button";


const DisplayMain = (data) => {

    const parent = document.getElementById('main-content')
    parent.innerHTML = ''

    const artikelTools = document.createElement('article')
    artikelTools.id = 'tools'
    artikelTools.appendChild(BookFiltering())
    artikelTools.appendChild(PaginationButton())
    artikelTools.innerHTML += 
    `<div class="collapse" id="collapseExample">
        <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
    </div>`

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
}

export default DisplayMain;