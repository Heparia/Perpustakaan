import PaginationButton from "./pagination-button";

const BookFiltering = () => {
    const container = document.createElement('section')
    container.id = 'tools-book'
    const listOfFilter = {
        'standard': ['intitle', 'inauthor', 'inpublisher', 'subject', 'isbn', 'lccn', 'oclc'],
        'download': ['epub'],
        'pemfilteran': ['partial', 'full', 'free-ebooks', 'paid-ebooks', 'ebooks'],
        'percetakan': ['all', 'books', 'magazines'],
        'proyeksi': ['full', 'lite'],
        'pengurutan': ['relevance', 'newest']
    }
    const formTools = document.createElement('form')
    formTools.className = 'row row-cols-lg-auto g-2 align-items-center'
    formTools.innerHTML += 
        `<div class="col-12">
            <div class="input-group">
            <div class="input-group-text">
                <p class="d-inline-flex">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span class="material-symbols-outlined">manage_search</span>
                    </button>
                </p>            
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>`
    container.appendChild(formTools)

    return container;
}

export default BookFiltering;