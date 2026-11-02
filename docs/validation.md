# Validation avant production

## Vérifications automatisées

```bash
node --test tests/color-mode.test.cjs
php -l plugins/dark-mode-toggle/dark-mode-toggle.php
python3 scripts/package.py
```

Les tests Node couvrent le moteur dans un environnement simulé et les boutons : ils ne remplacent pas un navigateur ou WordPress.

## Vérifications sur un site WordPress de test

- Installer et activer le ZIP sans erreur PHP.
- Insérer le bloc dans une page et dans un en-tête FSE ; enregistrer et rouvrir l’éditeur.
- Vérifier le shortcode sur une autre page.
- Tester le libellé, sa visibilité et un libellé contenant des caractères spéciaux.
- Ajouter deux boutons et vérifier leur synchronisation.
- Tester clair, sombre et retour système ; recharger et changer de page.
- Changer la préférence système ; vérifier qu’elle ne remplace pas un choix manuel.
- Tester au clavier et avec un lecteur d’écran, avec mouvement réduit et sur mobile.
- Vérifier les couleurs, contrastes, logos, formulaires et blocs tiers avec la palette du thème.
- Tester le cache/optimiseur actif et surveiller un éventuel flash au chargement.
- Désactiver l’extension et vérifier le retour au thème initial.

Au moment de la livraison initiale : aucun test sur une instance WordPress réelle, et interpréteur PHP indisponible dans l’environnement de préparation. Ces vérifications restent à effectuer. Ne pas considérer une compatibilité universelle comme acquise.
