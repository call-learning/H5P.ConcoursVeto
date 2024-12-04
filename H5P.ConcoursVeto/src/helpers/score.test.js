// Import the function to test and the test data
import { calculateSectionScore } from './score.js';
import { sampleSurveyResults, sampleSurveyData } from './testData.js';

describe('calculateSectionScore Specialite', () => {
  const surveyDefinition = sampleSurveyData[1]; // Use surveyData[1]
  const maxSpecialityPremiere = 5 + 4 + 3;
  const maxSpecialityTerminale = 5 + 4;
  const maxTotal = maxSpecialityTerminale + maxSpecialityPremiere;
  const testCases = [
    {
      name: 'Full marks for all fields',
      results: {
        'speciality_terminale': ['5', '4'],
        'speciality_premiere': ['5', '4', '3']
      },
      sectionWeights: [
        { id: 'speciality_terminale', weight: 1 },
        { id: 'speciality_premiere', weight: 1 }
      ],
      expectedScore: 100
    },
    {
      name: 'Partial marks for speciality_terminale',
      results: {
        'speciality_terminale': ['5', '0'],
        'speciality_premiere': ['5', '3', '2']
      },
      sectionWeights: [
        { id: 'speciality_terminale', weight: 1 },
        { id: 'speciality_premiere', weight: 1 }
      ],
      // Dynamically calculate expected score
      expectedScore: (() => {
        const actualScore = ((5 + 0) + (5 + 3 + 2)) / maxTotal * 100;
        return actualScore;
      })()
    },
    {
      name: 'Zero marks for speciality_premiere',
      results: {
        'speciality_terminale': ['5', '4'],
        'speciality_premiere': ['0', '0', '0']
      },
      sectionWeights: [
        { id: 'speciality_terminale', weight: 1 },
        { id: 'speciality_premiere', weight: 1 }
      ],
      expectedScore: (() => {
        const actualScore = (5 + 4 + 0 + 0 + 0) / maxTotal * 100;
        return actualScore;
      })()
    }
  ];

  testCases.forEach(({ name, results, sectionWeights, expectedScore }) => {
    it(`should calculate correct score - ${name}`, () => {
      const score = calculateSectionScore(results, sectionWeights, surveyDefinition);
      expect(score).toBeCloseTo(expectedScore, 2);
    });
  });
});


describe('calculateSectionScore Vos résultats scolaires', () => {
  const surveyDefinition = sampleSurveyData[1]; // Use surveyData[2]
  const maxCommonSubjectsFirstTerminale = 10;
  const maxPerformanceSpecialitiesFirst = 12;
  const maxPerformanceSpecialitiesTerminal = 10;
  const maxBacFrenchAverage = 5;
  const maxTotal = maxCommonSubjectsFirstTerminale + maxPerformanceSpecialitiesFirst + maxPerformanceSpecialitiesTerminal + maxBacFrenchAverage;
  const testCases = [
    {
      name: 'Full marks for all fields',
      results: {
        "performance_specialities_first": {
          "speciality1": 4,
          "speciality2": 4,
          "speciality3": 4
        },
        "performance_specialities_terminal": {
          "speciality1": 5,
          "speciality2": 5
        },
        "common_subjects_premiere_terminale": {
          "history_geography": 5,
          "lvA": 5
        },
        "bac_french_average": 5,
      },
      sectionWeights: [
        { id: 'common_subjects_premiere_terminale', weight: 1 },
        { id: 'performance_specialities_first', weight: 1 },
        { id: 'performance_specialities_terminal', weight: 1 },
        { id: 'bac_french_average', weight: 1 }
      ],
      expectedScore: 100
    },
    {
      name: 'Partial marks for performance_specialities_terminal',
      results: {
        "performance_specialities_first": {
          "speciality1": 4,
          "speciality2": 4,
          "speciality3": 4
        },
        "performance_specialities_terminal": {
          "speciality1": 1,
          "speciality2": 1
        },
        "common_subjects_premiere_terminale": {
          "history_geography": 5,
          "lvA": 5
        },
        "bac_french_average": 5,
      },
      sectionWeights: [
        { id: 'common_subjects_premiere_terminale', weight: 1 },
        { id: 'performance_specialities_first', weight: 1 },
        { id: 'performance_specialities_terminal', weight: 1 },
        { id: 'bac_french_average', weight: 1 }
      ],
      expectedScore: (() => {
        const actualScore = (10 + 12 + 2 + 5) / maxTotal * 100;
        return actualScore;
      })()
    },
    {
      name: 'Zero marks for bac_french_average',
      results: {
        "performance_specialities_first": {
          "speciality1": 4,
          "speciality2": 4,
          "speciality3": 4
        },
        "performance_specialities_terminal": {
          "speciality1": 5,
          "speciality2": 5
        },
        "common_subjects_premiere_terminale": {
          "history_geography": 5,
          "lvA": 5
        },
        "bac_french_average": 0,
      },
      sectionWeights: [
        { id: 'common_subjects_premiere_terminale', weight: 1 },
        { id: 'performance_specialities_first', weight: 1 },
        { id: 'performance_specialities_terminal', weight: 1 },
        { id: 'bac_french_average', weight: 1 }
      ],
      expectedScore: (() => {
        const actualScore = (10 + 12 + 10 + 0) / maxTotal * 100;
        return actualScore;
      })()
    }
  ];

  testCases.forEach(({ name, results, sectionWeights, expectedScore }) => {
    it(`should calculate correct score - ${name}`, () => {
      const score = calculateSectionScore(results, sectionWeights, surveyDefinition);
      expect(score).toBeCloseTo(expectedScore, 2);
    });
  });
});

