const eventKontak = () => {
    const form = document.getElementById('form-kontak');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
    });
};


export default eventKontak;