document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('icone_menu_hamburger');
    const navMenu = document.getElementById('menu_nav_pages_et_recherche');

    hamburgerIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    // fermer le menu si click en dehors
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            hamburgerIcon.classList.remove('active');
            navMenu.classList.remove('show');
        }
    });
});