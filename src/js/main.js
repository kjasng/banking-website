let dragBtn = document.querySelector("#dragBtn")
let mobileMenu = document.querySelector("#menu-mobile")
let path = location.pathname;

dragBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})


console.log(path);
