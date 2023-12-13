import BookParameters from "./book-parameters.js";
import BookRunner from "./book-runner.js";

const BookDefault = async (data) => {
    const listQuery = data.listQuery
    const filter = data.filter || null;
    let hasil = [];
    const promises = listQuery.map(async q => {
        const data = await BookRunner.runnerGet(`${BookParameters.default(q)}${BookParameters.filter(filter)}`);
        hasil.push(data);
    });
    await Promise.all(promises);
    return hasil;
}

export default BookDefault;