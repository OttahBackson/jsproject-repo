let menuIcon = document.querySelector(".menu-icon-box");
let box = document.querySelector(".box");


menuIcon.addEventListener("click", () =>{
    menuIcon.classList.toggle("active");
    box.classList.toggle("active");
})
document.addEventListener("click", (e) =>{
    if (!menuIcon.contains(e.target) && box.contains(e.target)) {
        menuIcon.classList.remove("active");
        box.classList.remove("active");
    }
})