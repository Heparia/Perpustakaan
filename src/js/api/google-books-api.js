require('dotenv').config();

console.log('API Key:', process.env.GOOGLE_BOOKS_API_KEY);

const config = {
    endpoint: 'https://www.googleapis.com/books/v1/',
    api_key: process.env.GOOGLE_BOOKS_API_KEY,
};

class GoogleBooksApi {
    static async get(data) {
        const response = await fetch(`${config.endpoint}${data}&key=${config.api_key}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }            
        })
        const responseJson = response.json()
        return responseJson;
    }
}

export default GoogleBooksApi;