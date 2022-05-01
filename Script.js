import darkTheme from "./JS/dark_theme.js";
import showMenu from "./JS/hamburger_btn.js";


const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{

    showMenu(".hamburger",".mobile-menu",".mobile-menu a");
   
})

darkTheme(".dark-theme");

