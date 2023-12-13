import DataTopBook from "../../local-storage/data-top-book";

const changeImg = (url) => {
    const img = document.createElement('img');
    img.setAttribute('src', `${url}`)
    return img;
}

const removeElementImg = () => {
    const container = document.getElementById('book');
    const prevButton = container.getElementsByClassName('prev')[0];
    const nextButton = container.getElementsByClassName('next')[0];
    prevButton.innerHTML = '';
    nextButton.innerHTML = '';
};


const prevButtonClicker = (index) => {
    const container = document.getElementById('book');
    const inner = container.getElementsByClassName('c-see-inner')[0];
    const prevButton = container.getElementsByClassName('prev')[0];
    const activeItem = container.getElementsByClassName('active')[0];
    prevButton.querySelector('img').addEventListener('click', () => {
        inner.children.item(index).classList.add('active')
        activeItem.classList.remove('active')
        console.log("halo")
        removeElementImg();
        TopNewest();
    })
}

const nextButtonClicker = (index) => {
    const container = document.getElementById('book');
    const inner = container.getElementsByClassName('c-see-inner')[0];
    const nextButton = container.getElementsByClassName('next')[0];
    const activeItem = container.getElementsByClassName('active')[0];
    nextButton.querySelector('img').addEventListener('click', () => {
        inner.children.item(index).classList.add('active')
        activeItem.classList.remove('active')
        console.log("halo")
        removeElementImg();
        TopNewest();
    })
}

const loadText = (index) => {
    const container = document.getElementsByClassName('carousel-custom')[0];
    const text = container.getElementsByClassName('c-see-text')[0];
    const dataActive = DataTopBook[index];
    let penulis = "";
    if (Array.isArray(dataActive.penulis)) {
        penulis = `${dataActive.penulis[0]}, dkk`
    } else {
        penulis = dataActive.penulis;
    }  
    let subject = "";
    dataActive.subject.forEach(element => {
        subject += `<p>${element}</p>`
    });  
    let notes = "";
    if(dataActive.notes.length >= 200){
        notes = `${dataActive.notes.substring(0, 200)}...`
    } else {
        notes = dataActive.notes;
    }
    text.innerHTML = `
    <h1 class="judul">${dataActive.judul}</h1>
    <h4>${penulis} | ${dataActive.tempat}: ${dataActive.publisher}, ${dataActive.tahun}</h4>
    <div>${subject}</div>
    <a href='${dataActive.link}' class="link-top">Selengkapnya</a>`
}

const TopNewest = () => {
    const container = document.getElementById('book');
    const inner = container.getElementsByClassName('c-see-inner')[0];
    let activeIndex;
    let prevIndex;
    let nextIndex;
    let index = 0;
    for (const iterator of inner.children) {
        if(iterator.className.includes('active')){
            activeIndex = index;
            nextIndex = index+1;
            prevIndex = index-1;
        }
        index += 1;
    }
    if(prevIndex == -1){
        prevIndex = inner.children.length - 1;
    }
    if(nextIndex > inner.children.length -1 ){
        nextIndex = 0;
    }
    const prevButton = container.getElementsByClassName('prev')[0];
    const nextButton = container.getElementsByClassName('next')[0];
    if(prevButton.children.item(1) === null || prevButton.children.item(1).localName == 'img'){
        prevButton.appendChild(changeImg(inner.children.item(prevIndex).src))
        nextButton.appendChild(changeImg(inner.children.item(nextIndex).src))
        prevButton.innerHTML += '<div class="front p"></div>'
        nextButton.innerHTML += '<div class="front n"></div>'
    }
    prevButtonClicker(prevIndex);
    nextButtonClicker(nextIndex);
    loadText(activeIndex);
}

export default TopNewest;