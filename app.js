const navlinks = document.querySelector(".header__nav-wrapper");
const navi = document.querySelector(".header_wrapper");
const hamburger = document.querySelector(".header__hamburger-wrapper");
const menuitem = document.querySelectorAll(".header__nav-link");
let  scrollPrevious = window.pageYOffset;
hamburger.addEventListener("click", toogleMenu)
function toogleMenu(){
    if(navlinks.classList.contains("open") && hamburger.classList.contains("open"))
    {
        navlinks.classList.remove("open");
        hamburger.classList.remove("open");
    }else{
        navlinks.classList.add("open");
        hamburger.classList.add("open");
    }
}
menuitem.forEach(
    function(menulink) {
        menulink.addEventListener("click",toogleMenu)
    }
)
window.onscroll = function(){
    let scrollCurrent = window.pageYOffset;
    if(scrollPrevious > scrollCurrent){
        navi.style.top = "0px";
    }else{
        navi.style.top = "-80px";
    }
    scrollPrevious = scrollCurrent;
}

