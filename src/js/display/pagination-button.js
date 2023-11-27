const PaginationButton =() => {
    console.log("ggaal")
    const pagination = document.createElement('nav')
    pagination.innerHTML = `
    <button class="prev-button"><span class="material-symbols-outlined">navigate_before</span></button>
    <button class="next-button"><span class="material-symbols-outlined">navigate_next</span></button>`
    return pagination;
}

export default PaginationButton;