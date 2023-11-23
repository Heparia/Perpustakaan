const config = {
    endpoint: 'https://newsdata.io/api/1/news',
    api_key: 'pub_333522ce09d0c46c2a0283c538b3c0d550221',
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