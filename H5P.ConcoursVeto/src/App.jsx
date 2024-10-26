import PropTypes from 'prop-types';
import 'survey-core/defaultV2.min.css';
import { Model, Survey } from 'survey-react-ui';
import { ThemeProvider } from '@mui/material';
import { theme } from './settings/theme';
import { StylesManager } from 'survey-core';

StylesManager.applyTheme('defaultV2');

function App(props) {
  const survey = new Model(props.surveyDefinition);
  return (
    <ThemeProvider theme={theme}>
        <Survey model={survey} />
    </ThemeProvider>
  )
}
App.propTypes = {
  surveyDefinition: PropTypes.object.isRequired,
};

export default App
