
const imgRender = () => {
    if(document.getElementById('keunggulan')){
        const newElement = document.getElementById('keunggulan').querySelector('.center').parentElement.innerHTML;
        const container = document.getElementById('keunggulan').querySelector('section')
        document.getElementById('keunggulan').querySelector('.center').parentElement.remove()
        container.insertBefore(container.querySelector('right'), newElement)
    }
}

const theme = () => {
    const body = document.querySelector('body')
    const switcher = document.getElementById('switch-theme')
    document.getElementById('dark-icon').addEventListener('click', ()=> {
        switcher.style.animation = 'moveRight 1s forwards'
        body.setAttribute("data-bs-theme","dark")
        body.setAttribute('class', 'dark-mode')
        console.log("berhasil mengubah tema menjadi dark");
    })
    document.getElementById('light-icon').addEventListener('click', ()=> {
        switcher.style.animation = 'moveLeft 1s forwards'
        body.setAttribute("data-bs-theme","light")
        body.setAttribute('class', 'light-mode')
        console.log("berhasil mengubah tema menjadi light");
    })
}

export default theme;