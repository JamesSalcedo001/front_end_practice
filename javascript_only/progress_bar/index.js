function move() {
    let elem = document.getElementById("progressBar");
    let width = 0;
    let id = setInterval(frame, 10);
    
    function frame() {
        if (width >= 100) {
            clearInterval(id)
        } else {
            width++;
            elem.style.width = width + "%"
            elem.textContent = width * 1 + "%"
        }
    }
}