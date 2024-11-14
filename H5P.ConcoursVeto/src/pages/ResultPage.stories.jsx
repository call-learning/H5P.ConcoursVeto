// ResultPage.stories.js
import React from 'react';
import ResultPage from './ResultPage';
import { action } from '@storybook/addon-actions';
import { Container } from '@mui/material';

export default {
  title: 'Components/ResultPage',
  component: ResultPage,
  decorators: [(Story) => <Container maxWidth="md"><Story /></Container>],
};

const surveyFeedback = {
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
  "description": "Auto-\u00e9valuation des connaissances et comp\u00e9tences pour le concours v\u00e9to post-bac.",
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
          "title": "Ma moyenne g\u00e9n\u00e9rale",
          "columns": [
            {
              "value": 1,
              "text": "Moins de 10\/20"
            },
            {
              "value": 2,
              "text": "Moins de 12\/20"
            },
            {
              "value": 3,
              "text": "Entre 12\/20 et 14\/20"
            },
            {
              "value": 4,
              "text": "Entre 14\/20 et 16\/20"
            },
            {
              "value": 5,
              "text": "Plus de 16\/20"
            }
          ],
          "rows": [
            {
              "value": "history_geography",
              "text": "En classe de premi\u00e8re"
            },
            {
              "value": "lvA",
              "text": "En classe de terminale"
            }
          ],
          "rateValues": [
            {}
          ]
        },
        {
          "type": "rating",
          "name": "bac_french_average",
          "title": "Mes r\u00e9sultats au bac de fran\u00e7ais (Moyenne de l&#039;\u00e9crit et de l&#039;oral)",
          "rateValues": [
            {
              "value": 1,
              "text": "Moins de 10\/20"
            },
            {
              "value": 2,
              "text": "Moins de 12\/20"
            },
            {
              "value": 3,
              "text": "Entre 12\/20 et 14\/20"
            },
            {
              "value": 4,
              "text": "Entre 14\/20 et 16\/20"
            },
            {
              "value": 5,
              "text": "Plus de 16\/20"
            }
          ],
          "columns": [
            {}
          ],
          "rows": [
            {}
          ]
        }
      ]
    }
  ]
};

const Template = (args) => <ResultPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRestart: action('Restart Survey'),
  surveyResults,
  surveyFeedback,
  surveyDefinition,
};
