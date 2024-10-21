document.addEventListener('DOMContentLoaded', function() {
    verifMobile();
});

function mobileInUserAgent() {
    return /iPhone|iPad|iPod|Android|Windows Phone|BlackBerry|IEMobile|Opera Mini|webOS/i.test(navigator.userAgent);
}

function hasTouchScreen() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function verifMobile() {
    if (hasTouchScreen() && mobileInUserAgent() && window.innerWidth <= 768) {
        const sectionTelechargement = document.getElementById("telechargement");
        
        // nouveau contenu pour la version mobile
        const contenuMobile = `
        <div class="affichage_si_exec_sur_mobile">
            <img class="img_warning" src="icons/warning.png" alt="Avertissement" title="⚠️ Plateforme non supportée! ⚠️">
            <div>
                <h1>Plateforme non supportée!</h1>
                <br>
                <h3><i>Aïe, désolé, mais GoTime n'est pas disponible sur appareil mobile.</i></h3>
                <br>
                <sup><i>Si cette avertissement est affiché alors qu'il est injustifé (vous n'êtes pas sur un appareil mobile),
                vous pouvez signaler le faux positif <a href="https://github.com/pandaroux007/pandaroux007.github.io/issues" target="_blank">sur le GitHub</a></i></sup>
            </div>
        </div>
        `;
        
        // remplacer le contenu de la section
        sectionTelechargement.innerHTML = contenuMobile;
        sectionTelechargement.classList.add('affichage_si_exec_sur_mobile');
    }
}