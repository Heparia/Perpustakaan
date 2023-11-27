class BookContainer extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback() {
        this.style.flex = '0 0 100%';
        this.style.boxSizing = 'border-box';
        this.style.minWidth = '80%'
    }
    set result(result){
        this._result = result;
        this.render();
    }
    render(){
        this.innerHTML = `${this._result}`
    }
}
customElements.define('book-container', BookContainer);
export default BookContainer;