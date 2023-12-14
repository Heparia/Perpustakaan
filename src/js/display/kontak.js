import message from "./kontak/message";

const kontak = () => {
    const header = document.querySelector('header')
    header.innerHTML = "";
    const main = document.querySelector('main')
    main.innerHTML = "";
    main.appendChild(message())

}

export default kontak;