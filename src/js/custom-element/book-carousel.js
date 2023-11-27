class BookCarousel extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback() {
        this.style.display = 'flex';
        this.style.transition = 'transform 0.5s ease-in-out';
    }
    set result(result){
        this._result = result;
        this.render();
    }
    render(){
        this.innerHTML = `${this._result}`
    }
}
customElements.define('book-carousel', BookCarousel);
export default BookCarousel;