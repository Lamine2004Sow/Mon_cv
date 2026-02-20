---
layout: default
title: Anneau-etoile (Ring-Star)
lang: fr
---

# Anneau-etoile (Ring-Star) - SAE Optimisation 2025-2026

**Type :** projet academique en optimisation combinatoire  
**Theme :** anneau-etoile (ring-star) avec donnees TSPLIB95  
**Statut :** termine (rapport + code reproductible)

---

## 1. Contexte et objectif

Le probleme anneau-etoile combine un **cycle principal** (anneau) et des **affectations en etoile**. L'objectif est de **minimiser un cout total** compose de la longueur de l'anneau et des distances d'affectation.

L'approche adoptee vise a fournir :
- une **chaine complete** de resolution, de l'instance a la visualisation,
- une **comparaison** entre heuristiques et resolution exacte (quand possible),
- un **workflow reproductible**.

---

## 2. Approche et methodologie

Le probleme anneau-etoile peut etre formule mathematiquement comme suit :

$$
\min \sum_{i \in S} \sum_{j \in N} d_{ij} x_{ij} + \sum_{(i,j) \in E} d_{ij} y_{ij}
$$

sous les contraintes :
- $\sum_{j \in N} x_{ij} = 1$ pour tout $i \in N$ (chaque noeud est affecte a une station)
- $x_{ij} \leq y_j$ pour tout $i \in N, j \in S$ (affectation uniquement aux stations)
- $\sum_{j \in S} y_j = p$ (exactement $p$ stations)
- Les stations forment un cycle hamiltonien

Ou :
- $N$ est l'ensemble des noeuds
- $S \subseteq N$ est l'ensemble des stations selectionnees
- $d_{ij}$ est la distance entre les noeuds $i$ et $j$
- $x_{ij} = 1$ si le noeud $i$ est affecte a la station $j$
- $y_{ij} = 1$ si l'arete $(i,j)$ fait partie du cycle

**Methodes implementees :**

- **Lecture d'instances TSPLIB95** et construction de la matrice de distances.
- **Heuristique p-median glouton** pour selectionner les stations.
- **Heuristique TSP plus proche voisin** pour construire l'anneau.
- **Descente stochastique** (swap station / non-station) pour ameliorer la solution.
- **Option exacte** via PuLP pour les petites instances.
- **Visualisations** des stations, du cycle et des affectations.

### Exemple de visualisation

{% include demo.html 
   type="matplotlib" 
   id="ring-star-viz"
   src="/project/or/ring-star/ring-star-solution.png"
   title="Solution anneau-etoile"
   description="Visualisation de la solution optimale avec les stations (rouge), le cycle (bleu) et les affectations (gris)"
%}

*Note : Pour ajouter une vraie visualisation interactive, placez votre image dans le dossier `assets/demos/` ou créez une démo Three.js pour une visualisation 3D interactive.*

---

## 3. Reproductibilite

Le projet est structure autour d'un **Makefile** et d'un environnement virtuel.

```bash
make install
make run f=att48.tsp p=10
make clean
```

---

## 4. Livrables

- Rapport PDF : [SAE_Optim_2025-2026.pdf](https://lamine2004sow.github.io/project/or/ring-star/SAE_Optim_2025-2026.pdf)
- Code source : [GitHub - Lamine2004Sow/s](https://github.com/Lamine2004Sow/s)

---

## 5. Technologies

- **Langage** : Python
- **Bibliotheques** : NumPy, Matplotlib, PuLP
- **Donnees** : TSPLIB95
- **Outillage** : Makefile, .venv
