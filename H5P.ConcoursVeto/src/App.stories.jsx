// src/stories/ResultPage.stories.jsx
import React from 'react';
import App from './App.jsx'
import { action } from '@storybook/addon-actions';
import { Container } from '@mui/material';
import { sampleSurveyData, sampleSurveyFeedback, sampleSurveyResults } from './helpers/testData.js';

export default {
  title: 'App',
  component: App,
  decorators: [(Story) => <Container maxWidth="md"><Story /></Container>],
};

const settings = {
  welcomeTitle: 'Bienvenue sur le\nTest d’auto-positionnement pour le concours Véto.',
  welcomeText: '<p>Ce test a pour objectif de vous aider à évaluer vos chances de réussite au concours d’entrée aux écoles vétérinaires.</p> Il ne prétend en rien avoir une vocation prédictive précise sur vos chances de succès à un concours d\'entrée aux écoles vétérinaires et lors de vos études éventuelles.'
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRestart: action('Restart Survey'),
  surveyResults: sampleSurveyResults[0],
  surveyFeedback: sampleSurveyFeedback,
  surveyDefinition: JSON.stringify(sampleSurveyData[0]),
  settings
};
