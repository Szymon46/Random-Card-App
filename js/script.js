"use strict";
/*
 * TODO
 * Do the animation of card flipping when clicked.
 * Make the reset button.
 */
const startBtn = document.querySelector(".start-btn");
const images = document.querySelectorAll(".img");
let listen = true;
function startApp() {
    let i = 1;
    startBtn.style.animationName = "fade-out";
    images.forEach((item) => {
        item.style.animationDelay = `${i}s`;
        item.style.animationName = `fade-in${i}`;
        i++;
    });
    setTimeout(() => {
        images.forEach((item) => {
            item.style.cursor = "pointer";
        });
    }, 6000);
    setTimeout(addOnClick, 6100);
}
function handleCard(item) {
    if (listen) {
        listen = false;
        images.forEach((item) => {
            item.style.cursor = "default";
        });
        item.style.animationDelay = "0s";
        item.style.animationName = "slide-out";
        setTimeout(() => {
            item.setAttribute("src", `./img/${Math.floor(Math.random() * 13 + 1)}.png`);
            item.style.animationName = "slide-in";
        }, 500);
    }
}
function addOnClick() {
    images.forEach((item) => {
        item.addEventListener("click", () => handleCard(item));
    });
}
startBtn.addEventListener("click", startApp /*runner*/);
