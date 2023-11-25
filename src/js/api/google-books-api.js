require('dotenv').config();

const config = {
    endpoint: 'https://www.googleapis.com/books/v1/',
};

class GoogleBooksApi {
    static async get(data) {
        const response = await fetch(`${config.endpoint}${data}`, {
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