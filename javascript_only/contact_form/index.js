document.addEventListener("DOMContentLoaded", function() {
    const formFields = document.querySelectorAll('#contactForm input[type="text"], #contactForm input[type="email"], #contactForm textarea');

    // function to check field and apply border color
    function checkField(input) {
        if (!input.value.trim()) {
            // if field is empty, mark as invalid with a red border
            input.style.border = "2px solid red";
        } else {
            // if field is not empty, mark as valid with a green border
            input.style.border = "2px solid green"
        }
    }

    // attach submit event listener to the form
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        let isValid = true;

        // check if all fields are filled out
        formFields.forEach(function(input) {
            if (!input.value.trim()) { // check if the field is empty
                isValid = false; // mar the form as invalid
                input.style.border = "2px solid red"; // highlight empty fields in red
            } else {
                input.style.border = "2px solid green"; // mark filled fields with a green border
            }
        });

        if (!isValid) {
            event.preventDefault(); // prevent form submission
            alert('please fill out all fields');
        }
    });

    // attach input event listener tp each form field
    formFields.forEach(function(input) {
        input.addEventListener('input', function() {
            checkField(input); // call checkfield function whenever user inputs data into a field
        })
    })
})



