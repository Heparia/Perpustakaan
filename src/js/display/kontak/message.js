import email from '../../../asset/image/email.png';
import telepon from '../../../asset/image/telp.png';
import jam from '../../../asset/image/jam.png';

const openMailApplication = () => {

}


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
    </div>`

    const formMessage = document.createElement('form')
    formMessage.setAttribute('entype', 'text/plain')
    formMessage.id = 'form-kontak'
    formMessage.innerHTML = `
    <form id="form-kontak" enctype="text/plain">
        <div class="container-input">
            <label for="nama">Nama</label>
            <input type="text" id="nama" name="nama">
        </div>
        <div class="container-input">
            <label for="subject">Subjek</label>
            <input type="subject" id="subject" name="subject">
        </div>
        <div class="container-input">
            <label for="pesan">Pesan</label>
            <textarea id="textareaColumn5" name="textareaColumn5" rows="6" cols="30"></textarea>
        </div>
        <input type="submit" value="Kirim pesan">
    </form>`
    formMessage.addEventListener('submit', (event) => {
        event.preventDefault();
        const subject = encodeURIComponent(formMessage.querySelector('#subject').value);
        const body = encodeURIComponent(formMessage.querySelector('#pesan').value);
        const nama = encodeURIComponent(formMessage.querySelector('#nama').value);
        const mailtoLink = `mailto:heparia.ramdhani@gmail.com?subject=${subject}&body=${body}%0AFrom: ${nama}`;
        window.location.href = mailtoLink;
    });

    isi.appendChild(formMessage)

    form.appendChild(isi)
    
    article.appendChild(form)
    const sectionIcon = document.createElement('section')
    sectionIcon.classList.add('icons')
    sectionIcon.innerHTML = `
    <div>
        <section class="backdrop">
            <a href="mailto:heparia.ramdhani@gmail.com?subject=Web%20Perpustakaan&body=Pesan%20dari%20web%20perpustakaan"><img src='${email}' title="heparia.ramdhani@gmail.com"></a>
            <a href="tel:+6282135701110"><img src='${telepon}' title="+6282135701110"></a>
            <a href="#"><img src='${jam}' title="09.00-17.00 WIB"></a>  
        </section>
    </div>`
    article.appendChild(sectionIcon)
    return article
}

export default message;