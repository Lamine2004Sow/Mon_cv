# Guide d'utilisation des démos interactives

Ce guide explique comment intégrer des démos interactives dans vos pages de projet.

## Types de démos supportés

### 1. Three.js (3D WebGL)

Pour les visualisations 3D avec Three.js :

```liquid
{% include demo.html 
   type="threejs" 
   id="mon-visualiseur-3d"
   src="/assets/demos/mon-demo-threejs.js"
   width="100%"
   height="500px"
   title="Visualisation 3D"
   description="Une démo interactive avec Three.js"
%}
```

**Fichier JavaScript requis** (`/assets/demos/mon-demo-threejs.js`) :
```javascript
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const container = document.getElementById('demo-mon-visualiseur-3d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Votre code Three.js ici
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
```

### 2. Matplotlib (Visualisations Python)

Pour afficher des images générées avec Matplotlib :

```liquid
{% include demo.html 
   type="matplotlib" 
   id="mon-graphique"
   src="/assets/demos/mon-graphique.png"
   title="Graphique Matplotlib"
   description="Visualisation générée avec Python/Matplotlib"
%}
```

**Génération de l'image** :
```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('Graphique Matplotlib')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)
plt.savefig('assets/demos/mon-graphique.png', dpi=150, bbox_inches='tight')
```

### 3. Gymnasium (Reinforcement Learning)

Pour les environnements Gymnasium :

```liquid
{% include demo.html 
   type="gymnasium" 
   id="mon-env-rl"
   src="/assets/demos/gymnasium-demo.js"
   width="100%"
   height="450px"
   title="Environnement Gymnasium"
   description="Simulation d'un environnement de RL"
%}
```

**Fichier JavaScript requis** (`/assets/demos/gymnasium-demo.js`) :
```javascript
// Exemple avec un canvas pour afficher l'environnement
const canvas = document.getElementById('canvas-mon-env-rl');
const ctx = canvas.getContext('2d');

// Configuration du canvas
canvas.width = 800;
canvas.height = 400;

// Votre logique Gymnasium ici
// Note: Pour une vraie intégration, vous devrez utiliser un serveur backend
// ou convertir votre environnement Python en JavaScript avec Pyodide

function renderEnvironment(state) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Votre code de rendu ici
}

function startGymnasiumDemo(id) {
    if (id === 'mon-env-rl') {
        // Démarrer la simulation
        console.log('Démarrage de la démo Gymnasium');
    }
}
```

### 4. Plotly (Graphiques interactifs)

Pour les graphiques Plotly :

```liquid
{% include demo.html 
   type="plotly" 
   id="mon-graphique-plotly"
   src="/assets/demos/plotly-data.json"
   width="100%"
   height="500px"
   title="Graphique Plotly"
%}
```

**Fichier JSON requis** (`/assets/demos/plotly-data.json`) :
```json
{
  "data": [{
    "x": [1, 2, 3, 4, 5],
    "y": [1, 4, 9, 16, 25],
    "type": "scatter",
    "mode": "lines+markers"
  }],
  "layout": {
    "title": "Graphique Plotly",
    "xaxis": {"title": "X"},
    "yaxis": {"title": "Y"}
  }
}
```

**Ajouter Plotly dans le layout** :
```html
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
```

### 5. Canvas 2D

Pour les animations 2D avec Canvas :

```liquid
{% include demo.html 
   type="2d" 
   id="mon-animation-2d"
   src="/assets/demos/canvas-2d.js"
   width="800px"
   height="400px"
   title="Animation 2D"
%}
```

**Fichier JavaScript requis** (`/assets/demos/canvas-2d.js`) :
```javascript
const canvas = document.getElementById('canvas-mon-animation-2d');
const ctx = canvas.getContext('2d');

let x = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1f4e5f';
    ctx.fillRect(x, 50, 50, 50);
    x = (x + 2) % canvas.width;
    requestAnimationFrame(animate);
}
animate();
```

### 6. Iframe (Démos externes)

Pour intégrer des démos hébergées ailleurs :

```liquid
{% include demo.html 
   type="iframe" 
   src="https://example.com/ma-demo"
   width="100%"
   height="600px"
   title="Démo externe"
%}
```

### 7. Démo personnalisée

Pour vos propres démos JavaScript :

```liquid
{% include demo.html 
   type="custom" 
   id="ma-demo-custom"
   src="/assets/demos/custom-demo.js"
   title="Ma démo personnalisée"
%}
```

## Formules mathématiques

Pour les formules mathématiques, utilisez le helper `math.html` :

### Formule inline

```liquid
Le théorème d'Einstein {% include math.html formula="E = mc^2" display="inline" %} est célèbre.
```

Résultat : Le théorème d'Einstein $E = mc^2$ est célèbre.

### Formule en bloc

```liquid
{% include math.html formula="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" display="block" %}
```

Ou directement en LaTeX dans votre Markdown :

```markdown
Formule inline : $E = mc^2$

Formule en bloc :
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

## Structure des fichiers

Organisez vos démos dans le dossier `assets/demos/` :

```
publisher/
├── assets/
│   └── demos/
│       ├── threejs-demo.js
│       ├── matplotlib-graph.png
│       ├── gymnasium-env.js
│       ├── plotly-data.json
│       └── canvas-2d.js
├── _includes/
│   ├── demo.html
│   └── math.html
└── project/
    └── votre-projet.md
```

## Exemple complet dans une page de projet

```markdown
---
layout: default
title: Mon Projet avec Démo
---

# Mon Projet

## Description

Ce projet inclut plusieurs visualisations interactives.

## Visualisation 3D

{% include demo.html 
   type="threejs" 
   id="demo-3d"
   src="/assets/demos/threejs-demo.js"
   height="500px"
   title="Visualisation 3D"
   description="Une scène 3D interactive"
%}

## Graphique Matplotlib

{% include demo.html 
   type="matplotlib" 
   id="demo-matplotlib"
   src="/assets/demos/graph.png"
   title="Résultats"
   description="Graphique généré avec Python"
%}

## Formule mathématique

La solution optimale est donnée par :

{% include math.html formula="\min_{x \in X} f(x) = \sum_{i=1}^{n} c_i x_i" display="block" %}
```

## Notes importantes

1. **Three.js** : Utilisez des modules ES6 avec `type="module"` dans vos scripts
2. **Gymnasium** : Pour une vraie intégration, considérez Pyodide pour exécuter Python dans le navigateur
3. **Matplotlib** : Génèrez vos images en haute résolution (dpi=150 minimum)
4. **Performance** : Les démos lourdes peuvent ralentir la page, utilisez le lazy loading si nécessaire
5. **Responsive** : Les démos s'adaptent automatiquement aux petits écrans

## Ressources

- [Three.js Documentation](https://threejs.org/docs/)
- [Matplotlib Documentation](https://matplotlib.org/)
- [Gymnasium Documentation](https://gymnasium.farama.org/)
- [Plotly.js Documentation](https://plotly.com/javascript/)
- [MathJax Documentation](https://www.mathjax.org/)
