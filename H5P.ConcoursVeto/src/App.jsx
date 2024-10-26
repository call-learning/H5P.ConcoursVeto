import PropTypes from 'prop-types';
import 'survey-core/defaultV2.min.css';
import { Model, Survey } from 'survey-react-ui';
import { ThemeProvider } from '@mui/material';
import { theme } from './settings/theme';
import { StylesManager } from 'survey-core';
import { useCallback, useContext } from 'react';
import { H5PContext } from './contexts/H5PContext.js';

StylesManager.applyTheme('defaultV2');

function App(props) {
  const h5pContext = useContext(H5PContext);
  const encodedJS = JSON.stringify(props.surveyDefinition).replace(/&#039;/g, "'");;
  const survey = new Model(encodedJS);
  survey.afterRenderPage = useCallback((survey) => {
    h5pContext.resizeAction();
  })
  return (
    <ThemeProvider theme={theme}>
        <Survey model={survey} />
    </ThemeProvider>
  )
}
App.propTypes = {
  surveyDefinition: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

export default App
