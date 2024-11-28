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
  surveyDefinition: sampleSurveyData,
};

export const AnotherResult = Template.bind({});
AnotherResult.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[1],
  surveyFeedback: sampleSurveyFeedback,
  surveyDefinition: sampleSurveyData,
};
