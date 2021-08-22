// Navigate between project list all, frontend, and ui/ux
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

//Active button style
all.addEventListener("click", () => {
    all.classList.add("active");
    front.classList.remove("active");
    ui.classList.remove("active");
});
front.addEventListener("click", () => {
    front.classList.add("active");
    all.classList.remove("active");
    ui.classList.remove("active");
});
ui.addEventListener("click", () => {
    ui.classList.add("active");
    front.classList.remove("active");
    all.classList.remove("active");
});