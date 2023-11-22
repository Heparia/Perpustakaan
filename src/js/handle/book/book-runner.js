import GoogleBooksApi from "../../api/google-books-api.js";

class BookRunner {
    static runnerGet = (paramters) => {
        return GoogleBooksApi.get(paramters)
    }
}

export default BookRunner;