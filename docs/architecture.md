# Organisation

Un dépôt commun ; chaque sous-dossier de `plugins/` contient une extension indépendante avec sa version, sa documentation et son cycle de publication.

Le mode sombre est séparé des palettes : l’extension gère la préférence, le thème gère le rendu. L’attribut `data-wpt-color-mode` évite de réutiliser la classe générique `.dark` du prototype Tailwind. La clé de stockage est `wordpress-toolkit:color-mode` ; le prototype précédent n’est ni modifié ni migré automatiquement.

Créer les ZIP avec `python3 scripts/package.py`. Le script utilise une liste explicite des extensions distribuées. Une future version pourra automatiser cette commande dans GitHub Actions ; aucun workflow ni publication automatique n’est activé dans cette version.

Préférer des ajouts indépendants et documenter les dépendances nécessaires à chaque utilitaire. Ne pas installer Tailwind pour un simple bouton.
