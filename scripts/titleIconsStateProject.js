function majTitresIconesEtatProjets() {
    const listeIcones = document.getElementsByClassName('icone_etat_projet');
    if (listeIcones.length > 0) {
        let nbrIteration = 0;
        for (let element of listeIcones) {
            nbrIteration++;
            if(element.textContent === "✅") element.setAttribute("title", "Projet terminé avec succès!");
            else if(element.textContent === "❌") element.setAttribute("title", "Projet abandonné 🧐");
            else if(element.textContent === "🔄") element.setAttribute("title", "Projet en cours...");
            else if(element.textContent === "🚀") element.setAttribute("title", "Projet non commencé, à faire!");
            else if(element.textContent === "⏸️") element.setAttribute("title", "Projet mis en pause");
            else console.log(`L'élément ${nbrIteration} ne fait pas parti des émojis d'état connu`)
        }
    }
    else {
        console.warn("Aucun titre d'icone d'état de projet n'a été changé")
        return;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    majTitresIconesEtatProjets();
});