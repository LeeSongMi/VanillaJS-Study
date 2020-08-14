const title = document.querySelector("#title");
/*title.innerHTML = "Hi! From JS";
title.style.color = "white";
document.title = "I own you now";*/
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){

    title.addEventListener("click", handleClick);
}

init();
/*
function handleOffline(){
    console.log("lalala");
}
function handleOnline(){
    console.log("Ononon");
}
window.addEventListener("online", handleOnline)
window.addEventListener("offline", handleOffline) /* 인터넷 연결 종료 */

/* HTML JavaScript DOM event MDN 이벤트 열람 */
