/**
 * Sample data for testing
 */
export const sampleSurveyFeedback = {
  global: 'Your overall feedback here.',
  sections: [
    {
      title: 'Vos résultats scolaires',
      label: 'Vos résultats scolaires',
      feedback: 'Vos résultats scolaires : votre "score" global est de $scorepercent %.',
      questions_weight: [
        { 'id': 'speciality1', 'value': 50 },
        { 'id': 'common_subjects_first', 'value': 30 },
        { 'id': 'bac_french_average', 'value': 20 }
      ],
      feedback_ranges: [
        {
          min: 100,
          feedback: 'Feedback for 100%.'
        },
        {
          min: 80,
          feedback: 'Feedback for 80%.'
        },
        {
          min: 60,
          feedback: 'Feedback for 60%.'
        },
        {
          min: 40,
          feedback: 'Feedback for 40%.'
        },
        {
          min: 0,
          feedback: 'Feedback for 0% to 40%.'
        }
      ]
    }
  ]
};
/**
 * Sample data for testing
 */
export const sampleSurveyResults =[
  {
  'speciality3': 3,
  'speciality2': 4,
  'speciality1': 4,
  'common_subjects_first': {
    'history_geography': 5,
    'lvA': 4
  },
  'bac_french_average': 5
},
  {
    'speciality3': 5,
    'speciality2': 2,
    'speciality1': 2,
    'common_subjects_first': {
      'history_geography': 2,
      'lvA': 2
    },
    'bac_french_average': 5
  }
];

export const sampleSurveyData = {
  'logoPosition': 'right',
  'pages': [
    {
      'name': 'specialities',
      'elements': [
        {
          'type': 'tagbox',
          'name': 'speciality_terminale',
          'title': 'Spécialités suivies en terminales (indiquer vos spécialités)',
          'isRequired': true,
          'choices': [
            {
              'value': '5',
              'text': 'SVT/biologie-écologie'
            },
            {
              'value': '4',
              'text': 'Physique Chimie'
            },
            {
              'value': '3',
              'text': 'Mathématiques'
            },
            {
              'value': '2',
              'text': 'Numérique/Sciences de l\'Ingénieur'
            },
            {
              'value': '0',
              'text': 'Autres spécialités'
            }
          ],
          'maxSelectedChoices': 2,
          'minSelectedChoices': 2
        },
        {
          'type': 'tagbox',
          'name': 'speciality_premiere',
          'title': 'Spécialités suivies en première (indiquer vos spécialités)',
          'isRequired': true,
          'choices': [
            {
              'value': '5',
              'text': 'SVT/biologie-écologie'
            },
            {
              'value': '4',
              'text': 'Physique Chimie'
            },
            {
              'value': '3',
              'text': 'Mathématiques'
            },
            {
              'value': '2',
              'text': 'Numérique/Sciences de l\'Ingénieur'
            },
            {
              'value': '0',
              'text': 'Autres spécialités'
            }
          ],
          'maxSelectedChoices': 3,
          'minSelectedChoices': 3
        }
      ]
    },
    {
      'name': 'speciality_performance',
      'elements': [
        {
          'type': 'matrix',
          'name': 'performance_specialities_first',
          'title': 'Mes résultats dans les enseignements de spécialité en première :',
          'columns': [
            {
              'value': 1,
              'text': 'Moins de 12/20'
            },
            {
              'value': 2,
              'text': 'Entre 12/20 et 14/20'
            },
            {
              'value': 3,
              'text': 'Entre 14/20 et 16/20'
            },
            {
              'value': 4,
              'text': 'Plus de 16/20'
            }
          ],
          'rows': [
            {
              'value': 'speciality1',
              'text': 'Spécialité 1'
            },
            {
              'value': 'speciality2',
              'text': 'Spécialité 2'
            },
            {
              'value': 'speciality3',
              'text': 'Spécialité 3'
            }
          ]
        },
        {
          'type': 'matrix',
          'name': 'performance_specialities_terminal',
          'title': 'Mes résultats dans les enseignements de spécialité en terminale :',
          'isRequired': true,
          'columns': [
            {
              'value': 2,
              'text': 'Moins de 12/20'
            },
            {
              'value': 3,
              'text': 'Entre 12/20 et 14/20'
            },
            {
              'value': 4,
              'text': 'Entre 14/20 et 16/20'
            },
            {
              'value': 5,
              'text': 'Plus de 16/20'
            }
          ],
          'rows': [
            {
              'value': 'speciality1',
              'text': 'Spécialité 1'
            },
            {
              'value': 'speciality2',
              'text': 'Spécialité 2'
            }
          ]
        }
      ]
    },
    {
      'name': 'page1',
      'elements': [
        {
          'type': 'matrix',
          'name': 'question1',
          'title': 'Mes résultats dans les enseignements de spécialité en première :',
          'columns': [
            {
              'value': 1,
              'text': 'Moins de 12/20'
            },
            {
              'value': 2,
              'text': 'Entre 12/20 et 14/20'
            },
            {
              'value': 3,
              'text': 'Entre 14/20 et 16/20'
            },
            {
              'value': 4,
              'text': 'Plus de 16/20'
            }
          ],
          'rows': [
            {
              'value': 'speciality1',
              'text': 'Spécialité 1'
            },
            {
              'value': 'speciality2',
              'text': 'Spécialité 2'
            },
            {
              'value': 'speciality3',
              'text': 'Spécialité 3'
            }
          ]
        },
        {
          'type': 'matrix',
          'name': 'question2',
          'title': 'Mes résultats dans les enseignements de spécialité en terminale :',
          'isRequired': true,
          'columns': [
            {
              'value': 2,
              'text': 'Moins de 12/20'
            },
            {
              'value': 3,
              'text': 'Entre 12/20 et 14/20'
            },
            {
              'value': 4,
              'text': 'Entre 14/20 et 16/20'
            },
            {
              'value': 5,
              'text': 'Plus de 16/20'
            }
          ],
          'rows': [
            {
              'value': 'speciality1',
              'text': 'Spécialité 1'
            },
            {
              'value': 'speciality2',
              'text': 'Spécialité 2'
            }
          ]
        }
      ]
    }
  ]
};
