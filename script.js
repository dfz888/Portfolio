document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.add("visible");
    });
});

function toggleDetails(id) {
    const content = document.getElementById(id);
    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
}
