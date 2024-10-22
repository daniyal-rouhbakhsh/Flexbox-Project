let menu = document.querySelector('.nav-menu')
let menuIcon = document.querySelector('.nav-bars')
let menuIconBtn = document.querySelector('.nav-bars i')
menuIcon.addEventListener('click',function(){
    if(menuIconBtn.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuIconBtn.classList = "fa fa-times"
    }
    else if(menuIconBtn.classList.contains("fa-times")){
        menu.style.left = "-100%"
        menuIconBtn.classList = "fa fa-bars"
    }
})