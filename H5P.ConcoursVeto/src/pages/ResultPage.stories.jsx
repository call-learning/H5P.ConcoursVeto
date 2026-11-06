// ResultPage.stories.js
import ResultPage from './ResultPage';
import { action } from '@storybook/addon-actions';
import { Container } from '@mui/material';
import { sampleSurveyFeedback, sampleSurveyResults, sampleSurveyData } from '../helpers/testData.js';

export default {
  title: 'Components/ResultPage',
  component: ResultPage,
  decorators: [(Story) => <Container maxWidth="md"><Story /></Container>],
};
const Template = (args) => <ResultPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[0],
  surveyFeedback: sampleSurveyFeedback,
  surveyDefinition: sampleSurveyData[1],
};

export const AnotherResult = Template.bind({});
AnotherResult.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[1],
  surveyFeedback: sampleSurveyFeedback,
  surveyDefinition: sampleSurveyData[1],
};

export const FullResult = Template.bind({});
FullResult.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[2],
  surveyFeedback: sampleSurveyFeedback,
  surveyDefinition: sampleSurveyData[1],
};

// The first section's sample answers compute to 71.43%; keeping only the ranges
// with upper bounds <= 50 leaves no matching range -> that card shows no feedback.
const noFeedbackSectionFeedback = {
  ...sampleSurveyFeedback,
  sections: sampleSurveyFeedback.sections.map((section, index) =>
    index === 0
      ? {
        ...section,
        feedback_ranges: section.feedback_ranges.filter(range => range.max <= 50),
      }
      : section,
  ),
};

const LONG_FEEDBACK =
  '<p>C\u2019est tr\u00e8s bien. Vos choix correspondent \u00e0 ceux qui ont \u00e9t\u00e9 recommand\u00e9s par les \u00e9coles v\u00e9t\u00e9rinaires, et votre profil scientifique est solide. ' +
  'N\u00e9anmoins, le niveau attendu en premi\u00e8re ann\u00e9e d\u2019\u00e9tudes est \u00e9lev\u00e9 : les enseignements de biologie, de chimie et de math\u00e9matiques y sont denses et rythm\u00e9s. ' +
  'Des r\u00e9visions r\u00e9guli\u00e8res seront donc n\u00e9cessaires en classe de terminale, en particulier pour les sp\u00e9cialit\u00e9s que vous n\u2019avez pas suivies. ' +
  'Pensez enfin \u00e0 v\u00e9rifier les conditions d\u2019acc\u00e8s de chaque \u00e9cole, car certaines exigent un seuil minimal de notes en maths ou en physique-chimie, ' +
  'et \u00e0 anticiper la pr\u00e9paration de vos \u00e9preuves orales qui d\u00e9bute d\u00e8s l\u2019\u00e9t\u00e9 de votre ann\u00e9e de terminale.</p>';

const longFeedbackSectionFeedback = {
  ...sampleSurveyFeedback,
  sections: sampleSurveyFeedback.sections.map((section, index) =>
    index === 0
      ? {
        ...section,
        feedback_ranges: section.feedback_ranges.map(range => ({ ...range, feedback: LONG_FEEDBACK })),
      }
      : section,
  ),
};

export const NoFeedbackSection = Template.bind({});
NoFeedbackSection.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[0],
  surveyFeedback: noFeedbackSectionFeedback,
  surveyDefinition: sampleSurveyData[1],
};

export const LongFeedbackSection = Template.bind({});
LongFeedbackSection.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[0],
  surveyFeedback: longFeedbackSectionFeedback,
  surveyDefinition: sampleSurveyData[1],
};

export const CertificateDisabled = Template.bind({});
CertificateDisabled.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[2],
  surveyFeedback: sampleSurveyFeedback,
  surveyDefinition: sampleSurveyData[1],
  certificateEnabled: false,
};
