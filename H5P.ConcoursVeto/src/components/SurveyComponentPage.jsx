// SurveyComponentPage.jsx
import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { Model, Survey } from 'survey-react-ui';
import { theme } from '../settings/theme.js';
import { H5PContext } from '../contexts/H5PContext.js';

const SurveyComponentPage = ({ surveyDefinition, onComplete }) => {
  const survey = new Model(surveyDefinition);
  const h5pContext = useContext(H5PContext);
  survey.afterRenderPage = useCallback((survey) => {
    h5pContext.resizeAction();
  });
  survey.applyTheme({
    cssVariables: {
      "--primary": theme.palette.primary.main
    },
    "themeName": "defaultV2"
  })
  survey.onComplete.add(onComplete);
  return <Survey model={survey} />;
};

SurveyComponentPage.propTypes = {
  surveyDefinition: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default SurveyComponentPage;
