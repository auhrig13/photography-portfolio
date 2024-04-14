// NAV--MOBIlE HAMBURGER MENU & WORK SUB-MENU
const hamburger = document.querySelector(".hamburger");
const hamburgerBarTop = document.querySelector(".bar-top");
const hamburgerBarBottom = document.querySelector(".bar-bottom");
const navMobileMenu = document.querySelector(".mobile-menu");
const workMobileButton = document.getElementById("work-mb-button");
const workMobileMenu = document.querySelector(".work-mobile");

hamburger.addEventListener("click", mobileHamburgerToggle);
workMobileButton.addEventListener("click", mobileWorkMenuToggle);

function mobileHamburgerToggle() {
    hamburgerBarTop.classList.toggle("bar-top-x");
    hamburgerBarBottom.classList.toggle("bar-bottom-x");
    navMobileMenu.classList.toggle("mobile-menu-visible");
    workMobileMenu.classList.remove("work-mobile-active")

}

function mobileWorkMenuToggle() {
    workMobileMenu.classList.toggle("work-mobile-active")
}

// NAV--DESKTOP WORK SUB-MENU
const workDesktopButton = document.getElementById("work-dt-button");
const workDesktopMenu = document.querySelector(".work-desktop");

workDesktopButton.addEventListener("click", toggleDesktopWorkMenu)

function toggleDesktopWorkMenu() {
    workDesktopMenu.classList.toggle("work-desktop-active")
}

// HOMEPAGE--ASTROLOGY QUESTION
const yesButton = document.getElementById("yes")
const noButton = document.getElementById("no")
const astroAnswer = document.getElementById("astro-a")

yesButton.addEventListener('click', yesAnswer)
noButton.addEventListener('click', noAnswer)

function yesAnswer() {
    astroAnswer.innerText =  "i'm so sorry."
}

function noAnswer() {
    astroAnswer.innerText =  "i forgive you."
}