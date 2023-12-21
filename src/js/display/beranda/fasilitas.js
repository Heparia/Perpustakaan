import sofa from '../../../asset/image/sofa.png';
import wifi from '../../../asset/image/wifi.png';
import komputer from '../../../asset/image/komputer.png';

const data = {
    'judul': 'Fasilitas',
    'fasilitas': 'Perpustakaan ini lengkap dengan sofa nyaman, WiFi cepat, katalog efisien, dan fasilitas komputer terkini.',
    'sofa': 'Nyaman untuk membaca buku',
    'wifi': 'Koneksi internet cepat dan stabil',
    'komputer': 'Mencari buku dengan mudah'
}

const fasilitas = () => {
    const article = document.createElement('article');
    article.id = 'fasilitas';

    const sectionAtas = document.createElement('section');
    sectionAtas.className = 'judul-article'
    sectionAtas.innerHTML = `
    <h1>${data.judul}</h1>
    <p>${data.fasilitas}</p>`
    article.appendChild(sectionAtas);

    const sectionBawah = document.createElement('section');
    sectionBawah.className = 'macam'
    sectionBawah.innerHTML = `
    <div>
        <img src='${sofa}'>
        <h3>Sofa</h3>
        <p>${data.sofa}</p>
    </div>
    <div>
        <img src='${wifi}'>
        <h3>Wifi</h3>
        <p>${data.wifi}</p>
    </div>
    <div>
        <img src='${komputer}'>
        <h3>Komputer</h3>
        <p>${data.komputer}</p>
    </div>`
    article.appendChild(sectionBawah);
    return article;
}

export default fasilitas;