let loginBtn = document.querySelectorAll("#login")
let loginLayout = document.querySelector("#loginLayout")
let loginForm = document.querySelector("#loginForm")
let closeBtn = document.querySelector("#loginForm button")


loginBtn.forEach(el => {
    el.addEventListener("click", (e) => {
        loginLayout.classList.remove("hidden")
        loginLayout.classList.add("fixed")

        loginForm.classList.remove("hidden")
        loginForm.classList.add("fixed")
        
    })
})

loginLayout.addEventListener("click", (e) => {
    loginLayout.classList.remove("fixed")
    loginLayout.classList.add("hidden")

    loginForm.classList.remove("fixed")
    loginForm.classList.add("hidden")
})

closeBtn.addEventListener("click", () => {
    loginLayout.classList.remove("fixed")
    loginLayout.classList.add("hidden")

    loginForm.classList.remove("fixed")
    loginForm.classList.add("hidden")
})







// if(window.innerWidth >= 768) {
//     loginBtn[0].addEventListener("click", (e) => {
//         console.log("Hello World");
        
//     })
// } else if (window.innerWidth <= 767) {
//     loginBtn[1].addEventListener("click", (e) => {
//         console.log("Hello World");
        
//     })
// }