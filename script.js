"use strict";

let circle = document.querySelector(".circle");
circle.addEventListener("mouseover", circleEscape);

function circleEscape(e) {
  console.log("hover");
}
