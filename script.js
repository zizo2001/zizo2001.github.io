document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.querySelector('.current-year');
    yearSpan.textContent = new Date().getFullYear();
});