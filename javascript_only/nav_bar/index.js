// active link highlighting

// select all <a> elements inside elements with the class 'nav-item'
document.querySelectorAll('.nav-item a').forEach(link => {
    // add a click event listener to each link
    link.addEventListener("click", function(e) {
        e.preventDefault(); // prevent the default link behavior (navigating to the link)
        
        const currentlyActiveLink = document.querySelector('.nav-item a.active')
        if (currentlyActiveLink) {
            currentlyActiveLink.classList.remove('active');
        }

        // add the 'active' class to the clicked link ( the 'this' keyword refers to the link that was clicked)
        this.classList.add('active')
    })
})

// toggle button for responsive navbar

// select the element with the class 'toggle-button'
const toggleButton = document.querySelector(".toggle-button");
// select the element with the class 'navbar-nav' which is the container of the navigation links
const navbarMenu = document.querySelector(".navbar-nav");


// add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // toggle the 'active' class on the navbarMenu element
    // when 'active' class is added. the menu is shown, when removed, the menu is hidden
    navbarMenu.classList.toggle('active');
});