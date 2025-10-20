
// Ancien code si fuse.js ne fonctionne plus :


/*
// Fonction utilitaire : normalise les chaînes (minuscule + sans accent)
function normalize(str) {
  return str.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
}

// Récupérer le paramètre de recherche "q"
const params = new URLSearchParams(window.location.search);
const query = params.get("q");
const resultsDiv = document.getElementById("results");

if (!query) {
  resultsDiv.innerHTML = "<p>Aucun terme de recherche fourni.</p>";
} else {
  fetch("videos.json")
    .then(res => res.json())
    .then(data => {
      // On "aplatit" le JSON en un tableau unique de { titre, url, categorie, branche }
      const allVideos = [];
      for (const categorie in data) {
        for (const branche in data[categorie]) {
          data[categorie][branche].forEach(video => {
            allVideos.push({
              titre: video.titre,
              url: video.url,
              categorie,
              branche
            });
          });
        }
      }

      // Filtrage
      const search = normalize(query);
      const matches = allVideos.filter(v =>
        normalize(v.titre).includes(search)
      );

      // Affichage
      if (matches.length === 0) {
        resultsDiv.innerHTML = `<p>Aucun résultat trouvé pour <strong>${query}</strong>.</p>`;
        return;
      }

      let showingAll = false;

      function renderResults() {
        const toShow = showingAll ? matches : matches.slice(0, 5);
        resultsDiv.innerHTML = toShow.map(v => `
          <div class="video">
            <h3>${v.titre}</h3>
            <p><em>${v.categorie} > ${v.branche}</em></p>
            <iframe width="300" height="169" src="${v.url}" frameborder="0" allowfullscreen></iframe>
          </div>
        `).join("");

        if (matches.length > 5) {
          const btn = document.createElement("button");
          btn.textContent = showingAll ? "Voir moins" : "Voir plus";
          btn.onclick = () => {
            showingAll = !showingAll;
            renderResults();
          };
          resultsDiv.appendChild(btn);
        }
      }

      renderResults();
    })
    .catch(err => {
      resultsDiv.innerHTML = "<p>Erreur lors du chargement des vidéos.</p>";
      console.error(err);
    });
}

*/
