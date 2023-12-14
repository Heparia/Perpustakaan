import offline from '../../../asset/image/offline.png';
import online from '../../../asset/image/online.png';
import free from '../../../asset/image/nomoney.png';
import kategori from '../../../asset/image/kategori.png';
import books from '../../../asset/image/books.png';

const data = {
    'offline': 'Tempat membaca buku yang santai dan nyaman',
    'online': 'Dimanapun dan kapapun bisa akses buku',
    'free': 'Tidak perlu keluar uang untuk membaca',
    'kategori': 'Kategori pilihan sudah diprioritaskan',
    'keunggulan': '"Buku kami menawarkan keunggulan yang keren dan bervariasi"'
}

const keunggulan = () => {
    const article = document.createElement('article');
    article.id = 'keunggulan'

    const sectionAtas = document.createElement('section')
    
    const div1 = document.createElement('div')
    div1.className = 'left'
    div1.innerHTML = `
    <div>
        <img src='${offline}'>
        <h3>akses offline</h3>
        <p>${data.offline}</p>
    </div>
    <div>
        <img src='${free}'>
        <h3>free</h3>
        <p>${data.free}</p>
    </div>`
    sectionAtas.appendChild(div1);

    const div2 = document.createElement('div')
    div2.innerHTML = `<img src='${books}' class='center'>`
    sectionAtas.appendChild(div2)

    const div3 = document.createElement('div')
    div3.className = 'right'
    div3.innerHTML = `
    <div>
        <img src='${online}'>
        <h3>akses online</h3>
        <p>${data.online}</p>
    </div>
    <div>
        <img src='${kategori}'>
        <h3>kategori</h3>
        <p>${data.kategori}</p>
    </div>`
    sectionAtas.appendChild(div3);

    article.appendChild(sectionAtas);

    const sectionBawah = document.createElement('section')
    sectionBawah.innerHTML = `<p>${data.keunggulan}</p>`;
    article.appendChild(sectionBawah)

    return article;
}

export default keunggulan;