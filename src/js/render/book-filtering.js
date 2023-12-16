import PaginationButton from "./pagination-button";

const advancedInput = () => {
    const parent = document.createElement('div');
    parent.classList.add('input-group');
    parent.classList.add('collapse');
    parent.classList.add('mb-3');
    parent.id = "collapseExample";
    const listOfFilter = {
        'pemfilteran': ['partial', 'full', 'free-ebooks', 'paid-ebooks', 'ebooks'],
        'percetakan': ['all', 'books', 'magazines'],
        'proyeksi': ['full', 'lite'],
        'pengurutan': ['relevance', 'newest']
    };
    Object.entries(listOfFilter).forEach(([key, value]) => {
        const container = document.createElement('div');
        const list = document.createElement('ul');
        value.forEach(element => {
            const option = document.createElement('option');
            option.value = element;
            option.textContent = element;
            list.appendChild(option);
        });
        container.innerHTML = `
            <div class="advance-keyword">
                <span>${key}</span>
                <select>
                    ${list.innerHTML}
                </select>
            </div>`;
        parent.appendChild(container);
    });
    return parent;
};



const BookFiltering = () => {
    const container = document.createElement('section')
    container.id = 'tools-book'
    const formTools = document.createElement('form')
    formTools.id = "form-pencarian-buku"
    formTools.className = 'row row-cols-lg-auto g-2 align-items-center'
    formTools.innerHTML += 
        `<div class="col-12">
            <div class="input-group">
            <div class="input-group-text">
                <p class="d-inline-flex">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" id="advanced-button">
                        <span class="material-symbols-outlined">manage_search</span>
                    </button>
                </p>            
            </div>
            <input type="text" class="form-control" placeholder="Ketik keyword..." id="keyword-book">
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn" id="cari-buku">Cari</button>
        </div>`
    formTools.appendChild(advancedInput())
    container.appendChild(formTools)

    return container;
}

export default BookFiltering;