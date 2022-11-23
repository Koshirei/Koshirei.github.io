"use strict";

const qs = (val) => {
    return document.querySelector(val)
}

const qsa = (val) => {
    return document.querySelectorAll(val)
}

const MENUS = qsa(".collapse_title");

//on rotate le ">" quand on click sur un menu defilant
MENUS.forEach((menu)=>{
    menu.addEventListener("click",(e)=>{
        let svg = e.target.children[0];

        if (svg.style.transform === "" || svg.style.transform === "rotate(0deg)"){
            svg.style.transform = "rotate(90deg)";
        }else{
            svg.style.transform = "rotate(0deg)";
        }
    })
})