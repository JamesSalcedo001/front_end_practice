// select the open and close button and the sidebar 
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');


// listen for a click event on the open button to open the sidebar
openBtn.addEventListener('click', function() {
    sidebar.style.width = '250px'; 
})

// listen for click event on the button to close the sidebar
closeBtn.addEventListener('click', function() {
    sidebar.style.width = '0';
})