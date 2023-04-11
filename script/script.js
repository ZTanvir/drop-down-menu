const dropDownMenu = document.querySelector(".drop-down__menu");
const dropDownSubMenu = document.querySelector(".drop-down__submenu");
const dropSubMenuOptions = document.querySelectorAll(".drop-down__submenu > a")
const dropDownImg = document.querySelector(".drop-down__menu-link");
const dropDownText = document.querySelector(".drop-down__menu-text");

function dropDown(clickElement,addClassElement,cssClass){
    clickElement.addEventListener("click",(e)=>{
        e.preventDefault();
        addClassElement.classList.toggle(cssClass);
        let imageSrc = dropDownImg.src;
        if(imageSrc.includes("expandmore")){
            dropDownImg.src = "./images/expandless.svg";
        }else{
            dropDownImg.src = "./images/expandmore.svg";
        }
    })
}
dropDown(dropDownMenu,dropDownSubMenu,"hide-menu");

dropSubMenuOptions.forEach(item=>{
    item.addEventListener("click",(e)=>{
        dropDownText.textContent = e.target.dataset.link;
        dropDownSubMenu.classList.toggle("hide-menu");
        let imageSrc = dropDownImg.src;
        if(imageSrc.includes("expandmore")){
            dropDownImg.src = "./images/expandless.svg";
        }else{
            dropDownImg.src = "./images/expandmore.svg";
        }
    })
})