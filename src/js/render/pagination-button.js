const PaginationButton =() => {
    const pagination = document.createElement('nav')
    
    pagination.innerHTML = `
    <ul class="pagination col-md-1">
        <li class="page-item prev-button" id="prev-button"><a class="page-link"><span class="material-symbols-outlined">navigate_before</span></a></li>
        <li class="page-item next-button" id="next-button"><a class="page-link"><span class="material-symbols-outlined">navigate_next</span></a></li>
    </ul>`
    return pagination;
}

export default PaginationButton;