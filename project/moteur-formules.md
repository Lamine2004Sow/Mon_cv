---
layout: default
title: Moteur de formules C++
lang: fr
---

# Moteur de formules C++ - AST, derivation, simplification

**Type :** projet logiciel (C++)  
**Theme :** parsing, calcul symbolique, evaluation numerique  
**Statut :** termine (code + tests)

---

## 1. Objectif

Concevoir une bibliotheque C++ capable de **parser**, **evaluer** et **deriver** des expressions mathematiques, avec un AST type et des operations symboliques.

---

## 2. Fonctionnalites principales

- **AST generique** avec evaluation numerique.
- **Derivation symbolique** et **gradient**.
- **Simplification** (regles algebraiques de base).
- **Export Graphviz DOT** pour visualiser l'arbre.
- **Methode de Newton** pour la recherche de racines.

Fonctions supportees : `sin`, `cos`, `tan`, `atan`, `ln`, `sqrt`, `pow` et `e(...)` pour l'exponentielle.

---

## 3. Parsing

Le parseur implemente une **descente recursive** avec gestion des priorites :
- puissances `^`
- produits/divisions `*` `/`
- sommes/differences `+` `-`
- parentheses et unaires

---

## 4. Exemple de compilation

```bash
g++ -std=c++17 -o demo demo_advanced.cpp parser.cpp formula.cpp -I.
./demo
```

---

## 5. Technologies

- **Langage** : C++17
- **Outillage** : g++, Graphviz (pour le DOT)
