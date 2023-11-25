const getRightTitle= (data) => {
    if(data.length >= 30){
        return `${data.substring(0, 30)}...`
    } else {
        return data;
    }
}

const BookRender = (data) => {
    const parent = document.getElementById('main-content');
    let total = 0;
    const sectionBook = document.createElement('div');
    sectionBook.className = 'row row-cols-1 row-cols-md-3 g-4 col book-container';
    data.forEach(element => {
        total = total + element.totalItems
        element.items.forEach(item => {
            const volumeinfo = item.volumeInfo;
            let judul = getRightTitle(volumeinfo.title)
            const divBook = document.createElement('div');
            divBook.className ='col';
            divBook.innerHTML = `
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${volumeinfo.imageLinks.thumbnail}" class="img-fluid rounded-start" alt="${volumeinfo.title}-img">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${judul}</h5>
                    <p class="card-text"><small class="text-muted">${volumeinfo.publishedDate}</small></p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      Selengkapnya
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Belum ada
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>`
            sectionBook.appendChild(divBook)
        })
        console.log("berhasil render")
    });
    parent.appendChild(sectionBook)
    const pagination = document.createElement('nav')
    pagination.ariaLabel = "Page navigation example"
    pagination.innerHTML=`
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>`
    parent.appendChild(pagination)
}

export default BookRender;