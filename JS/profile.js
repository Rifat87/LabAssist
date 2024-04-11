let sideNav = document.getElementById("side-nav");
let toggleBtn = document.getElementById("sidenav-toggle-btn");
let closeBtn = document.getElementById("sidenav-close-btn");

toggleBtn.addEventListener("click", () => {
    document.getElementById("side-nav").style.display = "block";
});
closeBtn.addEventListener("click", () => {
    document.getElementById("side-nav").style.display = "none";
});
window.addEventListener("load", () => {
    if (window.innerWidth > 768) {
        sideNav.style.display = "block";
    } else {
        sideNav.style.display = "none";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        sideNav.style.display = "block";
    } else {
        sideNav.style.display = "none";
    }
});

var editBtn = document.getElementById("edit-icon");
var editProfile = document.getElementById("edit-profile-section");
var editCloseBtn = document.getElementById("profile-close-btn");

editBtn.addEventListener("click", () => {
    
    editProfile.style.display="flex";
});

editCloseBtn.addEventListener("click",()=>{
    editProfile.style.display="none";
});