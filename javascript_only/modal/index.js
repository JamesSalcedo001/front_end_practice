// get modal element
const modal = document.getElementById('myModal');

// get button that opens the modal
const btn = document.getElementById('openModalBtn');

// get the element that closes the modal
const closeBtn = document.getElementsByClassName('closeBtn')[0];


// listen for open click
btn.onclick = function() {
    modal.style.display = "block";
}


// listen for close click
closeBtn.onclick = function() {
    modal.style.display = "none";
}


// listen for outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}