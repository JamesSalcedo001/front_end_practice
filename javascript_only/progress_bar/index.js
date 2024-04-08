function move() {
    let elem = document.getElementById("progressBar");
    let currentWidth = parseInt(elem.style.width, 10) || 0;
    const maxWidth = 100;
    const speed = 1;
    let id = setInterval(frame, 20)

    function frame() {
        if (currentWidth >= maxWidth) {
            clearInterval(id)
        } else {
            currentWidth += speed;
            elem.style.width = currentWidth + "%"
            elem.textContent = currentWidth + "%"
        }
    }
}