document.addEventListener("DOMContentLoaded", function() {

    const currentYear = new Date().getFullYear()

    // set date counting down to
    let countDownDate = new Date(`Jan 1, ${currentYear + 1} 00:00:00`).getTime()

    const header = document.getElementById("header")
    header.textContent = `Countdown to ${currentYear + 1}`

    // update the count every 1 second
    let timer = setInterval(function () {

        // get today's date and time
        let now = new Date().getTime()

        // distance between the target date and the current date/time
        let distance = countDownDate - now

        // time calculations for days hours minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)


        // display the result in the element with id="countdown"
        document.getElementById("days").textContent = "Days: " + days
        document.getElementById("hours").textContent = "Hours: " + hours
        document.getElementById("minutes").textContent = "Minutes: " + minutes
        document.getElementById("seconds").textContent = "Seconds: " + seconds

        if (distance < 0) {
            clearInterval(timer)
            document.getElementById('countdown').innerHTML = "Happy New Year!"
        }
    }, 1000)
})