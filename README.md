# Portfolio Académique - Mouhamadou Lamine SOW

Portfolio académique et professionnel construit avec Jekyll et déployé sur GitHub Pages.

## 🌐 Accès

- **Site principal** : [lamine2004sow.github.io/Mon_cv](https://lamine2004sow.github.io/Mon_cv)
- **Page d'accueil** : [lamine2004sow.github.io](https://lamine2004sow.github.io)

## 🚀 Technologies

- **Jekyll** : Générateur de site statique
- **GitHub Pages** : Hébergement
- **HTML5 / CSS3** : Design moderne et responsive
- **JavaScript** : Fonctionnalités interactives (changement de langue)
- **MathJax** : Support des formules mathématiques LaTeX

## 📁 Structure

```
.
├── _config.yml          # Configuration Jekyll
├── _layouts/
│   └── default.html     # Layout principal
├── assets/
│   └── images/          # Images et favicon
├── project/
│   ├── tsp-problem.md   # Rapport TSP
│   └── knapsack-problem.md
├── index.md             # Page d'accueil
├── cv.md                # CV détaillé
├── optimisation.md      # Section optimisation
├── ia.md                # Section IA/ML/RL
├── autre-projet.md      # Autres projets
├── Gemfile              # Dépendances Ruby/Jekyll
└── README.md            # Documentation
```

## 🎨 Fonctionnalités

- ✅ Design moderne et professionnel
- ✅ Support bilingue (FR/EN) avec sélecteur de langue
- ✅ Navigation latérale fixe
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Support MathJax pour les formules mathématiques
- ✅ Optimisé pour la recherche de stage
- ✅ SEO optimisé (meta tags, sitemap, Open Graph)
- ✅ Accessibilité améliorée (ARIA, navigation clavier)

## 📝 Contenu

Le site présente :
- **CV détaillé** avec compétences et projets
- **Rapports académiques** (TSP, optimisation combinatoire)
- **Projets** en IA/ML/RL
- **Autres projets** variés

## 🔧 Développement Local

### Prérequis

- Ruby (version 2.7 ou supérieure)
- Bundler

### Installation

```bash
# Installer Bundler (si nécessaire)
gem install bundler

# Installer les dépendances
bundle install

# Lancer le serveur local
bundle exec jekyll serve

# Accéder à http://localhost:4000/Mon_cv
```

### Commandes Utiles

```bash
# Construire le site
bundle exec jekyll build

# Servir avec rechargement automatique
bundle exec jekyll serve --livereload

# Servir en mode production
JEKYLL_ENV=production bundle exec jekyll serve
```

## 📦 Plugins Jekyll Utilisés

- `jekyll-feed` : Génération de flux RSS
- `jekyll-sitemap` : Génération automatique du sitemap
- `jekyll-seo-tag` : Optimisation SEO automatique

## 🚀 Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche principale.

### Configuration GitHub Pages

1. Aller dans les paramètres du dépôt
2. Activer GitHub Pages
3. Sélectionner la branche source (généralement `main` ou `master`)
4. Le site sera disponible à `https://lamine2004sow.github.io/Mon_cv`

## 📄 Licence

Ce projet est sous licence MIT.

## 📞 Contact

- 📧 Email : lamine.2004pro.sow@gmail.com
- 💻 GitHub : [@lamine2004sow](https://github.com/lamine2004sow)

## 🔄 Mises à Jour Récentes

- ✅ Correction des URLs dans robots.txt et sitemap.xml
- ✅ Ajout du Gemfile pour la gestion des dépendances
- ✅ Amélioration des meta tags SEO
- ✅ Ajout de plugins Jekyll (sitemap, SEO)
- ✅ Amélioration de l'accessibilité (ARIA, navigation clavier)
- ✅ Ajout d'un favicon
- ✅ Création d'un .gitignore complet

---

*Dernière mise à jour : Décembre 2024*
