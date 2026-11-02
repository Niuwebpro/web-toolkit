# WordPress Toolkit

Petits utilitaires WordPress indépendants, simples à installer et à faire évoluer.

| Dossier | Rôle | État |
| --- | --- | --- |
| `plugins/dark-mode-toggle/` | Bouton mode sombre : bloc Gutenberg et shortcode | Version initiale 0.1.0 — validation sur WordPress à effectuer |
| `snippets/` | Exemples CSS indépendants | Exemple de palette clair/sombre |
| `docs/` | Installation, architecture et vérifications | Disponible |

Chaque extension a sa propre version et son propre ZIP. **Le ZIP de ce dépôt entier ne s’installe pas dans WordPress.**

## Démarrer

[Télécharger le ZIP installable du bouton mode sombre](downloads/dark-mode-toggle-0.1.0.zip)

1. Exécuter `python3 scripts/package.py` (Python 3, bibliothèque standard uniquement).
2. Installer `dist/dark-mode-toggle-0.1.0.zip` depuis Extensions → Ajouter une extension → Téléverser.
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

MIT pour le code de ce dépôt. Voir [LICENSE](LICENSE).
