import Book from "../custom-element/book";
import BookContainer from "../custom-element/book-container";

const getRightTitle = (data) => {
  if (data.length >= 30) {
    return `${data.substring(0, 30)}...`;
  } else {
    return data;
  }
};

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
        'title': `${getRightTitle(element.volumeInfo.title)}`,
        'image': `${element.volumeInfo.imageLinks.thumbnail}`,
        'date': `${element.volumeInfo.publishedDate}`
      };
      bookItem.result = bookData;
      div.appendChild(bookItem)
      sectionBook.appendChild(div);
      console.log("masuk ke book renderrr");
    }
    
    console.log(typeof sectionBook)
    return sectionBook;
  } catch (error) {
    console.log(error);
  }
};

export default BookRender;
