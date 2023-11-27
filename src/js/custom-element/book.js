class Book extends HTMLElement {
    constructor(){
        super()
    }
    set result(result){
        this._result = result;
        this.render();
    }
    render(){
        this.innerHTML = `
        <div class="card mb-4" style="max-width: 360px; align-items: flex-start;">
          <div class="row g-0">
            <div class="col-md-4">
                <img src="${this._result.image}" class="img-fluid rounded-start" alt="${this._result.title}-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${this._result.title}</h5>
                <p class="card-text"><small class="text-muted">${this._result.date}</small></p>
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
        }
    }
customElements.define('book-item', Book);
export default Book;