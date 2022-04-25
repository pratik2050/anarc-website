var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}


// Popup JS


const popupScreen = document.querySelector(".popup-screen");
const popuoBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
    setTimeout(() => {
        popupScreen.classList.add("active");
    }, 2000);
});

closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active");

    document.cookie = "WebsiteName = ANARC; max-age=" + 24*60*60;
});

const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

if (WebsiteCookie != -1) {
    popupScreen.style.display = "none";
} else {
    popupScreen.style.display = "flex";
}

