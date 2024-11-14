// src/pages/WelcomePage.stories.jsx
import React from 'react';
import WelcomePage from './WelcomePage';

export default {
  title: 'Pages/WelcomePage',
  component: WelcomePage,
};

const Template = (args) => <WelcomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  onContinue: () => alert('Continue button clicked'),
};
