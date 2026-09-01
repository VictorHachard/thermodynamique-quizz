# Quiz — Mécanique & Thermodynamique

Petit quiz web (une page, sans dépendance) pour réviser les 34 questions
préliminaires du cours de mécanique et thermodynamique.

- **QCM** : 8 propositions par question, mélangées à chaque tirage.
- **Réponse libre** : mode flashcard, tu écris puis tu compares à la correction.
- L'ordre des questions **et** celui des propositions changent à chaque partie.
- **Fiche de révision** : les 34 questions/réponses sur une seule page, réponses masquables.
- Réponses réduites au minimum : ce qu il faut ecrire, rien de plus.
- Schemas affiches avec la correction : les 4 courbes du diagramme p-V (q22), les cycles essence et diesel (q29, q30), la machine frigo (q34).
- Écran de résultat avec la liste des questions ratées et la bonne réponse.
- Bouton « refaire seulement les ratées ».

Les enonces et les reponses suivent le questionnaire corrige (questionnaire.docx).

Les questions sont dans [`questions.js`](questions.js).

Ouvrir `index.html` dans un navigateur, ou via GitHub Pages.

## Exos & scripts Casio

[`exos.html`](exos.html) reprend les 9 exercices types de l'examen (A1-C3) et donne pour chacun :
la valeur a trouver, le script a lancer, ce qu'il faut taper question par question, et la ligne de
sortie ou lire la reponse. Les valeurs ont ete verifiees en executant chaque script.

Les 7 scripts Casio sont dans [`scripts/`](scripts/), et groupes dans [`scripts.zip`](scripts.zip)
pour le bouton de telechargement de la page. **Le zip n'est pas regenere tout seul** : apres avoir
modifie un `.py`, relancer

    python -c "import zipfile,glob,os; z=zipfile.ZipFile('scripts.zip','w',zipfile.ZIP_DEFLATED); [z.write(f,os.path.basename(f)) for f in sorted(glob.glob('scripts/*.py'))]; z.close()"

Le PDF d'exercices de la prof reste hors depot (voir `.gitignore`).
