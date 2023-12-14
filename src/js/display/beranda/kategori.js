import ekonomi from '../../../asset/image/ekonomi.png';
import pendidikan from '../../../asset/image/pendidikan.png';
import hukum from '../../../asset/image/hukum.png';
import kesehatan from '../../../asset/image/kesehatan.png';


const kategori = () => {
    const article = document.createElement('article')
    article.id = 'kategori'

    const section = document.createElement('section')
    section.innerHTML = `
    <img src='${hukum}'>
    <img src='${pendidikan}'>
    <img src='${kesehatan}'>
    <img src='${ekonomi}'>`
    article.appendChild(section)
    
    return article;
}

export default kategori;