import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import ResultPage from './ResultPage.jsx';
import { H5PContext } from '../contexts/H5PContext.js';
import { TranslationsContext } from '../contexts/TranslationsContext.js';
import {
  sampleSurveyData,
  sampleSurveyFeedback,
  sampleSurveyResults,
} from '../helpers/testData.js';

jest.mock('../components/Section.jsx', () => ({ __esModule: true, default: () => null }));
jest.mock('../components/WaveBackground.jsx', () => ({ __esModule: true, default: () => null }));
jest.mock('../components/DownloadCertificateDialog.jsx', () => ({ __esModule: true, default: () => null }));

const translations = [
  { key: 'survey_results', text: "Résultats de l'auto-évaluation" },
  { key: 'download_certificate', text: "Télécharger l'attestation" },
  { key: 'restart_survey', text: "Recommencer l'auto-évaluation" },
  { key: 'firstname', text: 'Prénom' },
  { key: 'lastname', text: 'Nom' },
  { key: 'psupid', text: 'Identifiant Parcoursup' },
  { key: 'confirm', text: 'Confirmer' },
  { key: 'cancel', text: 'Annuler' },
];

function renderResult (certificateEnabled) {
  return renderToStaticMarkup(
    React.createElement(
      TranslationsContext.Provider,
      { value: translations },
      React.createElement(
        H5PContext.Provider,
        { value: { resizeAction: () => {} } },
        React.createElement(ResultPage, {
          onRestart: () => {},
          surveyResults: sampleSurveyResults[2],
          surveyFeedback: sampleSurveyFeedback,
          surveyDefinition: sampleSurveyData[1],
          certificateEnabled,
        }),
      ),
    ),
  );
}

describe('ResultPage certificate option', () => {
  it('keeps the certificate option enabled when the setting is absent', () => {
    const markup = renderResult(undefined);
    expect(markup).toContain('Télécharger l');
  });

  it('renders no certificate option when disabled', () => {
    const markup = renderResult(false);
    expect(markup).not.toContain('Télécharger l');
    expect(markup).toContain('Recommencer l');
  });
});
