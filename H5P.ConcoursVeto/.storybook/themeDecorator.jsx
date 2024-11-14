import React from 'react';
import { theme } from '../src/settings/theme';
import { ThemeProvider } from '@mui/material';
const themeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default themeDecorator;
