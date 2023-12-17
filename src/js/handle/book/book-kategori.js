import BookParameters from "./book-parameters.js";
import BookRunner from "./book-runner.js";

const BookKategori = async (data) => {
    const listQuery = data.listQuery
    const kategori = data.kategori 
    let hasil = [];
    const promises = listQuery.map(async q => {
        const data = await BookRunner.runnerGet(`${BookParameters.default(q)}`);
        hasil.push(data);
    });
    await Promise.all(promises);
    return hasil;
}

export default BookKategori;