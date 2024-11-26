// src/stories/ResultPage.stories.jsx
import React from 'react';
import App from './App.jsx'
import { action } from '@storybook/addon-actions';
import { Container } from '@mui/material';

export default {
  title: 'App',
  component: App,
  decorators: [(Story) => <Container maxWidth="md"><Story /></Container>],
};

const feedback = {
  global: 'Your overall feedback here.',
  sections: [
    {
      title: "Vos résultats scolaires",
      label: "Vos résultats scolaires",
      feedback: "Vos résultats scolaires : votre \"score\" global est de $scorepercent %.",
      questions_weight: [
        {"id":  "speciality1", "value": 50 },
        {"id" : "common_subjects_first", "value": 30},
        {"id" : "bac_french_average", "value": 20}
      ],
      feedback_ranges: [
        {
          min: 100,
          feedback: "Feedback for 100%."
        },
        {
          min: 80,
          feedback: "Feedback for 80%."
        },
        {
          min: 60,
          feedback: "Feedback for 60%."
        },
        {
          min: 40,
          feedback: "Feedback for 40%."
        }
      ]
    }
  ]
};

const surveyResults = {
  "speciality3": 3,
  "speciality2": 4,
  "speciality1": 4,
  "common_subjects_first": {
    "history_geography": 5,
    "lvA": 4
  },
  "bac_french_average": 5
};

const surveyDefinition = {
  "title": "J'évalue mes performances",
  "description": "Auto-évaluation des connaissances et compétences pour le concours véto post-bac.",
  "pages": [
    {
      "name": "specialities",
      "elements": [
        {
          "type": "dropdown",
          "name": "speciality1",
          "title": "Spécialité 1 conservée en terminale",
          "choices": [
            { "value": 1, "text": "Mathématiques" },
            { "value": 2, "text": "Physique/Chimie" },
            { "value": 3, "text": "SVT ou Biologie/Ecologie" },
            { "value": 4, "text": "Informatique/Sciences de l'Ingénieur" },
            { "value": 5, "text": "Autre" }
          ]
        },
        {
          "type": "dropdown",
          "name": "speciality2",
          "title": "Spécialité 2 conservée en terminale",
          "choices": [
            { "value": 1, "text": "Mathématiques" },
            { "value": 2, "text": "Physique/Chimie" },
            { "value": 3, "text": "SVT ou Biologie/Ecologie" },
            { "value": 4, "text": "Informatique/Sciences de l'Ingénieur" },
            { "value": 5, "text": "Autre spécialité" }
          ]
        },
        {
          "type": "dropdown",
          "name": "speciality3",
          "title": "Spécialité 3 abandonnée en terminale",
          "choices": [
            { "value": 1, "text": "Mathématiques" },
            { "value": 2, "text": "Physique/Chimie" },
            { "value": 3, "text": "SVT ou Biologie/Ecologie" },
            { "value": 4, "text": "Informatique/Sciences de l'Ingénieur" },
            { "value": 5, "text": "Autre spécialité" }
          ]
        }
      ]
    },
    {
      "name": "common_subjects",
      "elements": [
        {
          "type": "matrix",
          "name": "common_subjects_first",
          "title": "Ma moyenne générale",
          "columns": [
            { "value": 1, "text": "Moins de 10/20" },
            { "value": 2, "text": "Moins de 12/20" },
            { "value": 3, "text": "Entre 12/20 et 14/20" },
            { "value": 4, "text": "Entre 14/20 et 16/20" },
            { "value": 5, "text": "Plus de 16/20" }
          ],
          "rows": [
            { "value": "history_geography", "text": "En classe de première" },
            { "value": "lvA", "text": "En classe de terminale" }
          ]
        },
        {
          "type": "rating",
          "name": "bac_french_average",
          "title": "Mes résultats au bac de français (Moyenne de l'écrit et de l'oral)",
          "rateValues": [
            { "value": 1, "text": "Moins de 10/20" },
            { "value": 2, "text": "Moins de 12/20" },
            { "value": 3, "text": "Entre 12/20 et 14/20" },
            { "value": 4, "text": "Entre 14/20 et 16/20" },
            { "value": 5, "text": "Plus de 16/20" }
          ]
        }
      ]
    }
  ]
};
const settings = {
  welcomeTitle: 'Bienvenue sur le\nTest d’auto-positionnement pour le concours Véto.',
  welcomeText: '<p>Ce test a pour objectif de vous aider à évaluer vos chances de réussite au concours d’entrée aux écoles vétérinaires.</p> Il ne prétend en rien avoir une vocation prédictive précise sur vos chances de succès à un concours d\'entrée aux écoles vétérinaires et lors de vos études éventuelles.'
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRestart: action('Restart Survey'),
  surveyResults,
  feedback,
  surveyDefinition,
  settings
};
