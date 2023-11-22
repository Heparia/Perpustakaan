const display = (data) => {
    document.getElementById("content").innerText = data.items[0].volumeInfo.title;
}

export default display;