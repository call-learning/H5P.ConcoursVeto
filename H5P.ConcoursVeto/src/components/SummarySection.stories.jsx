import React from 'react';
import SummarySection from './SummarySection';
import { sampleSurveyFeedback } from '../helpers/testData.js';

export default {
  title: 'Components/SummarySection',
  component: SummarySection,
};

const Template = (args) => <SummarySection {...args} />;

export const WithFeedbackText = Template.bind({});
WithFeedbackText.args = {
  feedbackText: sampleSurveyFeedback.sections[2].feedback,
  feedbackRange: sampleSurveyFeedback.sections[2].feedback_ranges[0].feedback,
};

export const WithoutFeedback = Template.bind({});
WithoutFeedback.args = {};
