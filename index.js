const headerNav= document.querySelector(".header-nav");
const hamburger= document.querySelector(".hamburger");
const menuIcon= document.querySelector(".menuIcon");
const closeIcon= document.querySelector(".closeIcon");

hamburger.addEventListener("click",()=>{
    if(hamburger.classList.contains("active")){
        hamburger.classList.toggle("active")
        headerNav.style.display="block"
        menuIcon.style.display="none"
        closeIcon.style.display="block"
    }else{
        hamburger.classList.toggle("active")
        headerNav.style.display="none"
        menuIcon.style.display="block"
        closeIcon.style.display="none"
    }
})
