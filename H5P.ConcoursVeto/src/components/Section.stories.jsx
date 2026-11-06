import Section from './Section';
import {
  sampleSurveyFeedback,
  sampleSurveyResults,
  sampleSurveyData,
} from '../helpers/testData.js';

export default {
  title: 'Components/Section',
  component: Section,
};

const LONG_FEEDBACK =
  '<p>C\u2019est tr\u00e8s bien. Vos choix correspondent \u00e0 ceux qui ont \u00e9t\u00e9 recommand\u00e9s par les \u00e9coles v\u00e9t\u00e9rinaires, et votre profil scientifique est solide. ' +
  'N\u00e9anmoins, le niveau attendu en premi\u00e8re ann\u00e9e d\u2019\u00e9tudes est \u00e9lev\u00e9 : les enseignements de biologie, de chimie et de math\u00e9matiques y sont denses et rythm\u00e9s. ' +
  'Des r\u00e9visions r\u00e9guli\u00e8res seront donc n\u00e9cessaires en classe de terminale, en particulier pour les sp\u00e9cialit\u00e9s que vous n\u2019avez pas suivies. ' +
  'Pensez enfin \u00e0 v\u00e9rifier les conditions d\u2019acc\u00e8s de chaque \u00e9cole, car certaines exigent un seuil minimal de notes en maths ou en physique-chimie, ' +
  'et \u00e0 anticiper la pr\u00e9paration de vos \u00e9preuves orales qui d\u00e9bute d\u00e8s l\u2019\u00e9t\u00e9 de votre ann\u00e9e de terminale.</p>';

const baseArgs = {
  sectionConfig: sampleSurveyFeedback.sections[0],
  surveyResults: sampleSurveyResults[0],
  surveyDefinition: sampleSurveyData[1],
};

const Template = (args) => <Section {...args} />;

// 71.43% computed from the sample answers -> selects the range with max 88
export const FeedbackInRange = Template.bind({});
FeedbackInRange.args = baseArgs;

// All range upper bounds are below the computed percentage -> no feedback text
export const NoFeedbackRange = Template.bind({});
NoFeedbackRange.args = {
  ...baseArgs,
  sectionConfig: {
    ...sampleSurveyFeedback.sections[0],
    feedback_ranges: sampleSurveyFeedback.sections[0].feedback_ranges.filter(range => range.max <= 50),
  },
};

// Every range carries a long HTML paragraph -> the text wraps inside the card
export const LongFeedback = Template.bind({});
LongFeedback.args = {
  ...baseArgs,
  sectionConfig: {
    ...sampleSurveyFeedback.sections[0],
    feedback_ranges: sampleSurveyFeedback.sections[0].feedback_ranges.map(range => ({ ...range, feedback: LONG_FEEDBACK })),
  },
};
