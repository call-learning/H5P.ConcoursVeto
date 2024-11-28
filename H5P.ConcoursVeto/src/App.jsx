// App.jsx
import PropTypes from 'prop-types';
import 'survey-core/defaultV2.min.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './settings/theme';
import { useState} from 'react';
import WelcomePage from './pages/WelcomePage';
import ResultPage from './pages/ResultPage';
import SurveyComponentPage from './components/SurveyComponentPage.jsx';
import { decodeAndParseJson } from './helpers/utils.js';

function App(props) {
  const [page, setPage] = useState('welcome');
  const [surveyResults, setSurveyResults] = useState(null);
  const surveyObject = decodeAndParseJson(props.surveyDefinition);


  const handleContinue = () => setPage('survey');
  const handleComplete = (survey) => {
    setSurveyResults(survey.data);
    setPage('result');
  };
  const handleRestart = () => setPage('welcome');

  return (
    <ThemeProvider theme={theme}>
      {page === 'welcome' && <WelcomePage onContinue={handleContinue}
                                          welcomeText={props.settings.welcomeText} welcomeTitle={props.settings.welcomeTitle} />}
      {page === 'survey' && <SurveyComponentPage surveyDefinition={JSON.stringify(surveyObject)} onComplete={handleComplete} />}
      {page === 'result' && <ResultPage
        onRestart={handleRestart}
        surveyResults={surveyResults}
        surveyDefinition={surveyObject}
        surveyFeedback={props.feedback}/>}
    </ThemeProvider>
  );
}

App.propTypes = {
  surveyDefinition: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  feedback: PropTypes.object.isRequired
};

export default App;
