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

  return function () {
    if (isClosed === true) {
      divContent.style.transition = "2sec";
      divContent.style.display = "flex";
      isClosed = false;
      console.log("set to false");
    } else if (isClosed === false) {
      divContent.style.display = "none";
      isClosed = true;
      console.log("set to true");
    }
  };
}
