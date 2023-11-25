require('dotenv').config();

const config = {
    endpoint: 'https://www.googleapis.com/books/v1/',
    api_key: process.env.GOOGLE_BOOKS_API_KEY,
};

class GoogleBooksApi {
    static async get(data) {
        console.log(`${config.endpoint}${data}&key=${config.api_key}`)
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