import BookParameters from "./book-parameters.js";
import BookRunner from "./book-runner.js";

const BookNewest = async(data) => {
    let hasil = await BookRunner.runnerGet(`${BookParameters.default(data.q)}${BookParameters.pengurutan(data.pengurutan)}`)
    console.log(hasil)
    return hasil;
}

export default BookNewest;