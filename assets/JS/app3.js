let menu = document.querySelector('.nav-menu-mobile')
let closeMenu = document.querySelector('.nav-mobile-close')
let navIcon = document.querySelector(".nav-bars")
let navIconBtn = document.querySelector(".nav-bars i")

navIcon.addEventListener('click',function(){
    if(navIconBtn.classList.contains('fa-bars')){
        menu.style.left = '0'
        navIconBtn.className = 'fa-solid fa-times'
    }
    else{
        menu.style.left = '-100%'
        navIconBtn.className = 'fa-solid fa-bars'
    }
})
closeMenu.addEventListener('click',function(){
    menu.style.left = '-100%'
    navIconBtn.className = 'fa-solid fa-bars'
})