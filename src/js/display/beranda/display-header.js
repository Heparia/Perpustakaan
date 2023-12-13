const DisplayHeaderBeranda = ()=> {
    const header = document.querySelector('header')
    header.innerHTML = `
    <div class="flex-left">
        <h1 class="nama">Selamat datang!</h1>
        <div class="kata-kata-mutiara">
        <div class="kalimat">
            <p>Membaca buku-buku yang baik berarti memberi  makanan rohani yang baik</p>
        </div>
        <div class="penulis">
            <div class="sep"></div>
            <p>Buya Hamka</p>
        </div>
        </div>
    </div>
    <div class="flex-right">
        <div class="head-img"></div>
    </div>`
}

export default DisplayHeaderBeranda;