import Book from "../custom-element/book";
import BookContainer from "../custom-element/book-container";


const BookRender = (data) => {
  const sectionBook = document.createElement('book-container');
  sectionBook.className = 'carousel-item'
  const div = document.createElement('div')
  try {
    const value = 6;
    for (let index = 0; index < value && index < data.items.length; index++) {
      const element = data.items[index];
      const bookItem = document.createElement('book-item');

      
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
      

      bookItem.result = bookData;
      div.appendChild(bookItem)
      sectionBook.appendChild(div);
    }
    
    return sectionBook;
  } catch (error) {
    console.log(error);
  }
};

export default BookRender;
