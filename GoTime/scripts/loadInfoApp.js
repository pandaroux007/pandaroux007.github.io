async function majVersionEtLienTelechargement() {
    const auteurApp = 'pandaroux007';
    const nomApp = 'GoTime';
    const urlApiGithub = `https://api.github.com/repos/${auteurApp}/${nomApp}/releases/latest`;

    try {
        const reponseApi = await fetch(urlApiGithub, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        if(reponseApi.ok) {
            const donnees = await reponseApi.json();
            if(typeof donnees === 'object') {
                if(donnees.zipball_url) majLienTelechargementHtml(donnees.zipball_url);
                if(donnees.tag_name) majVersionHtml(donnees.tag_name);
            }
        }
        else {
            throw new Error(`HTTP erreur! état: ${reponseApi.status}`);
        }
    }
    catch(erreur) {
        console.error('Erreur lors de la récupération des informations de version: ', erreur);
    }
}

function majVersionHtml(version) {
    // MàJ version
    const versionElement = document.getElementsByClassName('version_app');
    if (versionElement) versionElement.textContent = version;
}

function majLienTelechargementHtml(lienTelechargement) {
    // MàJ lien téléchargement
    const boutonTelechargement = document.getElementById('bouton_telechargement');
    if (boutonTelechargement) boutonTelechargement.href = lienTelechargement;
}

document.addEventListener('DOMContentLoaded', () => {
    majVersionEtLienTelechargement();
});