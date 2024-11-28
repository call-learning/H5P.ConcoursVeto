/**
 * Sample data for testing
 */
export const sampleSurveyFeedback = {
  'global': '<p>Ce questionnaire a pour seule vocation de vous aider à réfléchir sur vous-même. Il ne prétend en rien avoir une vocation prédictive précise sur vos chances de succès à un concours d\'entrée aux écoles vétérinaires et lors de vos études éventuelles. Les "scores" indiqués ci-dessous :</p>\n<ul>\n    <li><span style="font-size: 1rem;">ne correspondent pas au score qui servira de base pour déterminer le classement d\'admissibilité aux épreuves du concours ;</span></li>\n    <li><span style="font-size: 1rem;">ne sont en aucun cas des notes et ne seront pas conservés ni fournis à qui que ce soit. Ils ne seront pas mentionnés sur l\'attestation que vous téléverserez dans Parcoursup.</span></li>\n</ul>',
  'sections': [
    {
      'title': 'Vos résultats scolaires',
      'label': 'Vos résultats scolaires',
      'feedback': 'Vos résultats scolaires : votre "score" global est de $scorepercent %.',
      'questions_weight': [
        {
          'id': 'common_subjects_first',
          'value': 50
        },
        {
          'id': 'performance_specialities_first',
          'value': 20
        },
        {
          'id': 'performance_specialities_terminal',
          'value': 15
        },
        {
          'id': 'bac_french_average',
          'value': 15
        }
      ],
      'feedback_ranges': [
        {
          'min': 100,
          'feedback': 'Si vous avez réellement obtenu les notes que vous mentionnez, vous semblez bien armé(e) pour aborder des études vétérinaires. Attention cependant, pour le concours, le dossier scolaire comptera pour beaucoup pour la phase d’admissibilité aux entretiens oraux. Vous serez donc nombreux à avoir d’excellentes notes !'
        },
        {
          'min': 76,
          'feedback': 'Si vous avez réellement obtenu les notes que vous mentionnez, vous avez des dispositions. Toutefois la concurrence sera rude, et il faut espérer que vos notes ont encore pu s’améliorer pendant le deuxième semestre de terminale. Le dossier scolaire comptera en effet pour beaucoup pour la phase d’admissibilité. Il y aura donc de nombreux candidats à avoir d’excellentes notes!'
        },
        {
          'min': 61,
          'feedback': 'Selon votre dossier scolaire, vous avez des notes moyennes qui risquent d\'être insuffisantes pour devenir vétérinaire.'
        },
        {
          'min': 25,
          'feedback': 'Selon votre dossier scolaire, vous ne semblez pas suffisamment armé(e) avoir de réelles chances d\'aborder des études vétérinaires.'
        }
      ]
    },
    {
      'title': 'Vos aptitudes',
      'label': 'Vos aptitudes',
      'feedback': 'Vos aptitudes : votre "score" global est de $scorepercent %.',
      'questions_weight': [
        {
          'id': 'manual_relational_skills_matrix',
          'value': 33
        },
        {
          'id': 'intellectual_aptitudes_matrix',
          'value': 33
        },
        {
          'id': 'work_skills_matrix',
          'value': 34
        }
      ],
      'feedback_ranges': [
        {
          'min': 100,
          'feedback': 'Si vous avez répondu sincèrement, en votre âme et conscience, selon ce que vous êtes et non pas selon ce qu\'il faudrait être pour devenir vétérinaire, vous semblez bien armé(e) pour tenter des études vétérinaires.'
        },
        {
          'min': 76,
          'feedback': 'Si vous avez répondu sincèrement, en votre âme et conscience, selon ce que vous êtes et non pas selon ce qu\'il faudrait être pour devenir vétérinaire, vous avez des dispositions pour des études vétérinaires. Toutefois la concurrence sera rude, et il faudra travailler dur. Ce n\'est pas gagné !'
        },
        {
          'min': 51,
          'feedback': 'Vous avez des aptitudes, mais elles risquent d\'être insuffisantes pour devenir vétérinaire.'
        },
        {
          'min': 0,
          'feedback': 'Vous ne semblez pas suffisamment armé(e) pour poursuivre vers des études vétérinaires.'
        }
      ]
    },
    {
      'title': 'Vos représentations',
      'label': 'Vos représentations',
      'feedback': 'Vos représentations des études et des métiers de vétérinaire: votre "score" global est de $scorepercent %.',
      'questions_weight': [
        {
          'id': 'work_experience_matrix',
          'value': 33
        },
        {
          'id': 'profession_representation',
          'value': 33
        },
        {
          'id': 'education_representation',
          'value': 34
        }
      ],
      'feedback_ranges': [
        {
          'min': 100,
          'feedback': '<p>Vos représentations des métiers de vétérinaire et des études qui y conduisent sont assez proches de la réalité. Vous pouvez conforter vos positions en consultant le <a href="https://www.veterinaire.fr/la-profession/devenir-veterinaire/les-metiers-veterinaires.html" target="_blank">site de l\'Ordre des vétérinaires</a>, et les sites web des écoles nationales vétérinaires.</p>'
        },
        {
          'min': 75,
          'feedback': '<p>Vos représentations des métiers de vétérinaire et des études qui y conduisent peuvent être affinées, mais vous vous approchez déjà de la réalité. Nous vous recommandons d\'y consacrer un peu de temps si vous êtes admissibles aux entretiens oraux.&nbsp;Vous pouvez trouver des éléments d\'information en consultant le&nbsp;<a href="https://www.veterinaire.fr/la-profession/devenir-veterinaire/les-metiers-veterinaires.html" target="_blank">site de l\'Ordre des vétérinaires</a>, et les sites web des écoles nationales vétérinaires.</p>'
        },
        {
          'min': 50,
          'feedback': 'Vous avez raison sur certains points, mais vous vous faites des idées fausses pour d\'autres. Renseignez-vous davantage... Vous pouvez trouver des éléments d\'information en consultant le site de l\'Ordre des vétérinaires, et les sites web des écoles nationales vétérinaires.'
        },
        {
          'min': 0,
          'feedback': '<p>Renseignez-vous davantage sur les études et les métiers de vétérinaire : vos représentations sont assez éloignées de la réalité.&nbsp;Vous pouvez trouver des éléments d\'information en consultant le&nbsp;<a href="https://www.veterinaire.fr/la-profession/devenir-veterinaire/les-metiers-veterinaires.html" target="_blank">site de l\'Ordre des vétérinaires</a>, et les sites web des écoles nationales vétérinaires.<br></p>\n<p>Voir aussi sur ce site <a href="https://concours-veto-postbac.fr/local/mcms/index.php?p=etudes-veterinaires" target="_blank">la page présentant les études vétérinaires</a>.</p>'
        }
      ]
    },
    {
      'title': 'Vos choix de spécialités',
      'label': 'Vos choix de spécialités',
      'feedback': 'Vos choix de spécialités: votre "score" global est de $scorepercent %.',
      'questions_weight': [
        {
          'id': 'speciality_terminale',
          'value': 33
        },
        {
          'id': 'speciality_premiere',
          'value': 33
        }
      ],
      'feedback_ranges': [
        {
          'min': 100,
          'feedback': '<p dir="ltr" style="text-align: left;">C\'est bien. Vos choix correspondent exactement à ceux qui ont été recommandés par les écoles vétérinaires.</p>\n<p dir="ltr" style="text-align: left;">Attention cependant, si vos notes sont insuffisantes, un autre candidat ayant fait d\'autres choix mais avec de bien meilleurs notes peut vous passer devant.</p>\n<p dir="ltr" style="text-align: left;">Si vous avez choisi l\'option Maths complémentaires, vous serez mieux armé pour suivre les enseignements de première année si vous réussissez au concours. Mais les notes obtenues dans les options ne sont pas prises en compte.<br></p>'
        },
        {
          'min': 59,
          'feedback': '<p dir="ltr" style="text-align: left;">Vous n\'avez pas fait de maths, ni en première, ni en terminale. Cela ne correspond pas aux recommandations des ENV. Cependant, si vos résultats sont excellents, vous pouvez toute de même réussir le concours.</p>\n<p dir="ltr" style="text-align: left;">En revanche, ce sera assez dur de suivre les enseignements de maths de première année si vous êtes admis.<br></p>'
        },
        {
          'min': 56,
          'feedback': '<p dir="ltr" style="text-align: left;">Vous avez choisi la triplette recommandée en première, c\'est bien. Vous avez abandonné la physique-chimie en terminale.&nbsp;<span style="font-size: 1rem;">Cela ne pénalisera pas vos chances de réussir le concours, si vos notes sont suffisantes.</span></p>\n<p dir="ltr" style="text-align: left;"><span style="font-size: 1rem;">Toutefois, sachez qu\'en cas d\'admission, vous aurez peut-être des difficultés à suivre les enseignements de physique-chimie en première année.</span></p>'
        },
        {
          'min': 54,
          'feedback': '<p dir="ltr" style="text-align: left;">Vous n\'avez pas choisi la triplette recommandée en première. Vous n\'avez pas fait de physique-chimie.</p>\n<p dir="ltr" style="text-align: left;">Comme vous avez conservé deux spécialités recommandées en terminale, cela ne pénalisera pas complètement vos chances de réussir le concours, si vos notes sont suffisantes.</p>\n<p dir="ltr" style="text-align: left;">Toutefois, sachez qu\'en cas d\'admission, vous aurez certainement des difficultés à suivre les enseignements de physique-chimie en première année.<br></p>'
        },
        {
          'min': 50,
          'feedback': '<p dir="ltr" style="text-align: left;"></p>\n<p dir="ltr">Vous n\'avez pas choisi la triplette recommandée en première. Vous n\'avez pas fait de physique-chimie. De plus, vous avez abandonné les maths en terminale.&nbsp;<span style="font-size: 1rem;">Vous avez vos chances de réussir le concours, si vos notes sont excellentes.</span></p>\n<p dir="ltr"><span style="font-size: 1rem;">Toutefois, sachez qu\'en cas d\'admission, vous aurez certainement de grosses difficultés à suivre les enseignements de physique-chimie et de mathématiques en première année.</span></p><br>\n<p></p>'
        },
        {
          'min': 47,
          'feedback': '<p dir="ltr" style="text-align: left;">Vous n\'avez pas fait de maths, ni de physique-chimie. Si vos notes de spécialités sont vraiment excellentes, vous pouvez tout de même réussir le concours.</p>\n<p dir="ltr" style="text-align: left;">Toutefois, il faut être clair : ce sera difficile pour vous, en cas d\'admission, de suivre les enseignements de maths et de physique-chimie en première année d\'études.<br></p>'
        },
        {
          'min': 45,
          'feedback': '<p dir="ltr" style="text-align: left;">Vous avez choisi la triplette recommandée en première, c\'est bien. Vous avez abandonné la SVT en terminale.</p>\n<p dir="ltr" style="text-align: left;">Cela ne pénalisera pas vos chances de réussir le concours, si vos notes sont suffisantes.<br></p>\n<p dir="ltr" style="text-align: left;">En cas d\'admission, il faudra vous remettre à niveau en biologie pour pouvoir suivre mais c\'est faisable sans problème.<br></p>'
        },
        {
          'min': 43,
          'feedback': '<p dir="ltr" style="text-align: left;">Vous avez choisi la triplette recommandée en première, c\'est bien. Vous avez abandonné la SVT en terminale.</p>\n<p dir="ltr" style="text-align: left;">Cela ne pénalisera pas vos chances de réussir le concours, si vos notes sont suffisantes.<br></p>\n<p dir="ltr" style="text-align: left;">En cas d\'admission, il faudra vous remettre à niveau en biologie pour pouvoir suivre mais c\'est faisable sans problème.<br></p>'
        },
        {
          'min': 30,
          'feedback': '<p dir="ltr" style="text-align: left;"></p>\n<p dir="ltr">Vous n\'avez pas choisi la triplette recommandée en première. Vous n\'avez pas fait de mathématiques. De plus, vous avez abandonné la biologie en terminale.&nbsp;Vous avez vos chances de réussir le concours, si vos notes sont excellentes.</p>\n<p dir="ltr">Toutefois, sachez qu\'en cas d\'admission, vous aurez certainement de grosses difficultés à suivre les enseignements de biologie et de mathématiques en première année.</p><br>\n<p></p>'
        },
        {
          'min': 28,
          'feedback': '<p dir="ltr" style="text-align: left;"></p>\n<p dir="ltr">Vous n\'avez pas choisi la triplette recommandée en première. Il vous manquera des notions de biologie.&nbsp;Vous avez vos chances de réussir le concours, si vos notes sont excellentes.</p>\n<p dir="ltr">Toutefois, sachez qu\'en cas d\'admission, vous aurez à vous mettre à niveau en biologie en première année.</p><br>\n<p></p>'
        },
        {
          'min': 20,
          'feedback': '<p dir="ltr" style="text-align: left;">Vous n\'avez pas suivi les combinaisons de spécialités recommandées en première et en terminale.&nbsp;</p>\n<p dir="ltr" style="text-align: left;">Même s\'il est mathématiquement possible de réussir le concours si vos notes de spécialités sont vraiment excellentes, il faut être clair : ce sera difficile pour vous, en cas d\'admission, de suivre les enseignements de première année d\'études. Vous aurez besoin de vous remettre à niveau dans les matières manquantes.<br></p>'
        }
      ]
    }
  ]
};
/**
 * Sample data for testing
 */
