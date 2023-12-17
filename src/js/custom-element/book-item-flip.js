class BookItemFlip extends HTMLElement {
    constructor(){
        super()
        this.modalId = `modal-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    connectedCallback() {
        this.querySelector('.model-hover').addEventListener('click', () => this.flipCard())
    }

    flipCard() {
        this.classList.toggle('flipped');
    }

    set result(result) {
      this._result = result;

      this.render();
    }

    render(){
        this.innerHTML = `
        <div class="model-hover">
          <div class="model-hover-inner">
            <div class="model-hover-front">
              <img src="${this._result.image}" alt="image">
            </div>
            <div class="model-hover-back">
              <!-- Button trigger modal -->
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${this.modalId}">
                Selengkapnya
              </button>
              
              <!-- Modal -->


            </div>
          </div>
        </div>

        <div class="modal fade" id="${this.modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${this._result.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="informasi">
              <img src="${this._result.image}" class="img-fluid rounded-start" alt="${this._result.title}-img" style="height: fit-content">
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
            `
        }
    }
customElements.define('book-item-flip', BookItemFlip);
export default BookItemFlip;