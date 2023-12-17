import BookCaraousel from "../../render/book-caraousel";
import BookPencarian from "../../handle/book/book-pencarian";

const event = () => {
    document.getElementById('form-pencarian-buku').addEventListener('submit', async(event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const keyword = document.getElementById('keyword-book').value;
        const advance = document.getElementsByClassName('advance-keyword');
        const data = {};

        for (const element of advance) {
            const key = element.querySelector('span').innerText.toLowerCase();
            const value = element.querySelector('select').value;
            data[key] = value;
        }
        data["listQuery"] = keyword.split(' ')
        console.log(data)
        const newData = await BookPencarian(data);
        console.log(newData)
        if(newData){
        if(newData[0].error ){
            if(newData[0].error.message == "Missing query."){
              alert("Error: Masukkan keyword yang tepat!")
            } else {
            alert(`Error: ${newData[0].error.message}`)
          }
        }
         else if (newData[0].totalItems == 0){
          alert(`Error: Data buku tidak dapat ditemukan`)
         }
         else if (newData[0].totalItems > 0){
            const parent = document.getElementById('main-content')
            parent.removeChild(document.getElementById('carouselExample'))
            const artikelCarousel = document.createElement('article')
            artikelCarousel.id = 'carouselExample'
        
            artikelCarousel.className = 'carousel slide'
            artikelCarousel.appendChild(BookCaraousel(newData))
            parent.appendChild(artikelCarousel)
            document.querySelector('book-container').className = 'carousel-item active'    
            document.getElementById('prev-button').classList.add('pencarian')
            document.getElementById('next-button').classList.add('pencarian')
        } else {
          alert("Maaf sepertinya ada kesalahan teknis")
        }}
        else {
          alert("Gagal mendapatkan data dari database")
        }
    });
}

export default event;
