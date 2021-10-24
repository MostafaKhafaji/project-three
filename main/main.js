let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", function() {
    if (this.scrollY >= 600) {
        scrollTop.style.display = "flex";
        let a = setTimeout(() => {
            scrollTop.style.opacity = "0.5";
        }, 50);
    } else {
        scrollTop.style.opacity = "0";
        scrollTop.style.display = "none";
    }
});

scrollTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
    });
});

let slider = document.querySelector("#nav-button");
let nav = document.querySelector(".main-nav");
let exit = document.querySelector(".cross");
let links = document.querySelectorAll(".active");

slider.addEventListener("click", function() {
    nav.classList.toggle("slider");
});

exit.addEventListener("click", function() {
    nav.classList.toggle("slider");
});

links.forEach((element) => {
    element.addEventListener("click", function() {
        nav.classList.remove("slider");
    });
});