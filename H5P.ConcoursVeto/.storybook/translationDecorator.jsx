import React from 'react';
import { TranslationsContext } from '../src/contexts/TranslationsContext';
import sampleData from '../data/sampleData.json';

const translationDecorator = storyFn => (
  <TranslationsContext.Provider value={sampleData.l10n}>{storyFn()}</TranslationsContext.Provider>
);

export default translationDecorator;
