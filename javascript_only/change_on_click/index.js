document.addEventListener("DOMContentLoaded", function() {
    const followButton = document.getElementById("followButton")

    followButton.addEventListener("click", function() {
        if (this.textContent === "Follow") {
            this.textContent = "Following"
            this.style.backgroundColor = "#4CAF50"
            this.style.color = "white"
        } else {
            this.textContent = "Follow"
            this.style.backgroundColor = ""
            this.style.color = ""
        }
    })
})