const ParserForApi = (data) => {
    if (data != null) {
        if(Array.isArray(data)) {
            return data.join('+');
        } else {
            return data
        }
    } else {
        console.log("Terjadi kesalahan dalam mengkonversi list data menjadi larik string")
        return false;
    }
}

export default ParserForApi;