describe('calculateSectionScore Vos aptitudes', () => {
  const surveyDefinition = sampleSurveyData[1]; // Use surveyData[3]
  const maxManualRelationalSkillsMatrix = 32;
  const maxIntellectualAptitudesMatrix = 36;
  const maxWorkSkillsMatrix = 32;
  const maxTotal = maxManualRelationalSkillsMatrix + maxIntellectualAptitudesMatrix + maxWorkSkillsMatrix;
  const testCases = [
    {
      name: 'Full marks for all fields',
      results: {
        "work_skills_matrix": {
          "reading_summary": "4",
          "autonomy": "4",
          "Noise-ambiant": "4",
          "perseverance": "4",
          "note_taking": "4",
          "computer_use": "4",
          "synthesis": "4",
          "group_work": "4"
        },
        "intellectual_aptitudes_matrix": {
          "observation": "4",
          "focus": "4",
          "creativity": "4",
          "memorization": "4",
          "handle_numbers": "4",
          "identify_data": "4",
          "problem_analysis": "4",
          "prioritization": "4",
          "organization": "4"
        },
        "manual_relational_skills_matrix": {
          "manual_precision": "4",
          "tool_precision": "4",
          "respect_rules": "4",
          "listen_to_others": "4",
          "clear_expression": "4",
          "make_understand": "4",
          "consider_opinions": "4",
          "assert_viewpoint": "4"
        },
      },
      sectionWeights: [
        { id: 'manual_relational_skills_matrix', weight: 1 },
        { id: 'intellectual_aptitudes_matrix', weight: 1 },
        { id: 'work_skills_matrix', weight: 1 }
      ],
      expectedScore: 100
    },
    {
      name: 'Partial marks for intellectual_aptitudes_matrix',
      results: {
        "work_skills_matrix": {
          "reading_summary": "4",
          "autonomy": "4",
          "Noise-ambiant": "4",
          "perseverance": "4",
          "note_taking": "4",
          "computer_use": "4",
          "synthesis": "4",
          "group_work": "4"
        },
        "intellectual_aptitudes_matrix": {
          "observation": "0",
          "focus": "0",
          "creativity": "0",
          "memorization": "0",
          "handle_numbers": "0",
          "identify_data": "0",
          "problem_analysis": "0",
          "prioritization": "NA",
          "organization": "NA"
        },
        "manual_relational_skills_matrix": {
          "manual_precision": "4",
          "tool_precision": "4",
          "respect_rules": "4",
          "listen_to_others": "4",
          "clear_expression": "4",
          "make_understand": "4",
          "consider_opinions": "4",
          "assert_viewpoint": "4"
        },
      },
      sectionWeights: [
        { id: 'manual_relational_skills_matrix', weight: 1 },
        { id: 'intellectual_aptitudes_matrix', weight: 1 },
        { id: 'work_skills_matrix', weight: 1 }
      ],
      expectedScore: (() => {
        const actualScore = (32 + 0 + 32) / maxTotal * 100;
        return actualScore;
      })()
    },
    {
      name: 'Zero marks for work_skills_matrix',
      results: {
        "work_skills_matrix": {
          "reading_summary": "4",
          "autonomy": "4",
          "Noise-ambiant": "4",
          "perseverance": "4",
          "note_taking": "4",
          "computer_use": "4",
          "synthesis": "4",
          "group_work": "4"
        },
        "intellectual_aptitudes_matrix": {
          "observation": "0",
          "focus": "0",
          "creativity": "0",
          "memorization": "0",
          "handle_numbers": "0",
          "identify_data": "0",
          "problem_analysis": "0",
          "prioritization": "NA",
          "organization": "NA"
        },
        "manual_relational_skills_matrix": {
          "manual_precision": "4",
          "tool_precision": "4",
          "respect_rules": "4",
          "listen_to_others": "4",
          "clear_expression": "4",
          "make_understand": "4",
          "consider_opinions": "4",
          "assert_viewpoint": "4"
        },
      },
      sectionWeights: [
        { id: 'manual_relational_skills_matrix', weight: 1 },
        { id: 'intellectual_aptitudes_matrix', weight: 1 },
        { id: 'work_skills_matrix', weight: 1 }
      ],
      expectedScore: (() => {
        const actualScore = (32 + 0 + 32) / maxTotal * 100;
        return actualScore;
      })()
    }
  ];

  testCases.forEach(({ name, results, sectionWeights, expectedScore }) => {
    it(`should calculate correct score - ${name}`, () => {
      const score = calculateSectionScore(results, sectionWeights, surveyDefinition);
      expect(score).toBeCloseTo(expectedScore, 2);
    });
  });
});


