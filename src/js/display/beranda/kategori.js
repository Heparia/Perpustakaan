import ekonomi from '../../../asset/image/ekonomi.png';
import pendidikan from '../../../asset/image/pendidikan.png';
import hukum from '../../../asset/image/hukum.png';
import kesehatan from '../../../asset/image/kesehatan.png';

const kategori = () => {
    const article = document.createElement('article')
    article.id = 'kategori'
    const carousel = document.createElement('section')
    carousel.id = 'carousel-flip'
    const judul = document.createElement('h1')
    judul.id = "judul-kategori"
    judul.innerText = "Kategori";
    console.log(judul.innerText)
    carousel.appendChild(judul)
    article.appendChild(carousel)

    const section = document.createElement('section')
    section.classList.add('hiasan')
    section.innerHTML = `
    <img src='${hukum}' value="hukum" class="kategori-item">
    <img src='${pendidikan}' value="pendidikan" class="kategori-item">
    <img src='${kesehatan}' value="kesehatan" class="kategori-item">
    <img src='${ekonomi}' value="ekonomi" class="kategori-item">`
    

    article.appendChild(section)
    return article;
}

export default kategori;