export const sampleSurveyResults = [
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
    'speciality_terminale': [
      '5',
      '0'
    ],
    'speciality_premiere': [
      '5',
      '3',
      '2'
    ],
    'performance_specialities_first': {
      'speciality1': 1,
      'speciality3': 2
    },
    'performance_specialities_terminal': {
      'speciality1': 3,
      'speciality2': 3
    },
    'common_subjects_premiere': {
      'history_geography': 2,
      'lvA': 5
    },
    'common_subjects_terminale': {
      'history_geography': 3,
      'lvA': 3
    },
    'bac_french_average': 4,
    'work_skills_matrix': {
      'reading_summary': '4',
      'autonomy': '4',
      'Noise-ambiant': '4',
      'perseverance': '1',
      'note_taking': '1',
      'computer_use': '1',
      'synthesis': '1',
      'group_work': '1'
    },
    'intellectual_aptitudes_matrix': {
      'observation': '1',
      'focus': '4',
      'memorization': '1',
      'creativity': '1',
      'identify_data': '1',
      'handle_numbers': '1',
      'problem_analysis': '1',
      'prioritization': '1',
      'organization': '4'
    },
    'manual_relational_skills_matrix': {
      'manual_precision': '1',
      'respect_rules': '1',
      'tool_precision': '1',
      'listen_to_others': '1',
      'clear_expression': '1',
      'make_understand': '1',
      'consider_opinions': '1',
      'assert_viewpoint': '1'
    },
    'work_experience_matrix': {
      'media_exposure': '4',
      'veterinary_experience': '1',
      'breeder_experience': '1',
      'equestrian_center': '4',
      'animal_related': '1',
      'non_animal_related': '1'
    },
    'profession_representation_matrix': {
      'treat_domestic_animals': '4',
      'animal_euthanasia': '1',
      'health_preservation': '4',
      'advise_owners': '1',
      'public_health_role': '1',
      'pharma_industry': '1',
      'public_sector': '4',
      'business_management': '1',
      'slaughterhouse_work': '1',
      'research': '1',
      'wild_animal_care': '1',
      'animal_welfare': '4',
      'work_nights_weekends': '1'
    },
    'education_representation_matrix': {
      'studies_difficult': '1',
      'identical_programs': '4',
      'evaluated_on_knowledge': '1',
      'all_species': '1',
      'slaughter_house': '1',
      'mandatory_learning': '4',
      'less_vacation': '4',
      'night_guards': '4',
      'Bank holidays': '1'
    },
    'vocation_statements': {
      'always_veterinarian': '4',
      'childhood_dream': '0',
      'only_career_choice': '0'
    },
    'stimulation_statements': {
      'like_challenge': '4',
      'like_learning': '1',
      'like_problem_solving': '1',
      'like_variety': '1'
    },
    'animal_contact_statements': {
      'like_working_with_animals': '4',
      'want_to_help_animals': '1',
      'animal_suffering': '1',
      'dangerous_animal': '1',
      'protect_environment': '1'
    },
    'human_contact_statements': {
      'like_team_working': '1',
      'enjoy_client_interaction': '4',
      'unsatisfied_client': '4'
    },
    'social_integration_statements': {
      'want_to_contribute': '4',
      'want_to_be_recognized': '4',
      'want_to_integrate': '1'
    },
    'career_opportunities_statements': {
      'reasonable_income': '4',
      'many_opportunities': '4',
      'job_availability': '1'
    }
  }
];

