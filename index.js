//loading circle

window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add
            ("display");
    }, 1000);
};



//Hamburger Menu
document.querySelector(".hamburger-menu")
    .addEventListener("click", () => {
        document.querySelector(".container").classList.toggle
            ("change");
    });


//Scroll up button

document.querySelector(".scroll-btn").addEventListener
    ("click", () => {
        document.querySelector("html").style.scrollBehavior = "smooth";
        setTimeout(() => {
            document.querySelector("html").style.
                scrollBehavior = "unset";
        }, 2000);
    });


