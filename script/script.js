const dropDownMenu = document.querySelector(".drop-down__menu");
const dropDownSubMenu = document.querySelector(".drop-down__submenu");
const dropDownImg = document.querySelector(".drop-down__menu-link");


function dropDown(clickElement,addClassElement,cssClass){
    clickElement.addEventListener("click",(e)=>{
        e.preventDefault();
        addClassElement.classList.toggle(cssClass);
        let imageSrc = dropDownImg.src;
        if(imageSrc.includes("expandmore")){
            dropDownImg.src = "/drop-down-menu/images/expandless.svg";
        }else{
            dropDownImg.src = "/drop-down-menu/images/expandmore.svg";
        }
    })
}
dropDown(dropDownMenu,dropDownSubMenu,"hide-menu");