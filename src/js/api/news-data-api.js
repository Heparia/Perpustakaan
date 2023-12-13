const config = {
    endpoint: 'https://newsdata.io/api/1/news',
};

class NewsDataApi {
    static async get(data) {
        const response = await fetch(`${config.endpoint}?`, {
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