function tabOpen(e, tabName) {
    let tabContent = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }


    let tabLinks = document.getElementsByClassName("tab-links")
    
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";

}