window.analytics=function(){let e=0,t=!1;const c=()=>e++;return document.addEventListener("click",c),{destroy(){document.removeEventListener("click",c),t=!0},getClicks:()=>t?`Analytics is destroyed. Total clicks = ${e}`:e}}();