describe('calculateSectionScore Vos représentations', () => {
  const surveyDefinition = sampleSurveyData[1]; // Use surveyData[2]
  const maxWorkExperienceMatrix = 24;
  const maxProfessionRepresentation = 13 * 4;
  const maxEducationRepresentation = 9 * 4;
  const maxTotal = maxWorkExperienceMatrix + maxProfessionRepresentation + maxEducationRepresentation;
  const testCases = [
    {
      name: 'Full marks for all fields',
      results: {
        "work_experience_matrix": {
          "media_exposure": "4",
          "veterinary_experience": "4",
          "breeder_experience": "4",
          "equestrian_center": "4",
          "animal_related": "4",
          "non_animal_related": "4"
        },
        "profession_representation_matrix": {
          "treat_domestic_animals": "4",
          "animal_euthanasia": "4",
          "health_preservation": "4",
          "advise_owners": "4",
          "public_health_role": "4",
          "pharma_industry": "4",
          "public_sector": "4",
          "business_management": "4",
          "slaughterhouse_work": "4",
          "research": "4",
          "wild_animal_care": "4",
          "animal_welfare": "4",
          "work_nights_weekends": "4"
        },
        "education_representation_matrix": {
          "studies_difficult": "4",
          "identical_programs": "4",
          "evaluated_on_knowledge": "4",
          "all_species": "4",
          "slaughter_house": "4",
          "mandatory_learning": "4",
          "less_vacation": "4",
          "night_guards": "4",
          "Bank holidays": "4"
        },
      },
      sectionWeights: [
        { id: 'work_experience_matrix', weight: 1 },
        { id: 'profession_representation_matrix', weight: 1 },
        { id: 'education_representation_matrix', weight: 1 }
      ],
      expectedScore: 100
    },
    {
      name: 'Partial marks for profession_representation',
      results: {
        "work_experience_matrix": {
          "media_exposure": "4",
          "veterinary_experience": "4",
          "breeder_experience": "4",
          "equestrian_center": "4",
          "animal_related": "4",
          "non_animal_related": "4"
        },
        "profession_representation_matrix": {
          "treat_domestic_animals": "0",
          "animal_euthanasia": "0",
          "health_preservation": "0",
          "advise_owners": "0",
          "public_health_role": "0",
          "pharma_industry": "0",
          "public_sector": "0",
          "business_management": "0",
          "slaughterhouse_work": "0",
          "research": "0",
          "wild_animal_care": "0",
          "animal_welfare": "0",
          "work_nights_weekends": "0"
        },
        "education_representation_matrix": {
          "studies_difficult": "4",
          "identical_programs": "4",
          "evaluated_on_knowledge": "4",
          "all_species": "4",
          "slaughter_house": "4",
          "mandatory_learning": "4",
          "less_vacation": "4",
          "night_guards": "4",
          "Bank holidays": "4"
        },
      },
      sectionWeights: [
        { id: 'work_experience_matrix', weight: 1 },
        { id: 'profession_representation_matrix', weight: 1 },
        { id: 'education_representation_matrix', weight: 1 }
      ],
      expectedScore: (() => {
        const actualScore = (24 + 0 + 36) / maxTotal * 100;
        return actualScore;
      })()
    },
    {
      name: 'Zero marks for education_representation',
      results: {
        "work_experience_matrix": {
          "media_exposure": "4",
          "veterinary_experience": "4",
          "breeder_experience": "4",
          "equestrian_center": "4",
          "animal_related": "4",
          "non_animal_related": "4"
        },
        "profession_representation_matrix": {
          "treat_domestic_animals": "4",
          "animal_euthanasia": "4",
          "health_preservation": "4",
          "advise_owners": "4",
          "public_health_role": "4",
          "pharma_industry": "4",
          "public_sector": "4",
          "business_management": "4",
          "slaughterhouse_work": "4",
          "research": "4",
          "wild_animal_care": "4",
          "animal_welfare": "4",
          "work_nights_weekends": "4"
        },
        "education_representation_matrix": {
          "studies_difficult": "0",
          "identical_programs": "0",
          "evaluated_on_knowledge": "NA",
          "all_species": "0",
          "slaughter_house": "0",
          "mandatory_learning": "0",
          "less_vacation": "NA",
          "night_guards": "0",
          "Bank holidays": "1"
        },
      },
      sectionWeights: [
        { id: 'work_experience_matrix', weight: 1 },
        { id: 'profession_representation_matrix', weight: 1 },
        { id: 'education_representation_matrix', weight: 1 }
      ],
      expectedScore: (() => {
        const actualScore = (24 + 52 + 1) / maxTotal * 100;
        return actualScore;
      })()
    }
  ];

  testCases.forEach(({ name, results, sectionWeights, expectedScore }) => {
    it(`should calculate correct score - ${name}`, () => {
      const score = calculateSectionScore(results, sectionWeights, surveyDefinition);
      expect(score).toBeCloseTo(expectedScore, 2);
    });
  });
});
