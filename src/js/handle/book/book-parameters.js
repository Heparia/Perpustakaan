import ParserForApi from "../parser-for-api.js";

class BookParameters {
    static default = (data) => {
        const parameter = `volumes?q=${ParserForApi(data)}`
        return parameter;
    }
    static standard = (data, terms, value_terms) => {
        const parameter = `volumes?q=${ParserForApi(data)}+${terms}:${value_terms}`
        return parameter
    }

    static downloadByEpub = (data) => {
        const parameter = `volumes?q=${ParserForApi(data)}&download=epub`
        return parameter
    }

    static filter = (data, terms) => {
        const parameter = `volumes?q=${ParserForApi(data)}&filter=${terms}`
        return parameter
    }
}

export default BookParameters;