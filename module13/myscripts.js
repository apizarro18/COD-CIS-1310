

/* Interactions with Side Bar */

function openNav() {
    document.getElementById("sideNavBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNavBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}