export const sampleSurveyData =
  [
    {
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
    },
    {
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
          'name': 'common_subjects',
          'elements': [
            {
              'type': 'matrix',
              'name': 'common_subjects_premiere',
              'title': 'Ma moyenne générale',
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
                  'value': 'history_geography',
                  'text': 'En classe de première'
                },
                {
                  'value': 'lvA',
                  'text': 'En classe de terminale'
                }
              ]
            },
            {
              'type': 'matrix',
              'name': 'common_subjects_terminale',
              'title': 'Ma moyenne générale',
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
                  'value': 'history_geography',
                  'text': 'En classe de première'
                },
                {
                  'value': 'lvA',
                  'text': 'En classe de terminale'
                }
              ]
            },
            {
              'type': 'rating',
              'name': 'bac_french_average',
              'title': 'Mes résultats au bac de français (Moyenne de l\'écrit et de l\'oral)',
              'isRequired': true,
              'autoGenerate': false,
              'rateCount': 4,
              'rateValues': [
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
              ]
            }
          ]
        },
        {
          'name': 'work_skills',
          'elements': [
            {
              'type': 'matrix',
              'name': 'work_skills_matrix',
              'title': 'J\'évalue mes compétences au travail ...',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'reading_summary',
                  'text': 'Je travaille sans être stimulé-e.'
                },
                {
                  'value': 'autonomy',
                  'text': 'Je travaille régulièrement et de façon autonome'
                },
                {
                  'value': 'Noise-ambiant',
                  'text': 'Je sais m\'extraire des bruits ambiants pour rester concentré-e.'
                },
                {
                  'value': 'perseverance',
                  'text': 'Je suis persévérant-e.'
                },
                {
                  'value': 'note_taking',
                  'text': 'Je sais prendre des notes en séance.'
                },
                {
                  'value': 'computer_use',
                  'text': 'Je sais utiliser un ordinateur pour des applications bureautiques.'
                },
                {
                  'value': 'synthesis',
                  'text': 'Je sais réaliser un travail de synthèse.'
                },
                {
                  'value': 'group_work',
                  'text': 'Je travaille efficacement en groupe.'
                }
              ]
            }
          ]
        },
        {
          'name': 'intellectual_aptitudes',
          'elements': [
            {
              'type': 'matrix',
              'name': 'intellectual_aptitudes_matrix',
              'title': 'J\'évalue mes qualités ...',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'observation',
                  'text': 'Je suis observateur/observatrice.'
                },
                {
                  'value': 'focus',
                  'text': 'Je me concentre facilement sur un problème.'
                },
                {
                  'value': 'creativity',
                  'text': 'Je suis créatif/créative.'
                },
                {
                  'value': 'memorization',
                  'text': 'J\'apprends facilement par coeur.'
                },
                {
                  'value': 'handle_numbers',
                  'text': 'Je calcule rapidement et sans erreur.'
                },
                {
                  'value': 'identify_data',
                  'text': 'J\'identifie rapidement les données importantes et inutiles d\'un problème.'
                },
                {
                  'value': 'problem_analysis',
                  'text': 'Je sais problématiser une demande.'
                },
                {
                  'value': 'prioritization',
                  'text': 'Je hiérachise les priorités.'
                },
                {
                  'value': 'organization',
                  'text': 'Je sais m\'organiser.'
                }
              ]
            }
          ]
        },
        {
          'name': 'manual_relational_skills',
          'elements': [
            {
              'type': 'matrix',
              'name': 'manual_relational_skills_matrix',
              'title': 'J\'évalue mes compétences manuelles et relationnelles',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'manual_precision',
                  'text': 'Je sais réaliser un travail précis avec mes mains.'
                },
                {
                  'value': 'tool_precision',
                  'text': 'Je sais réaliser un travail précis avec des outils.'
                },
                {
                  'value': 'respect_rules',
                  'text': 'Je respecte les consignes et les règles lorsque je suis en groupe.'
                },
                {
                  'value': 'listen_to_others',
                  'text': 'Je sais écouter l\'avis des autres.'
                },
                {
                  'value': 'clear_expression',
                  'text': 'Je m\'exprime clairement.'
                },
                {
                  'value': 'make_understand',
                  'text': 'Je sais me faire comprendre.'
                },
                {
                  'value': 'consider_opinions',
                  'text': 'J\'accepte les idées des autres.'
                },
                {
                  'value': 'assert_viewpoint',
                  'text': 'J\'ose exprimer et partager mes idées.'
                }
              ]
            }
          ]
        },
        {
          'name': 'work_experience',
          'elements': [
            {
              'type': 'matrix',
              'name': 'work_experience_matrix',
              'title': 'Mon expérience du monde du travail avec les animaux.',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'media_exposure',
                  'text': 'Je connais le monde vétérinaire au travers des médias.'
                },
                {
                  'value': 'veterinary_experience',
                  'text': 'J\'ai déjà suivi un vétérinaire dans son travail quotidien.'
                },
                {
                  'value': 'breeder_experience',
                  'text': 'J\'ai une expérience de travail chez un éleveur.'
                },
                {
                  'value': 'equestrian_center',
                  'text': 'Je participe régulièrement aux soins des chevaux/poneys dans mon centre équestre.'
                },
                {
                  'value': 'animal_related',
                  'text': 'J\'ai une expérience de travail dans une  structure en rapport avec l\'animal (SPA ...).'
                },
                {
                  'value': 'non_animal_related',
                  'text': 'J\'ai une expérience de travail dans une  structure en lien avec la santé animale (recherche, industrie ...).'
                }
              ]
            }
          ]
        },
        {
          'name': 'profession_representation',
          'elements': [
            {
              'type': 'matrix',
              'name': 'profession_representation_matrix',
              'title': 'En tant que vétérinaire, je pourrai être amené-e à ...',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'treat_domestic_animals',
                  'text': 'Soigner des animaux domestiques.'
                },
                {
                  'value': 'animal_euthanasia',
                  'text': 'Euthanasier des animaux domestiques.'
                },
                {
                  'value': 'health_preservation',
                  'text': 'Préserver la santé des élevages.'
                },
                {
                  'value': 'advise_owners',
                  'text': 'Conseiller les propriétaires d\'animaux.'
                },
                {
                  'value': 'public_health_role',
                  'text': 'Préserver  la santé publique.'
                },
                {
                  'value': 'pharma_industry',
                  'text': 'Travailler dans l\'industrie pharmaceutique.'
                },
                {
                  'value': 'public_sector',
                  'text': 'Travailler dans la fonction publique.'
                },
                {
                  'value': 'business_management',
                  'text': 'Participer à la gestion d\'une entreprise vétérinaire.'
                },
                {
                  'value': 'slaughterhouse_work',
                  'text': 'Travailler dans un abattoir.'
                },
                {
                  'value': 'research',
                  'text': 'Faire de la recherche.'
                },
                {
                  'value': 'wild_animal_care',
                  'text': 'Soigner des animaux sauvages.'
                },
                {
                  'value': 'animal_welfare',
                  'text': 'M\'investir dans le bien-être animal.'
                },
                {
                  'value': 'work_nights_weekends',
                  'text': 'Participer au développement durable et à la transition écologique.'
                }
              ]
            }
          ]
        },
        {
          'name': 'education_representation',
          'elements': [
            {
              'type': 'matrix',
              'name': 'education_representation_matrix',
              'title': 'Au sujet des études vétérinaires ...',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'studies_difficult',
                  'text': 'Les études sont longues et exigent beaucoup de travail.'
                },
                {
                  'value': 'identical_programs',
                  'text': 'Le programme et le niveau sont identiques dans les quatre écoles nationales vétérinaires.'
                },
                {
                  'value': 'evaluated_on_knowledge',
                  'text': 'Les étudiants sont évalués selon leurs connaissances, leurs savoir-faire et leurs savoir-être.'
                },
                {
                  'value': 'all_species',
                  'text': 'Les études portent obligatoirement sur toutes les espèces animales.'
                },
                {
                  'value': 'slaughter_house',
                  'text': 'Pendant les études, des visites et/ou des stages en abattoir sont obligatoires.'
                },
                {
                  'value': 'mandatory_learning',
                  'text': 'Les études comprennent des apprentissages obligatoires qui pourraient ne pas me correspondre.'
                },
                {
                  'value': 'less_vacation',
                  'text': 'J\'aurai moins de vacances.'
                },
                {
                  'value': 'night_guards',
                  'text': 'Il faudra parfois que je réalise des gardes de nuit.'
                },
                {
                  'value': 'Bank holidays',
                  'text': 'Il faudra parfois que je travaille pendant les jours fériés.'
                }
              ]
            }
          ]
        },
        {
          'name': 'vocation',
          'elements': [
            {
              'type': 'matrix',
              'name': 'vocation_statements',
              'title': 'Pourquoi souhaitez-vous devenir vétérinaire ?',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '0',
                  'text': 'Non'
                },
                {
                  'value': '1',
                  'text': 'Peut-être'
                }
              ],
              'rows': [
                {
                  'value': 'always_veterinarian',
                  'text': 'J\'ai toujours voulu devenir vétérinaire.'
                },
                {
                  'value': 'childhood_dream',
                  'text': 'C\'est un métier pour lequel je me sens préparé-e.'
                },
                {
                  'value': 'only_career_choice',
                  'text': 'C\'est le seul métier que j\'envisage d\'exercer.'
                }
              ]
            }
          ]
        },
        {
          'name': 'stimulation',
          'elements': [
            {
              'type': 'matrix',
              'name': 'stimulation_statements',
              'title': 'Vétérinaire est un métier stimulant. Indiquez quelles sont les  affirmations qui vous correspondent ...',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'like_challenge',
                  'text': 'J\'aime le défi que représente le travail de vétérinaire.'
                },
                {
                  'value': 'like_learning',
                  'text': 'J\'aime apprendre de nouvelles choses.'
                },
                {
                  'value': 'like_problem_solving',
                  'text': 'J\'aime résoudre des problèmes.'
                },
                {
                  'value': 'like_variety',
                  'text': 'J\'aime la diversité des activités vétérinaires.'
                }
              ]
            }
          ]
        },
        {
          'name': 'animal_contact',
          'elements': [
            {
              'type': 'matrix',
              'name': 'animal_contact_statements',
              'title': 'Concernant le contact avec les animaux, comment vous positionnez-vous ?',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'like_working_with_animals',
                  'text': 'J\'aime travailler avec des animaux.'
                },
                {
                  'value': 'want_to_help_animals',
                  'text': 'Je veux aider les animaux.'
                },
                {
                  'value': 'animal_suffering',
                  'text': 'Je vais être confronté-e à la souffrance animale.'
                },
                {
                  'value': 'dangerous_animal',
                  'text': 'Je peux être blessé-e lors de la manipulation d’animaux agressifs ou dangereux.'
                },
                {
                  'value': 'protect_environment',
                  'text': 'Je veux protéger la faune sauvage.'
                }
              ]
            }
          ]
        },
        {
          'name': 'human_contact',
          'elements': [
            {
              'type': 'matrix',
              'name': 'human_contact_statements',
              'title': 'Concernant le contact humain, comment vous positionnez-vous ?',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Oui'
                }
              ],
              'rows': [
                {
                  'value': 'like_team_working',
                  'text': 'J\'aime le travail en équipe.'
                },
                {
                  'value': 'enjoy_client_interaction',
                  'text': 'J\'aime interagir avec des clients, des éleveurs.'
                },
                {
                  'value': 'unsatisfied_client',
                  'text': 'Je peux être confronté-e à des clients mécontents.'
                }
              ]
            }
          ]
        },
        {
          'name': 'social_integration',
          'elements': [
            {
              'type': 'matrix',
              'name': 'social_integration_statements',
              'title': 'Vétérinaire et société.  Indiquez ce que vous pensez des affirmations suivantes :',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'want_to_contribute',
                  'text': 'Un vétérinaire contribue au développement de  la société.'
                },
                {
                  'value': 'want_to_be_recognized',
                  'text': 'Un vétérinaire est reconnu dans la société.'
                },
                {
                  'value': 'want_to_integrate',
                  'text': 'Un vétérinaire participe à l\'action collective.'
                }
              ]
            }
          ]
        },
        {
          'name': 'career_opportunities',
          'elements': [
            {
              'type': 'matrix',
              'name': 'career_opportunities_statements',
              'title': 'Les opportunités de carrière. Indiquez ce que vous pensez des affirmations suivantes :',
              'isRequired': true,
              'columns': [
                {
                  'value': '4',
                  'text': 'Oui'
                },
                {
                  'value': '1',
                  'text': 'Non'
                },
                {
                  'value': '0',
                  'text': 'Ne sais pas'
                }
              ],
              'rows': [
                {
                  'value': 'reasonable_income',
                  'text': 'Ce métier fournit un revenu raisonnable.'
                },
                {
                  'value': 'many_opportunities',
                  'text': 'Un vétérinaire peut avoir de nombreuses opportunités de carrière.'
                },
                {
                  'value': 'job_availability',
                  'text': 'Dans ce métier, il est facile de trouver un emploi.'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
