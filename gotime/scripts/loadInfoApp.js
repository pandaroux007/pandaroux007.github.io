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

        if (reponseApi.ok) {
            const donnees = await reponseApi.json();
            if (donnees && typeof donnees === 'object') {
                if(donnees.tag_name) majVersionHtml(donnees.tag_name);
                else console.warn("Numéro de version non trouvé");
                if (donnees.tag_name) {
                    const zipAsset = donnees.assets.find(asset => asset.name.endsWith('.zip'));
                    if (zipAsset && zipAsset.browser_download_url) {
                        majLienTelechargementHtml(zipAsset.browser_download_url);
                    }
                    else {
                        console.warn("Fichier ZIP non trouvé dans les assets");
                        majLienTelechargementHtml(donnees.html_url);
                    }
                }
            }
            else {
                console.exception("Les données reçues ne sont pas au format attendu");
            }
        }
        else {
            throw new Error(`HTTP erreur! état: ${reponseApi.status}`);
        }
    }
    catch(erreur) {
        console.exception('Erreur lors de la récupération des informations de version: ', erreur);
    }
}

function majVersionHtml(version) {
    // MàJ version
    const versionElements = document.getElementsByClassName('version_app');
    if (versionElements.length > 0) {
        for (let element of versionElements) {
            element.textContent = version;
        }
    }
}

function majLienTelechargementHtml(lienTelechargement) {
    // MàJ lien téléchargement
    const boutonTelechargement = document.getElementById('bouton_telechargement');
    if (boutonTelechargement) boutonTelechargement.href = lienTelechargement;
}

document.addEventListener('DOMContentLoaded', () => {
    majVersionEtLienTelechargement();
});