const all = document.getElementById("btnAll");
const front = document.getElementById("btnFront");
const ui = document.getElementById("btnUI");
const projectAll = document.querySelector(".project-list-all");
const projectFront = document.querySelector(".project-list-frontend");
const projectUI = document.querySelector(".project-list-uiux");
all.addEventListener("click", () => {
    projectAll.style.display = "flex";
    projectFront.style.display = "none";
    projectUI.style.display = "none";
});

front.addEventListener("click", () => {
    projectAll.style.display = "none";
    projectFront.style.display = "flex";
    projectUI.style.display = "none";
});

ui.addEventListener("click", () => {
    projectAll.style.display = "none";
    projectFront.style.display = "none";
    projectUI.style.display = "flex";
});
