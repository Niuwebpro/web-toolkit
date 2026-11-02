# Outils WordPress

<p>
  <a href="https://wordpress.org/">
    <img src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png?0=" alt="Logo officiel WordPress" width="96" height="96">
  </a>
</p>

Petits utilitaires WordPress indépendants, simples à installer et à faire évoluer.

| Dossier | Rôle | État |
| --- | --- | --- |
| `plugins/dark-mode-toggle/` | Bouton mode sombre : bloc Gutenberg et shortcode | Version initiale 0.1.0 — validation sur WordPress à effectuer |
| `snippets/` | Petits extraits à ajouter manuellement dans WordPress | Avec ou sans extension WP |
| `downloads/` | ZIP prêts à télécharger et à installer | Extension mode sombre |
| `docs/` | Installation, architecture et vérifications | Disponible |

Chaque extension a sa propre version et son propre ZIP. **Le ZIP de ce dépôt entier ne s’installe pas dans WordPress.**

## À quoi servent ces dossiers ?

### `snippets/` : des petits morceaux de code à utiliser sur ton site

Un snippet est un extrait de CSS, JavaScript ou PHP qui répond à un besoin précis, sans constituer une extension complète. Il faut l’ajouter manuellement à l’endroit indiqué dans sa documentation ; il ne s’installe pas comme un ZIP et ne s’exécute pas simplement parce qu’il est présent dans ce dépôt.

Ici, [`color-palette.css`](snippets/color-palette.css) propose des couleurs claires et sombres à adapter au thème. Le bouton gère le choix du mode ; ce CSS sert de point de départ pour l’apparence du site. Voir [les instructions d’intégration](docs/installation.md).

## Démarrer

[Télécharger le ZIP installable du bouton mode sombre](downloads/dark-mode-toggle-0.1.0.zip)

1. Depuis le dossier `wordpress/`, exécuter `python3 scripts/package.py` (Python 3, bibliothèque standard uniquement).
2. Installer `downloads/dark-mode-toggle-0.1.0.zip` depuis Extensions → Ajouter une extension → Téléverser.
3. Ajouter le bloc **Bouton mode sombre** dans une page ou un en-tête FSE. Un shortcode `[dark_mode_toggle]` est aussi disponible.
4. Préparer les couleurs du thème : voir [le guide](docs/installation.md). Le bouton seul ne recolore pas le site.

## Développement

- HTML rendu en PHP, CSS et JavaScript natifs ; aucun CDN, Tailwind ou jQuery.
- Éditeur construit avec les paquets déjà fournis par WordPress.
- Tests JavaScript : `node --test tests/color-mode.test.cjs`.
- Vérification PHP : `php -l plugins/dark-mode-toggle/dark-mode-toggle.php`.
- [Procédure de validation WordPress](docs/validation.md).
- [Organisation du dépôt](docs/architecture.md).

## Licence

MIT pour le code de ce dépôt. Voir [LICENSE](../LICENSE).

Les commandes de cette page se lancent depuis `wordpress/`. Le script écrit directement dans `wordpress/downloads/` ; il n’y a plus de copie manuelle depuis `dist/`.

## Logo et attribution

Le logo affiché provient de la [page officielle des logos WordPress](https://wordpress.org/about/logos/). Il sert uniquement à identifier la plateforme concernée par ces utilitaires ; ce dépôt est un projet indépendant, non affilié à WordPress.

WordPress et son logo sont des marques de la WordPress Foundation. Leur utilisation reste soumise à la [politique des marques](https://wordpressfoundation.org/trademark-policy/) : le logo n’est pas libre de toute restriction et n’est pas couvert par la licence MIT du code de ce dépôt.
