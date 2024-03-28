let track = document.querySelector(".track");
let toggle = document.querySelector(".toggle");
let toggleBtn = document.querySelector(".dark-mode-button");
let hamburgerMenu = document.querySelector(".hamburger-menu")
let sidebar = document.querySelector(".nav-sidebar");
let sidebarBtn = document.querySelector(".close-sidebar");
let body = document.querySelector("body");

track.addEventListener("click", () => {
    if (toggle.className === "toggle toggle-light") {
        toggle.className = "toggle toggle-dark";
        track.className = "track track-dark";
        body.className = "dark";
        
    } else {
        toggle.className = "toggle toggle-light";
        track.className = "track track-light";
        body.className = "";
    }
})

hamburgerMenu.addEventListener("click", () => {
    if (sidebar.className === "nav-sidebar") {
        sidebar.className = "nav-sidebar active"
    } else {
        sidebar.className = "nav-sidebar";
    }
})

sidebarBtn.addEventListener("click", () => {
    if (sidebar.className === "nav-sidebar") {
        sidebar.className = "nav-sidebar active"
    } else {
        sidebar.className = "nav-sidebar";
    }
})