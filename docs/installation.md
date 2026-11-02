# Installation et palettes

## Installer le bouton

Installer uniquement le ZIP `dark-mode-toggle-0.1.0.zip`, puis activer **Bouton mode sombre**. Dans l’éditeur de site, modifier l’en-tête et ajouter le bloc du même nom. Enregistrer le modèle. Dans un contenu classique, utiliser `[dark_mode_toggle]`.

Le bouton **Système** revient à la préférence de l’appareil et supprime le choix manuel enregistré. Le switch impose ensuite un choix clair ou sombre. Plusieurs boutons sont synchronisés.

## Adapter le thème

Le thème doit utiliser des variables CSS sémantiques (fond, texte, surface, bordure, lien) dont la valeur change sous `html[data-wpt-color-mode="dark"]`.

Le fichier `snippets/color-palette.css` est un exemple **à adapter**, pas une prise en charge universelle. Ajouter ce CSS dans un thème enfant ou dans le CSS additionnel approprié. Ne pas modifier directement Twenty Twenty-Five.

Sur un thème FSE, identifier les couleurs réellement utilisées dans `theme.json` et les styles globaux. Relier leurs usages aux variables sémantiques ou surcharger les variables de palette correspondantes en mode sombre. Les couleurs définies directement sur certains blocs peuvent prendre le dessus. Tester chaque page, le logo, les formulaires et les blocs tiers.

Personnaliser l’accent du bouton :

```css
.wpt-dark-mode { --wpt-toggle-accent: #0f766e; }
```

## Cache et performance

Le petit script `assets/init.js` se charge dans l’en-tête pour appliquer le choix avant l’affichage. L’exclure du report/délai des scripts dans les extensions d’optimisation. Le script de contrôle se charge en pied de page. Les fichiers sont chargés sur le site public même sur les pages sans bouton, afin que le mode persiste.

Désactiver l’extension cesse d’appliquer l’attribut de thème au prochain chargement. Retirer également le CSS ajouté si nécessaire. La préférence locale reste dans le navigateur ; aucune donnée de site n’est supprimée.
