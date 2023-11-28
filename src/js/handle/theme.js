const theme = () => {
    const body = document.querySelector('body')
    document.querySelector('.dark-icon').addEventListener('click', () => {
        body.setAttribute("data-bs-theme","dark")
        console.log("berhasil mengubah tema menjadi dark");
    })
    document.querySelector('.light-icon').addEventListener('click', () => {
        body.setAttribute("data-bs-theme","light")
        console.log("berhasil mengubah tema menjadi light");
    })
    const switcher = document.getElementById('switch-theme');
}

export default theme;