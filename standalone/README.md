# Projets autonomes

Utilitaires HTML/CSS/JavaScript utilisables sans WordPress.

| Projet | Documentation | Téléchargement |
| --- | --- | --- |
| Tailwind Dark Mode Toggle | [Installation et personnalisation](tailwind-dark-mode-toggle/) | [ZIP](downloads/tailwind-dark-mode-toggle.zip) |

Extraire le ZIP, puis ouvrir `index.html` dans le dossier du projet avec une connexion Internet : la démonstration utilise le CDN Tailwind.

La copie a été importée depuis [le dépôt source](https://github.com/Niuwebpro/tailwind-dark-mode-toggle) au commit [547f073](https://github.com/Niuwebpro/tailwind-dark-mode-toggle/commit/547f0730e0c94a34d43ffbbf508fe537b8a40000). Le dépôt source reste indépendant et n’est pas synchronisé automatiquement.

Le ZIP contient l’intégralité du dossier `tailwind-dark-mode-toggle/`. Pour le reconstruire depuis la racine du dépôt avec Python 3 :

```bash
python3 -c "import shutil; shutil.make_archive('standalone/downloads/tailwind-dark-mode-toggle', 'zip', 'standalone', 'tailwind-dark-mode-toggle')"
```
