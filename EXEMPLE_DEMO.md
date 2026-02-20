# Exemples d'utilisation des démos

Ce fichier montre des exemples concrets d'utilisation des démos dans vos pages de projet.

## Exemple 1 : Formules mathématiques

### Formule inline

Le problème du voyageur de commerce cherche à minimiser la distance totale $d = \sum_{i=1}^{n-1} d_{\pi(i), \pi(i+1)} + d_{\pi(n), \pi(1)}$ où $\pi$ est une permutation des villes.

### Formule en bloc

La fonction objectif du problème anneau-étoile est :

$$
\min \sum_{i \in S} \sum_{j \in N} d_{ij} x_{ij} + \sum_{(i,j) \in E} d_{ij} y_{ij}
$$

Avec les contraintes :

$$
\begin{align}
\sum_{j \in N} x_{ij} &= 1 \quad \forall i \in N \\
x_{ij} &\leq y_j \quad \forall i \in N, j \in S \\
\sum_{j \in S} y_j &= p
\end{align}
$$

## Exemple 2 : Visualisation Matplotlib

```liquid
{% include demo.html 
   type="matplotlib" 
   id="resultats-optimisation"
   src="/assets/demos/resultats.png"
   title="Résultats de l'optimisation"
   description="Comparaison des solutions heuristiques vs exactes"
%}
```

## Exemple 3 : Démo Three.js (3D)

```liquid
{% include demo.html 
   type="threejs" 
   id="visualisation-3d-tsp"
   src="/assets/demos/tsp-3d.js"
   width="100%"
   height="600px"
   title="Visualisation 3D du TSP"
   description="Explorez la solution en 3D avec rotation et zoom"
%}
```

**Fichier `/assets/demos/tsp-3d.js`** :
```javascript
import * as THREE from 'three';

const container = document.getElementById('demo-visualisation-3d-tsp');
if (!container) return;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Exemple : villes en 3D
const cities = [
    {x: 0, y: 0, z: 0},
    {x: 10, y: 5, z: 2},
    {x: -5, y: 8, z: -3},
    // ... ajoutez vos villes
];

const cityGeometry = new THREE.SphereGeometry(0.5, 16, 16);
const cityMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

cities.forEach(city => {
    const sphere = new THREE.Mesh(cityGeometry, cityMaterial);
    sphere.position.set(city.x, city.y, city.z);
    scene.add(sphere);
});

// Ligne du cycle
const points = cities.map(c => new THREE.Vector3(c.x, c.y, c.z));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const line = new THREE.Line(geometry, material);
scene.add(line);

camera.position.set(0, 0, 30);
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
```

## Exemple 4 : Démo Gymnasium (Reinforcement Learning)

```liquid
{% include demo.html 
   type="gymnasium" 
   id="env-cartpole"
   src="/assets/demos/cartpole-demo.js"
   width="100%"
   height="500px"
   title="Environnement CartPole"
   description="Simulation d'un agent RL dans l'environnement CartPole"
%}
```

## Exemple 5 : Graphique Plotly interactif

```liquid
{% include demo.html 
   type="plotly" 
   id="comparaison-algorithmes"
   src="/assets/demos/comparison-data.json"
   width="100%"
   height="500px"
   title="Comparaison des algorithmes"
   description="Graphique interactif comparant les performances"
%}
```

**Fichier `/assets/demos/comparison-data.json`** :
```json
{
  "data": [
    {
      "x": ["Heuristique", "Exact", "Hybride"],
      "y": [1250, 1180, 1200],
      "type": "bar",
      "name": "Coût",
      "marker": {"color": ["#1f4e5f", "#d08a4b", "#6b7280"]}
    }
  ],
  "layout": {
    "title": "Comparaison des méthodes",
    "xaxis": {"title": "Méthode"},
    "yaxis": {"title": "Coût total"},
    "showlegend": false
  }
}
```

## Exemple 6 : Animation Canvas 2D

```liquid
{% include demo.html 
   type="2d" 
   id="animation-algorithme"
   src="/assets/demos/algorithm-animation.js"
   width="800px"
   height="400px"
   title="Animation de l'algorithme"
   description="Visualisation étape par étape de l'algorithme de résolution"
%}
```

## Exemple 7 : Démo avec code source

```liquid
{% include demo.html 
   type="matplotlib" 
   id="demo-avec-code"
   src="/assets/demos/graphique.png"
   title="Graphique avec code"
   description="Visualisation générée avec le code ci-dessous"
   code="import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('Graphique Matplotlib')
plt.savefig('graphique.png')"
%}
```

## Exemple complet dans une page

```markdown
---
layout: default
title: Mon Projet avec Visualisations
---

# Mon Projet

## Introduction

Ce projet résout le problème X en utilisant la méthode Y.

La fonction objectif est : $f(x) = \sum_{i=1}^{n} c_i x_i$

## Visualisations

### Graphique des résultats

{% include demo.html 
   type="matplotlib" 
   id="resultats"
   src="/assets/demos/resultats.png"
   title="Résultats"
%}

### Visualisation 3D interactive

{% include demo.html 
   type="threejs" 
   id="viz-3d"
   src="/assets/demos/viz-3d.js"
   height="600px"
   title="Visualisation 3D"
%}

## Conclusion

La solution optimale est donnée par :

$$
\min_{x \in X} f(x) = \sum_{i=1}^{n} c_i x_i
$$

sous les contraintes $\sum_{i=1}^{n} x_i = 1$.
```
