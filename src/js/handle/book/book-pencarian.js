import BookParameters from "./book-parameters.js";
import BookRunner from "./book-runner.js";

const BookPencarian = async (data) => {
    const listQuery = data.listQuery
    const filter = data.pemfilteran 
    const cetak = data.percetakan 
    const proyeksi = data.proyeksi 
    const urut = data.pengurutan
    let hasil = [];
    const promises = listQuery.map(async q => {
        const data = await BookRunner.runnerGet(`${BookParameters.default(q)}${BookParameters.filter(filter)}${BookParameters.percetakan(cetak)}${BookParameters.proyeksi(proyeksi)}${BookParameters.pengurutan(urut)}`);
        hasil.push(data);
    });
    await Promise.all(promises);
    return hasil;
}

export default BookPencarian;