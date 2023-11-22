import BookParameters from "./handle/book/book-parameters.js";
import BookRunner from "./handle/book/book-runner.js";
import display from "./display/display.js";

document.addEventListener('DOMContentLoaded', async () => {
    console.log("Percobaan Default Get")
    let data = await BookRunner.runnerGet(BookParameters.default(["harry", "potter"]));
    console.log(data)
    display(data)
    console.log("Percobaan Standard Get")
    data = await BookRunner.runnerGet(BookParameters.standard(["harry", "potter"], "intitle", "harry"))
    console.log(data)
    console.log("Percobaan Download By EPub Get")
    const newData = await BookRunner.runnerGet(BookParameters.downloadByEpub(["harry", "potter"]))
    console.log(newData)
})