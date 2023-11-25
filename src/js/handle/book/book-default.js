import BookParameters from "./book-parameters.js";
import BookRunner from "./book-runner.js";

const BookDefault = async () => {
    const listQuery = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const filter = 'free-ebooks';
    let hasil = [];
    const promises = listQuery.map(async q => {
        const data = await BookRunner.runnerGet(BookParameters.filter(q, filter));
        hasil.push(data);
    });
    await Promise.all(promises);
    return hasil;
}

export default BookDefault;