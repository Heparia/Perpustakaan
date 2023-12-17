import BookKategori from '../../handle/book/book-kategori';
import BookItemFlip from '../../custom-element/book-item-flip';
import eventflip from './event-c-flip';

const event = ()=> {
    const carousel = document.getElementById('carousel-flip')
    const section = document.getElementsByClassName('kategori-item')
    for(const child of section) {
        child.addEventListener('click', async ()=>{
            if(document.querySelector(".container-flip")){
                document.querySelector(".container-flip").remove()
            }
            const judul = document.getElementById("judul-kategori")
            judul.innerText = child.getAttribute('value')
            const data = {
                "listQuery": [`${child.getAttribute('value')}`],
            }
            
            const newData = await BookKategori(data);
            console.log(newData)
            const d = document.createElement('div')
            d.classList.add('container-flip')
            const c = document.createElement('div')
            c.id = 'carouselFlip'
            const inner = document.createElement('div')
            inner.classList.add('c-inner')
            newData[0].items.forEach(element => {
                const bookData = {
                    'title': `${element.volumeInfo.title}`,
                    'image': `${element.volumeInfo.imageLinks ? element.volumeInfo.imageLinks.thumbnail : 'Disembunyikan'}`,
                    'date': `${element.volumeInfo.publishedDate ? element.volumeInfo.publishedDate : 'Disembunyikan'}`,
                    'webReaderLink': `${element.volumeInfo.previewLink ? element.volumeInfo.previewLink : element.accessInfo.webReaderLink}`,
                    'saleInfo': `${element.saleInfo.saleability ? element.saleInfo.saleability : 'Disembunyikan'}`,
                    'selfLink': `${element.selfLink ? element.selfLink : 'Disembunyikan'}`,
                    'country': `${element.accessInfo.country ? element.accessInfo.country : 'Disembunyikan'}`,
                    'kategori': `${element.volumeInfo.categories ? element.volumeInfo.categories : 'Disembunyikan'}`,
                    'description': `${element.volumeInfo.description ? element.volumeInfo.description : 'Tidak ada deskripsi'}`,
                    'isbn': `${element.volumeInfo.industryIdentifiers && element.volumeInfo.industryIdentifiers[0]?.identifier ? element.volumeInfo.industryIdentifiers[0].identifier : 'Disembunyikan'}`,
                    'infoLink': `${element.volumeInfo.infoLink ? element.volumeInfo.infoLink : 'Disembunyikan'}`,
                    'matureRating': `${element.volumeInfo.maturityRating ? element.volumeInfo.maturityRating : 'Disembunyikan'}`,
                    'previewLink': `${element.volumeInfo.previewLink ? element.volumeInfo.previewLink : 'Disembunyikan'}`,
                    'author': `${element.volumeInfo.authors ? element.volumeInfo.authors.join(", ") : 'Disembunyikan'}`,
                    'penerbit': `${element.volumeInfo.publisher ? element.volumeInfo.publisher : 'Disembunyikan'}`,
                  };
                const flip = document.createElement('book-item-flip')
                flip.result = bookData;
                inner.appendChild(flip)
                c.appendChild(inner)
            })
            d.appendChild(c)
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('c-see-button');
            buttonContainer.innerHTML = `
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>`;
            d.appendChild(buttonContainer)
            carousel.appendChild(d);
            inner.scrollTo({
                left: inner.scrollWidth,
                behavior: 'smooth',
            });

            buttonContainer.addEventListener('click', (event) => {
                const targetId = event.target.id;
                if (targetId === 'prev') {
                    console.log(inner);
                    inner.scrollTo({
                        left: inner.scrollLeft - 218,
                        behavior: 'smooth',
                    });
                    if (inner.scrollLeft <= 0) {
                        inner.scrollTo({
                            left: inner.scrollWidth,
                            behavior: 'smooth',
                        });
                    }
                } else if (targetId === 'next') {
                    console.log('kanan');
                    inner.scrollTo({
                        left: inner.scrollLeft + 218,
                        behavior: 'smooth',
                    });
                    if (inner.scrollLeft + inner.clientWidth >= inner.scrollWidth) {
                        inner.scrollTo({
                            left: 0,
                            behavior: 'smooth',
                        });
                    }
                }
            });
        });
    }
    section[0].click()
}

export default event;