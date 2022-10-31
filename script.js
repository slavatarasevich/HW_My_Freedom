"use strict";

let div = document.querySelector(".div1");
let divContent = document.querySelector(".div1-content");
div.addEventListener("click", collapse());
let div2 = document.querySelector(".div2");
let divContent2 = document.querySelector(".div1-content");
div2.addEventListener("click", collapse());
let div3 = document.querySelector(".div3");
let divContent3 = document.querySelector(".div1-content");
div3.addEventListener("click", collapse());

function collapse() {
  let isClosed = true;
  let cellSlidingDown = [
    // { backgroundColor: "white", offset: 0.1 },
    // { backgroundColor: "gray", offset: 0.5 },
    // { backgroundColor: "blue", offset: 1 },
    { transform: "translate(0%)", offset: 0.1 },
    { transform: "translate(0%, 50%)", offset: 0.5 },
  ];

  let cellTiming = {
    duration: 1000,
    iterations: 1,
  };
  return function () {
    if (isClosed === true) {
      divContent.style.display = "flex";
      divContent.animate(cellSlidingDown, cellTiming);
      isClosed = false;
      console.log("set to false");
    } else if (isClosed === false) {
      divContent.style.display = "none";
      isClosed = true;
      console.log("set to true");
    }
  };
}
