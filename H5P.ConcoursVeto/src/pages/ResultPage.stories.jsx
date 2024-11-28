// ResultPage.stories.js
import React from 'react';
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
  surveyDefinition: sampleSurveyData[0],
};

export const AnotherResult = Template.bind({});
AnotherResult.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[1],
  surveyFeedback: sampleSurveyFeedback,
  surveyDefinition: sampleSurveyData[0],
};

export const FullResult = Template.bind({});
FullResult.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[2],
  surveyFeedback: sampleSurveyFeedback,
  surveyDefinition: sampleSurveyData[1],
};
