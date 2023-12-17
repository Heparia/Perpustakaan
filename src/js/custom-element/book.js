class Book extends HTMLElement {
    constructor(){
        super()
        this.modalId = `modal-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    connectedCallback() {
        this.className = 'book-container'
    }
    set result(result) {
      this._result = result;
      this._result.titleFormat = this.rightTitle(this._result.title);

      this.render();
    }
  
    rightTitle(data) {
      return data ? (data.length > 30 ? `${data.substring(0, 30)}...` : data) : '-';
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
                <h5 class="card-title">${this._result.titleFormat}</h5>
                <p class="card-text"><small class="text-muted">${this._result.date}</small></p>

                <!-- Button trigger modal -->
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${this.modalId}">
                  Selengkapnya
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="${this.modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${this._result.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <div class="informasi">
                        <img src="${this._result.image}" class="img-fluid rounded-start" alt="${this._result.title}-img">
                        <div class="informasi">
                          <div class="container">
                          <div class="row">
                          <div class="col">
                            Kategori
                          </div>
                          <div class="col-7">
                            ${this._result.kategori}
                          </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              Penulis
                            </div>
                            <div class="col-7">
                              ${this._result.author}
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              Diterbitkan
                            </div>
                            <div class="col-7">
                              ${this._result.date}
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              Industry Identifier
                            </div>
                            <div class="col-7">
                              ${this._result.isbn}
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              Penerbit
                            </div>
                            <div class="col-7">
                              ${this._result.penerbit}
                            </div>
                          </div>
                          <div class="row">
                          <div class="col">
                            Negara
                          </div>
                          <div class="col-7">
                            ${this._result.country}
                          </div>
                        </div>
                        <div class="row">
                        <div class="col">
                          Info Penjualan
                        </div>
                        <div class="col-7">
                          ${this._result.saleInfo}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          Deskripsi
                        </div>
                        <div class="col-7">
                          ${this._result.description}
                        </div>
                      </div>
                        </div>
                      </div>
                      </div>
                      <div class="modal-footer">
                        <a type="button" class="btn" href="${this._result.infoLink}">Info Lainnya</a>
                        <a type="button" class="btn" href="${this._result.webReaderLink}">Preview</a>
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