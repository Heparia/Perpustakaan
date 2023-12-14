const pengguna = () => {
    if(localStorage.getItem('nama_pengguna') == null){
        const nama = prompt("Silahkan masukkan namamu!");
        localStorage.setItem('nama_pengguna', nama);
    }
}

export default pengguna;