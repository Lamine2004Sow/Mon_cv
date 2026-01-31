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

- **Lecture d'instances TSPLIB95** et construction de la matrice de distances.
- **Heuristique p-median glouton** pour selectionner les stations.
- **Heuristique TSP plus proche voisin** pour construire l'anneau.
- **Descente stochastique** (swap station / non-station) pour ameliorer la solution.
- **Option exacte** via PuLP pour les petites instances.
- **Visualisations** des stations, du cycle et des affectations.

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

- Rapport PDF : [SAE_Optim_2025-2026.pdf](https://lamine2004sow.github.io/assets/SAE_Optim_2025-2026.pdf)
- Code source : [GitHub - Lamine2004Sow/s](https://github.com/Lamine2004Sow/s)

---

## 5. Technologies

- **Langage** : Python
- **Bibliotheques** : NumPy, Matplotlib, PuLP
- **Donnees** : TSPLIB95
- **Outillage** : Makefile, .venv
