import ParserForApi from "../parser-for-api.js";

class BookParameters {
    static default = (data) => {
        const parameter = `volumes?q=${ParserForApi(data)}`
        return parameter;
    }
    static standard = (terms, value_terms) => {
        const parameter = `+${terms}:${value_terms}`
        return parameter
    }

    static downloadByEpub = () => {
        const parameter = `&download=epub`
        return parameter
    }

    static filter = (terms) => {
        const parameter = `&filter=${terms}`
        return parameter
    }

    static pengurutan = (terms) => {
        const parameter = `&orderBy=${terms}`
        return parameter
    }

    static proyeksi = (terms) => {
        const parameter = `&projection=${terms}`
        return parameter
    }

    static percetakan = (terms) => {
        const parameter = `&printType=${terms}`
        return parameter
    }
}

export default BookParameters;