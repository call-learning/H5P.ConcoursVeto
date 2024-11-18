import React from 'react';
import { H5PContext } from '../src/contexts/H5PContext';
const contextDecorator = storyFn => (
  <H5PContext.Provider value={{
    contentId: 1,
    currentLibrary: 'H5P.ConcoursVeto',
    saveState: () => {},
    finishAction: () => {},
    startAction: () => {},
    resizeAction: () => {}
  }}>{storyFn()}</H5PContext.Provider>

);

export default contextDecorator;
