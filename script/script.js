const dropDownMenu = document.querySelector(".drop-down__menu");
const dropDownSubMenu = document.querySelector(".drop-down__submenu");

dropDownMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    dropDownSubMenu.classList.toggle("hide-menu");
})