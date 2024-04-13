document.addEventListener("DOMContentLoaded", function() {
    const showHideBtn = document.getElementById("btn")
    const description = document.getElementById("description")


    showHideBtn.addEventListener("click", function() {
        if (description.style.display === "none") {
            showHideBtn.textContent = "hide"
            description.style.display = "block"
        } else {
            showHideBtn.textContent = "show"
            description.style.display = "none"
        }
    })
})

