---
layout: default
title: Dilemme du prisonnier multi-agents
lang: fr
---

# Simulation du dilemme du prisonnier itere - multi-agents

**Type :** projet IA / decision multi-agents  
**Theme :** theorie des jeux, apprentissage par renforcement, optimisation  
**Statut :** termine (code + visualisations)

---

## 1. Contexte et objectifs

Le dilemme du prisonnier itere est un cadre classique pour etudier **cooperation**, **punition** et **strategie**. Le projet vise a :
- comparer des strategies deterministes et des agents apprenants,
- mesurer l'impact de la memoire et de l'anticipation,
- produire des analyses quantitatives reproductibles.

---

## 2. Architecture et agents

- **Agents fixes** : AlwaysCooperate, AlwaysDefect, TitForTat.
- **Agent RL** : Q-learning avec politique epsilon-greedy.
- **Agent d'optimisation** : planification look-ahead et maximisation du gain espere.

L'architecture est modulaire (agents, environnement, statistiques, visualisation) pour faciliter l'extension a d'autres jeux.

---

## 3. Methode experimentale

- Tournoi round-robin entre tous les agents.
- Mesures : score moyen, stabilite, taux de victoire.
- Visualisations : heatmaps, courbes de scores, evolutions temporelles.

---

## 4. Utilisation

```bash
pip install -r requirements.txt
python main.py
```

---

## 5. Technologies

- **Langage** : Python
- **Bibliotheques** : NumPy, Pandas, Matplotlib, Seaborn

---

## 6. Liens

- Code source : [GitHub - Lamine2004Sow/dilemme-du-prisonnier](https://github.com/Lamine2004Sow/dilemme-du-prisonnier)
