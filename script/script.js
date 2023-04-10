const dropDownMenu = document.querySelector(".drop-down__menu");
const dropDownSubMenu = document.querySelector(".drop-down__submenu");

function dropDown(clickElement,addClassElement,cssClass){
    clickElement.addEventListener("click",(e)=>{
        e.preventDefault();
        addClassElement.classList.toggle(cssClass);
    })
}
dropDown(dropDownMenu,dropDownSubMenu,"hide-menu");