const message = () => {
    const article = document.createElement('article')
    article.id = 'form';

    const sectionHiasan = document.createElement('section')
    article.appendChild(sectionHiasan)

    const form = document.createElement('section')

    const judul = document.createElement('div')
    judul.innerHTML = `
    <h1>Kontak kami</h1>
    <p>"Isi formulir kontak di bawah ini untuk mengirimkan pesan kepada kami. Kami akan merespons secepatnya!"</p>`
    form.appendChild(judul)

    const isi = document.createElement('div')
    isi.innerHTML = `
    <div class='banyak-lingkaran'>
        <div class='lingkaran-kecil'></div>
        <div class='lingkaran-kecil'></div>
        <div class='lingkaran-kecil'></div>
    </div>
    <form id='form-kontak'>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Nama</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Pesan</label>
        </div>
    </form>`

    form.appendChild(isi)
    article.appendChild(form)
    return article
}

export default message;