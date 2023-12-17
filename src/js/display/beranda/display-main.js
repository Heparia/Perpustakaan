import TopNewest from "./top-newest";
import fasilitas from "./fasilitas";
import keunggulan from "./keunggulan";
import kategori from "./kategori";
import chemicalImage from '../../../asset/image/chemical.jpg';
import statistikImage from '../../../asset/image/statistika.webp';
import masakanImage from '../../../asset/image/masakanrumah.webp';
import event from "./event";

const DisplayMainBeranda = (data) => {
    const main = document.querySelector('main')
    main.innerHTML = "";

    const article = document.createElement('article')
    article.id = 'topBook'
    article.className = 'carousel-custom'
    article.innerHTML = `
    <div class="c-see" id="book">
        <button class="prev"></button>
        <div class="c-see-inner">
            <img src="${chemicalImage}" alt="chemical" class="c-see-item active">
            <img src="${statistikImage}" alt="tidak tau" class="c-see-item">
            <img src="${masakanImage}" alt="soyo iki" class="c-see-item">
        </div>
        <button class="next"></button>
    </div>
    <div class="c-see-text"></div>`
    main.appendChild(article)
    TopNewest();

    main.appendChild(fasilitas());
    main.appendChild(keunggulan());
    main.appendChild(kategori());
    event()

}

export default DisplayMainBeranda;