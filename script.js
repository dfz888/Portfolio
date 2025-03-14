function toggleDetails(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
}

