const toggleBtn = document.querySelector(".menu");
const navList = document.querySelector("nav ul");
toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("slide");
});