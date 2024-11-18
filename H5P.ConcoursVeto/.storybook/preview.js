/** @type { import('@storybook/react').Preview } */
import themeDecorator from './themeDecorator.jsx';
import translationDecorator from './translationDecorator.jsx';
import contextDecorator from './contextDecorator.jsx';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [themeDecorator, translationDecorator, contextDecorator],
};

export default preview;
