const theme = () => {
    const body = document.querySelector('body')
    const switcher = document.getElementById('switch-theme')
    document.getElementById('dark-icon').addEventListener('click', ()=> {
        switcher.style.animation = 'moveRight 1s forwards'
        body.setAttribute("data-bs-theme","dark")
        console.log("berhasil mengubah tema menjadi dark");
    })
    document.getElementById('light-icon').addEventListener('click', ()=> {
        switcher.style.animation = 'moveLeft 1s forwards'
        body.setAttribute("data-bs-theme","light")
        console.log("berhasil mengubah tema menjadi light");
    })
}

export default theme;