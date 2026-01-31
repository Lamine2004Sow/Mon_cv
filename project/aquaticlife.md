---
layout: default
title: AquaticLife
lang: fr
---

# AquaticLife - Co-evolution morphologie-controle en fluide 2D

**Type :** projet de recherche (simulation + apprentissage)  
**Theme :** morphologie artificielle, controle, RL / neuro-evolution  
**Statut :** en cours

---

## 1. Objectif

Faire emerger **simultanement** la forme du corps et la strategie de nage d'organismes artificiels dans un fluide 2D visqueux. Aucune strategie n'est codee en dur : la physique et l'apprentissage selectionnent les solutions.

---

## 2. Principes cles

- **Organisme minimal** : segments articules + muscles contractiles.
- **Controle neuronal** : MLP ou RNN (RL ou evolution).
- **Morphologie parametrique** : nombre de segments, longueurs, masses, rigidites.
- **Selection** : distance, energie, stabilite, diversite.

---

## 3. Architecture logicielle (modules)

- `physics/` : segments, joints, drag.
- `envs/` : environnement type gym.
- `control/` : controleurs neuronaux.
- `evolution/` : GA minimal pour la morphologie.
- `rl/` : agent PPO (optionnel).
- `visualization/` : viewer temps reel.

---

## 4. Demarrage rapide (prototype)

```bash
python -m venv .venv && source .venv/bin/activate
pip install -e .
python scripts/evolve.py
```

---

## 5. Liens

- Code source : [GitHub - Lamine2004Sow/aquaticlife](https://github.com/Lamine2004Sow/aquaticlife)
