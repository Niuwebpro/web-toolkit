# Bouton mode sombre

Version 0.1.0 · WordPress 6.3+ · PHP 7.4+ · MIT

Bloc Gutenberg `wordpress-toolkit/dark-mode-toggle` et shortcode `[dark_mode_toggle]`.

- Bascule clair/sombre et bouton **Système** pour reprendre le choix de l’appareil.
- Choix enregistré localement dans le navigateur ; fonctionnement maintenu si le stockage est bloqué.
- Synchronisation des boutons présents à l’affichage et des onglets du même site.
- Suivi des changements système quand aucun choix manuel n’est enregistré.
- Contrôle clavier natif, libellé stable et état `aria-checked`.
- Réduction des animations limitée au composant.
- Libellé personnalisable et masquable dans les réglages du bloc.

Le mode effectif est exposé par `data-wpt-color-mode="dark"` ou `"light"` sur `<html>`. La préférence ne change pas l’administration WordPress. L’éditeur affiche un aperçu statique du contrôle.

L’extension ne recolore pas automatiquement le thème. Voir [le guide d’installation](../../docs/installation.md). Pas de suivi, de requête externe, de paramètre en base de données ni de mécanisme de mises à jour depuis GitHub.

Si le bloc est inséré après le chargement par un système AJAX, ce cas n’est pas pris en charge dans cette version. Les pages, modèles FSE et shortcodes rendus côté serveur sont le périmètre initial.

## Historique

### 0.1.0

Première version indépendante de Tailwind. Tests de comportement JavaScript automatisés ; installation et rendu WordPress à valider sur une instance de test avant production.
