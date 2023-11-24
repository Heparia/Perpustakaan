require('dotenv').config();

console.log(process.env)
const config = {
    endpoint: 'https://newsdata.io/api/1/news',
    api_key: process.env.NEWS_DATA_IO_API_KEY,
};

class NewsDataApi {
    static async get(data) {
        const response = await fetch(`${config.endpoint}?apikey=${config.api_key}&${data}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }            
        })
        const responseJson = response.json()
        return responseJson;
    }
}

export default NewsDataApi;