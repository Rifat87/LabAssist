//Animate on Scroll Initialize //
AOS.init();

// ==== GSAP Animations ==== //
// Header logo //
gsap.from(".h-nav-div", {
  opacity: 0,
  y: -10,
  delay: 0.1,
  duration: 0.1,
});
// Navigation Menu //
gsap.from(".nav-menu-list .nav-menu-item", {
  opacity: 0,
  y: -10,
  delay: 0.2,
  duration: 0.2,
  stagger: 0.1,
});
// Toggle Button //
gsap.from(".nav-menu-toggle-btn", {
  opacity: 0,
  y: -10,
  delay: 0.3,
  duration: 0.2,
});
// Main Heading //
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 0.5,
  duration: 0.2,
});
// Wrapper Text //
gsap.from(".wrapper-info-text", {
  opacity: 0,
  y: 20,
  delay: 0.8,
  duration: 0.5,
});
// Mid part Buttons //
gsap.from(".wrapper-btn", {
  opacity: 0,
  y: 20,
  delay: 1,
  duration: 0.5,
});
// Side Image //
gsap.from(".wrapper-project-img img", {
  opacity: 0,
  y: 20,
  delay: 1.2,
  duration: 0.5,
});
//Footer Animation//
gsap.from(".footer", {
  opacity: 0,
  y: 20,
  delay: 0.7,
  duration: 0.5,

});
gsap.from(".footer-content h3", {
  opacity: 0,
  y: 20,
  delay: 0.5,
  duration: 0.5,
});
gsap.from(".footer-content p", {
  opacity: 0,
  y: 20,
  delay: 0.8,
  duration: 0.5,
});
gsap.from(".contact", {
  opacity: 0,
  y: 20,
  delay: 1,
  duration: 0.5,
});
gsap.from(".footer-bottom", {
  opacity: 0,
  y: 20,
  delay: 1.2,
  duration: 0.5,
});

//Apply javascript on items
const navcls = document.getElementById("nav-menu"),//class diye call korle ase na
  toggleBtn = document.getElementById("toggle-btn"),
  closeBtn = document.getElementById("nav-menu-close-btn");

//Show menu
toggleBtn.addEventListener("click", () => {
  navcls.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  navcls.classList.remove("show");
});

//Login section works
const loginSec = document.getElementById("login-section");
const loginBtn = document.getElementById("home-login-btn");
const lgncloseBtn = document.getElementById("close-btn");
const mainDiv = document.getElementById("main-div");

window.onclick = function(event) {
  if (event.target == loginSec) {
    loginSec.style.display = "none";
  }
}

loginBtn.addEventListener("click", () => {
  document.getElementById("login-section").style.display = "flex";
});
lgncloseBtn.addEventListener("click", () => {
  document.getElementById("login-section").style.display = "none";
});

function gotoprofile(){
  window.location.href="./profile.html"
}