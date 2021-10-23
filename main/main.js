let scrollTop = document.querySelector(".scroll-top");
console.log(scrollTop);
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