import GoogleBooksApi from "../../api/google-books-api.js";

class BookRunner {
  static runnerGet = async (parameters) => {
    try {
      const response = await GoogleBooksApi.get(parameters);
      return response;
    } catch (error) {
      console.error(`API request failed: ${error.message}`);
      alert(`API request failed: ${error.message}`)
      throw error;
    }
  }
}

export default BookRunner;
