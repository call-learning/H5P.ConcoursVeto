/** @type { import('@storybook/react').Preview } */
import themeDecorator from './themeDecorator.jsx';
import translationDecorator from './translationDecorator.jsx';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [themeDecorator, translationDecorator],
};

export default preview;
