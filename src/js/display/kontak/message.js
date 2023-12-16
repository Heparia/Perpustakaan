import email from '../../../asset/image/email.png';
import telepon from '../../../asset/image/telp.png';
import jam from '../../../asset/image/jam.png';

const message = () => {
    const article = document.createElement('article')
    article.id = 'form';

    const sectionHiasan = document.createElement('section')
    sectionHiasan.classList.add('hiasan')
    article.appendChild(sectionHiasan)

    const form = document.createElement('section')

    const judul = document.createElement('div')
    judul.classList.add('judul')
    judul.innerHTML = `
    <h1>Kontak kami</h1>
    <p>"Isi formulir kontak di bawah ini untuk mengirimkan pesan kepada kami. Kami akan merespons secepatnya!"</p>`
    form.appendChild(judul)

    const isi = document.createElement('div')
    isi.classList.add('isi')
    isi.innerHTML = `
    <div class='banyak-lingkaran'>
        <div class='lingkaran-kecil'></div>
        <div class='lingkaran-kecil'></div>
        <div class='lingkaran-kecil'></div>
    </div>
    <form id='form-kontak'>
        <div class="container-input">
            <label name="nama">Nama</label>
            <input type="text" for="nama">
        </div>
        <div class="container-input">
            <label name="email">Email</label>
            <input type="email" for="email">
        </div>
        <div class="container-input">
            <label name="pesan">Pesan</label>
            <input type="textarea" for="pesan">
        </div>
        <input type='submit' value='Kirim pesan'>
    </form>`

    form.appendChild(isi)
    
    article.appendChild(form)
    const sectionIcon = document.createElement('section')
    sectionIcon.classList.add('icons')
    sectionIcon.innerHTML = `
    <div>
    <section class="backdrop">
        <a href="#"><img src='${email}'></a>
        <a href="#"><img src='${telepon}'></a>
        <a href="#"><img src='${jam}'></a>
    </section>
    </div>`
    article.appendChild(sectionIcon)
    return article
}

export default message;