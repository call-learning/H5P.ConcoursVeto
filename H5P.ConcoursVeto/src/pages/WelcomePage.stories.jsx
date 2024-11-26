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
  welcomeTitle: 'Bienvenue sur le Test d’auto-positionnement pour le concours Véto.',
  welcomeText: '<p>Here is a welcome text.</p> That is <strong>bold</strong> and' +
    ' with a <link rel=\'stylesheet\' href=\'#\'>',
};
