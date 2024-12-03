
# Système de Calcul de Feedback

## Introduction

Ce document explique comment fonctionne le système de calcul des scores et des feedbacks basé sur vos réponses à un questionnaire. Le système génère des feedbacks personnalisés en fonction des scores obtenus pour chaque section du questionnaire.

---

## Structure des Données

Le système repose sur deux fichiers JSON :
1. **JSON du Questionnaire** : Définit les questions, leurs types, et leurs choix de réponses.
2. **JSON des Feedbacks** : Contient les règles pour calculer les scores et les feedbacks associés.

---

### Exemple de JSON des Feedbacks

```json
{
  "global": "<p>Ceci est une introduction générale...</p>",
  "sections": [
    {
      "title": "Vos Spécialités",
      "label": "Spécialités",
      "feedback": "Votre score global pour les spécialités est de $scorepercent%.",
      "questions_weight": [
        { "id": "speciality_terminale", "weight": 1 },
        { "id": "speciality_premiere", "weight": 1 }
      ],
      "feedback_ranges": [
        {
          "max": 100,
          "feedback": "<p>Excellents choix pour une école vétérinaire !</p>"
        },
        {
          "max": 75,
          "feedback": "<p>Vos choix sont bons, mais pourraient être améliorés.</p>"
        }
      ]
    }
  ]
}
```

#### Description des Champs
- `global` : Message d'introduction général.
- `sections` : Liste des sections à évaluer.
    - `title` : Titre de la section.
    - `label` : Nom affiché pour la section.
    - `feedback` : Message général contenant `$scorepercent` pour afficher le score en pourcentage.
    - `questions_weight` : Liste des questions avec leurs poids dans le calcul.
    - `feedback_ranges` : Plages de scores avec feedbacks associés.

---

### Exemple de JSON du Questionnaire

```json
{
  "pages": [
    {
      "name": "specialities",
      "elements": [
        {
          "type": "tagbox",
          "name": "speciality_terminale",
          "title": "Spécialités suivies en terminale",
          "choices": [
            { "value": 5, "text": "Biologie" },
            { "value": 4, "text": "Physique" },
            { "value": 3, "text": "Mathématiques" }
          ],
          "maxSelectedChoices": 2
        }
      ]
    }
  ]
}
```

#### Types de Questions Supportés
- `tagbox` : Permet de sélectionner plusieurs réponses.
- `dropdown` : Permet de choisir une seule réponse.
- `matrix` : Questions sous forme de tableau avec lignes et colonnes.
- `rating` : Échelle de notation.

---

## Calcul des Scores

Le système calcule les scores pour chaque section en utilisant les réponses des utilisateurs et les poids des questions.

### Étapes du Calcul
1. **Récupération des Réponses** : Les réponses de l'utilisateur sont récupérées à partir de son questionnaire.
2. **Application des Poids** : Chaque réponse est multipliée par le poids défini dans `questions_weight`.
3. **Normalisation** : Le score total est divisé par le score maximum possible pour obtenir un pourcentage.
4. **Attribution des Feedbacks** : Le pourcentage est comparé aux plages définies dans `feedback_ranges` pour afficher le message correspondant.

---

### Exemple de Calcul

#### Réponses de l'Utilisateur
- Spécialités Terminale : Biologie (5) et Physique (4).
- Spécialités Première : Biologie (5), Physique (4), et Mathématiques (3).

#### Calcul
1. **Score Total** :
    - Terminale : ( 5 + 4 = 9 )
    - Première : ( 5 + 4 + 3 = 12 )
    - **Total** : ( 9 + 12 = 21 )

2. **Score Maximum** :
    - Terminale : ( 2 * 5 = 10 )
    - Première : ( 3 * 5 = 15 )
    - **Total Max** : ( 10 + 15 = 25 )

3. **Score en Pourcentage** :
   \[
   Score = 21/25 	* 100 = 84%
   \]

4. **Feedback** :
   Le score correspond à la plage avec un maximum de 100. Feedback : "Excellents choix pour une école vétérinaire !"

---

## Résumé

Le système permet d'analyser les réponses des utilisateurs et de leur fournir des feedbacks détaillés. Les deux fichiers JSON permettent une personnalisation complète des questions et des messages.

Pour toute question ou assistance, contactez l'équipe technique.
