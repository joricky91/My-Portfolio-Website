const toggleBtn = document.querySelector(".toggle");
const navList = document.querySelector("nav ul");
toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("slide");
});