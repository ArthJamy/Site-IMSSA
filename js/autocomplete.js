// js/autocomplete.js
// Centralisation du chargement vidéos + suggestions natives navigateur avec Fuse.js

async function loadVideos() {
    try {
        const response = await fetch("videos.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const videosData = await response.json();

        // Transformer en tableau plat
        const videos = [];
        for (const categorie in videosData) {
            for (const branche in videosData[categorie]) {
                videosData[categorie][branche].forEach(video => {
                    videos.push({
                        titre: video.titre,
                        url: video.url,
                        categorie,
                        branche
                    });
                });
            }
        }

        return videos;
    } catch (error) {
        console.error("Erreur lors du chargement des vidéos:", error);
        throw error;
    }
}

async function setupAutocomplete() {
    const input = document.getElementById("searchInput");
    const datalist = document.getElementById("suggestions");
    if (!input || !datalist) return;

    const videos = await loadVideos();

    input.addEventListener("input", () => {
        const query = normalizeString(input.value.trim());
        datalist.innerHTML = "";
        if (query.length < 2) return;

        // On normalise les champs aussi avant de les passer à Fuse
        const normalizedVideos = videos.map(v => ({
            ...v,
            titreNorm: normalizeString(v.titre),
            categorieNorm: normalizeString(v.categorie),
            brancheNorm: normalizeString(v.branche)
        }));

        const fuse = new Fuse(normalizedVideos, {
            keys: ["titreNorm", "categorieNorm", "brancheNorm"],
            threshold: 0.3,
            minMatchCharLength: 2
        });

        const results = fuse.search(query).slice(0, 8);
        results.forEach(r => {
            const opt = document.createElement("option");
            opt.value = r.item.titre; // on garde le titre d’origine pour l’affichage
            datalist.appendChild(opt);
        });
    });

    // Fonction utilitaire globale
    function normalizeString(str) {
        return str
            .normalize("NFD") // décompose les lettres accentuées
            .replace(/\p{Diacritic}/gu, "") // supprime les accents
            .toLowerCase(); // rend la recherche insensible à la casse
    }

}

// Si tu veux l’appeler automatiquement si un champ existe :
document.addEventListener("DOMContentLoaded", setupAutocomplete);
