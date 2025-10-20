# 📂 Mettre à jour un fichier JSON sur le site IMSSA

Ce guide explique comment ajouter ou remplacer un fichier JSON dans la racine du dépôt **Site-IMSSA** sur GitHub.

---

## 🧭 Étape 1 – Accéder au dépôt

1. Rendez-vous sur la page GitHub du projet :
   👉 [https://github.com/ArthJamy/Site-IMSSA](https://github.com/ArthJamy/Site-IMSSA)

2. Assurez-vous d’être connecté à votre compte GitHub autorisé à modifier le dépôt.

---

## ⬆️ Étape 2 – Importer le fichier

1. Cliquez sur le bouton **Add file** (en haut à droite de la liste des fichiers).
2. Choisissez **Upload files**.
   *(Voir l’image ci-dessous pour repère visuel)*
3. Glissez-déposez votre fichier JSON dans la zone prévue,
   ou cliquez sur **choose your files** pour le sélectionner manuellement.

---

## 💾 Étape 3 – Valider le changement

1. En bas de la page, laissez le message par défaut **“Add files via upload”**, ou indiquez un nom plus précis (ex. : “Update videos.json”).
2. Laissez cochée l’option **“Commit directly to the main branch”**.
3. Cliquez sur le bouton vert **Commit changes**.

---

## 🔁 Étape 4 – Mettre à jour le site

L’actualisation est automatique :

* Attendez environ **1 minute** après le commit.
* Puis, rechargez le site avec **Ctrl + F5** pour forcer le rafraîchissement du cache (sinon, l’ancien fichier JSON peut encore être affiché).

---

## ✅ Conseils

* Le fichier doit s’appeler exactement comme celui qu’il remplace (ex. : `videos.json`), sinon le site ne le reconnaîtra pas.
* Si vous avez une erreur d’affichage, videz le cache du navigateur et rechargez la page.
