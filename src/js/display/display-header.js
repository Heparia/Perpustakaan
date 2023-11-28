const DisplayHeader = () => {
    const parent = document.querySelector('header')
    parent.innerHTML = `
    <figure>
        <blockquote class="blockquote">
            <p><strong>"</strong>Buku harus dijadikan kapak untuk mencairkan lautan beku dalam diri kita.<strong>"</strong></p>
        </blockquote>
        <figcaption class="blockquote-footer">
            <cite title="Source Title">Franz Kafka</cite>
        </figcaption>
    </figure>`
}

export default DisplayHeader;