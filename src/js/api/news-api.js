const config = {
    endpoint: 'https://newsapi.org/v2/top-headlines',
    api_key: 'c1042d146c934e7891c3a55f8ecfaeb1',
};

class NewsApi {
    static async get(data) {
        const response = await fetch(`${config.endpoint}?${data}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' :`${config.api_key}`
            }            
        })
        const responseJson = response.json()
        return responseJson;
    }
}

export default NewsApi;