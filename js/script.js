"use strict";
/*
 * TODO
 * Do the animation of card flipping when clicked.
 * In startApp use promises/async,await instead of setTimeout(, 6100)
 */
const startBtn = document.querySelector(".start-btn");
const images = document.querySelectorAll(".img");
const resetBtn = document.querySelector(".reset-arrow");
let isNotClicked = true;
function startApp() {
    let i = 1;
    startBtn.style.animationName = "fade-out";
    images.forEach((image) => {
        image.style.animationDelay = `${i}s`;
        image.style.animationName = `fade-in${i}`;
        i++;
    });
    setTimeout(() => {
        images.forEach((image) => {
            image.style.cursor = "pointer";
        });
    }, 6000);
    setTimeout(addOnClick, 6100);
}
function handleCardOnClick(e) {
    if (isNotClicked) {
        isNotClicked = false;
        const target = e.target;
        images.forEach((image) => {
            image.style.cursor = "default";
        });
        target.style.animationDelay = "0s";
        target.style.animationName = "slide-out";
        setTimeout(() => {
            target.setAttribute("src", `./img/${Math.floor(Math.random() * 13 + 1)}.png`);
            target.style.animationName = "slide-in";
        }, 500);
    }
}
function addOnClick() {
    images.forEach((image) => {
        image.addEventListener("click", handleCardOnClick);
    });
}
function handleResetOnClick() {
    isNotClicked = true;
    startBtn.style.animationName = "";
    let i = 1;
    images.forEach((image) => {
        image.style.animationDelay = "";
        image.style.animationName = "";
        image.style.cursor = "default";
        image.setAttribute("src", "./img/tlo.png");
        image.removeEventListener("click", handleCardOnClick);
        i++;
    });
}
startBtn.addEventListener("click", startApp);
resetBtn.addEventListener("click", handleResetOnClick);
