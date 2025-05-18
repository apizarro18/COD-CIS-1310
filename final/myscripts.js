/* the side bar position being absolute means you can press it and cause it to lock you in place because scrolling is not allowed. Now clicking it will always scroll you to the top. */

function scrollToggle() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"

    });


    setTimeout(() => {
        toggleNav();
    },450);
}
     


/* Interactions with Side Bar */

function toggleNav() {
    const sidenav = document.getElementById("sideNavBar");
    const button = document.getElementById("openBtn");
    const body = document.body;

    sidenav.classList.toggle("open");
    document.body.classList.toggle("menu-open");

    if (sidenav.classList.contains("open")) {
        button.textContent = "close";
    }   else {
        button.textContent = "contact.";
    }
}

/* Video Focus */

function focusVideo() {
    document.body.classList.add("focus-active");
}

//ensures the content is loaded prior to a script running. Then it adds focus functionality to the overlay & the video.
document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("videoOverlay"); 
    const videoContainer = document.getElementById("focusTrigger"); 

    // ensures overlay exists 
    if (overlay) {
        overlay.addEventListener("click", function (e) {
            e.stopPropagation();
            document.body.classList.add("focus-active");
            overlay.style.display = "none";
        });
    }

    //ensures video exists
    if (videoContainer) {
        videoContainer.addEventListener("click", function (e) {
            e.stopPropagation();
            document.body.classList.add("focus-active");
            overlay.style.display = "none";
        });
    }


//close focus when ESC key is hit

    document.addEventListener('keydown', function (e) {
        if (e.key === "Escape") {
            document.body.classList.remove("focus-active");
            overlay.style.display = "block";
        }
    });

//remove focus if click outside video

    document.addEventListener("click", function (e) {
        if (
            document.body.classList.contains("focus-active") &&
            !e.target.closest(".videoContainer")
        ) {
            document.body.classList.remove("focus-active");
            if (overlay) overlay.style.display = "block";
        }
    });
});
    