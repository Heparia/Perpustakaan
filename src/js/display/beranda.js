import DisplayHeaderBeranda from "./beranda/display-header";
import DisplayMainBeranda from "./beranda/display-main";
import BookNewest from "../handle/book/book-newest";


const Beranda = async (data)=> {
    const header = document.querySelector('header')
    header.innerHTML = "";
    const main = document.querySelector('main')
    main.innerHTML = "";
    DisplayHeaderBeranda()
    const hasil = await BookNewest(data);
    DisplayMainBeranda(hasil)

}

export default Beranda;