let menu = document.querySelector(".nav-menu")
let menuBtn = document.querySelector(".vertical-menu-btn")
let menuBtnIcon = document.querySelector(".vertical-menu-btn i")
let closeBtn = document.querySelector(".close-btn i")
menuBtn.addEventListener("click",function(){
    if(menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    }
    else if(menuBtnIcon.classList.contains("fa-times")){
        menu.style.left = "-100%"
        menuBtnIcon.classList = "fa fa-bars"
    }
})
closeBtn.addEventListener("click",function(){
    menu.style.left = "-100%";
    menuBtnIcon.classList = "fa fa-bars"
})