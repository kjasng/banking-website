let signupBtn = document.querySelectorAll("#signup")
let signupLayout = document.querySelector("#signupLayout")
let signupForm = document.querySelector("#signupForm")
let closeSignupForm = document.querySelector("#signupForm button")

signupBtn.forEach(el => {
    el.addEventListener("click", () => {
        signupLayout.classList.remove("hidden")
        signupLayout.classList.add("fixed")

        signupForm.classList.remove("hidden")
        signupForm.classList.add("fixed")
    })
})

signupLayout.addEventListener("click", () => {
    signupForm.classList.remove("fixed")
    signupForm.classList.add("hidden")

    signupLayout.classList.remove("fixed")
    signupLayout.classList.add("hidden")
})

closeSignupForm.addEventListener("click", () => {
    signupForm.classList.remove("fixed")
    signupForm.classList.add("hidden")

    signupLayout.classList.remove("fixed")
    signupLayout.classList.add("hidden")
})