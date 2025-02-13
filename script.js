function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function toggleProjects() {
    const container = document.getElementById('projects-container');
    const btn = document.getElementById('show-more-btn');
    if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');
        btn.textContent = 'Show More';
    } else {
        container.classList.add('expanded');
        btn.textContent = 'Show Less';
    }
}