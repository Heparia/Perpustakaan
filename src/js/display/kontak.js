import message from "./kontak/message";
import eventKontak from "./kontak/event";

const kontak = () => {
    const header = document.querySelector('header')
    header.innerHTML = "";
    const main = document.querySelector('main')
    main.innerHTML = "";
    main.appendChild(message())
    eventKontak()
}

export default kontak;