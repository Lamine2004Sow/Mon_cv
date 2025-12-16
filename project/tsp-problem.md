---
layout: default
title: Résolution du TSP
---

# Optimisation du Voyageur de Commerce (TSP)

**Date :** Décembre 2024  \
**Auteur :** Mouhamadou Lamine SOW  \
**Cours :** Optimisation Combinatoire  \
---

## 1. Définition du Problème

Le problème du voyageur de commerce (*Traveling Salesperson Problem*, TSP) est un classique de l’optimisation combinatoire.

L’objectif est de trouver un **cycle hamiltonien de coût minimum** dans un graphe complet 

$ G = (V, E) $.

Si $c_{ij} $ est la distance entre la ville $i $ et la ville $ j $, on cherche à minimiser :

$\min \sum_{i \in V} \sum_{j \in V, j \neq i} c_{ij} x_{ij}$

où $ x_{ij} $ est une variable binaire égale à 1 si l’arc $ (i, j) $ est utilisé.

---

## 2. Mes Actions et Méthodologie

Pour aborder ce problème, j’ai suivi les étapes suivantes :

- **Génération de données** : création de 50 villes aléatoires avec coordonnées $ (x, y) $
- **Modélisation exacte** : utilisation d’un solveur (Gurobi ou CBC) via l’API Python
- **Heuristique** : implémentation d’un algorithme du *plus proche voisin* pour comparer les temps d’exécution

---

## 3. Lignes de Code (Implémentation)

Voici comment j’ai implémenté la construction de la matrice de distance en Python :

```python
import numpy as np

def build_distance_matrix(coords):
    n = len(coords)
    dist_matrix = np.zeros((n, n))
    for i in range(n):
        for j in range(n):
            # Distance euclidienne
            dist_matrix[i][j] = np.sqrt(
                (coords[i][0] - coords[j][0])**2 + 
                (coords[i][1] - coords[j][1])**2
            )
    return dist_matrix
```

---

## 4. Résultats

J’ai comparé l’approche exacte et l’approche gloutonne.

| Nombre de villes (N) | Temps exact (s) | Temps glouton (s) | Gap (%) |
|---------------------|-----------------|-------------------|---------|
| 10                  | 0.05            | 0.001             | 0 %     |
| 20                  | 1.20            | 0.002             | 5 %     |
| 50                  | 45.3            | 0.005             | 12 %    |

### Analyse

On remarque que le temps de résolution exacte **augmente de manière exponentielle** avec $ N $, ce qui confirme la complexité **NP-difficile** du problème.

---

## 5. Conclusion

Ce TP m’a permis de comprendre les **limites des solveurs exacts** en optimisation combinatoire.

Pour des instances industrielles ($ N > 1000 $), il est impératif d’utiliser des **métaheuristiques** telles que :

- Algorithmes génétiques  
- Recherche tabou  
- Recuit simulé