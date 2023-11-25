const theme = (value) => {
    // 0 untuk dark mode
    // 1 untuk light mode
    const switcher = document.getElementById('switch-theme');
    if(value==0) {
        switcher.style.animation = "moveLeft 2s linear";
        console.log("berhasil mengubah tema menjadi dark");
    } else {
        switcher.style.animation = "moveLight 2s linear";
        console.log("berhasil mengubah tema menjadi light");
    }
}

export default theme;