// App.jsx
import PropTypes from 'prop-types';
import 'survey-core/defaultV2.min.css';
import { Model, Survey } from 'survey-react-ui';
import { ThemeProvider } from '@mui/material';
import { theme } from './settings/theme';
import { StylesManager } from 'survey-core';
import { useState, useCallback, useContext } from 'react';
import { H5PContext } from './contexts/H5PContext.js';
import WelcomePage from './pages/WelcomePage';
import ResultPage from './pages/ResultPage';

StylesManager.applyTheme('defaultV2');

function App(props) {
  const [page, setPage] = useState('welcome');
  const [surveyResults, setSurveyResults] = useState(null);
  const h5pContext = useContext(H5PContext);
  const encodedJS = JSON.stringify(props.surveyDefinition).replace(/&#039;/g, "'");
  const survey = new Model(encodedJS);

  const handleContinue = () => setPage('survey');
  const handleComplete = (survey) => {
    setSurveyResults(survey.data);
    setPage('result');
  };
  const handleRestart = () => setPage('welcome');

  survey.onComplete.add(handleComplete);

  survey.afterRenderPage = useCallback((survey) => {
    h5pContext.resizeAction();
  });

  return (
    <ThemeProvider theme={theme}>
      {page === 'welcome' && <WelcomePage onContinue={handleContinue} />}
      {page === 'survey' && <Survey model={survey} />}
      {page === 'result' && <ResultPage onRestart={handleRestart} surveyResults={surveyResults}  surveyConfig={props.feedback}/>}
    </ThemeProvider>
  );
}

App.propTypes = {
  surveyDefinition: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  feedback: PropTypes.object.isRequired
};

export default App;
