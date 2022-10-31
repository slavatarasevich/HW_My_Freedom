"use strict";

let circle = document.querySelector(".circle");
circle.addEventListener("mouseover", circleEscape());

function initialPosition() {
  circle.style.left = screen.width / 2 - 50 + "px";
  circle.style.top = screen.height / 2 - 130 + "px";
}

initialPosition();

function circleEscape() {
  console.log("hover", screen.width, screen.height);
  let circleTop = "";
  let circleLeft = "";
  return function () {
    circle.style.transitionDuration = "2s";
    circle.style.top = Math.random() * (screen.height - 0) + 0 + "px";
    circle.style.left = Math.random() * (screen.width - 0) + 0 + "px";
    console.log("did it move?");
  };
}
