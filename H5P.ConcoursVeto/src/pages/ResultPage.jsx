import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Section from '../components/Section';
import { useTranslations } from '../hooks/useTranslation.js';

function ResultPage({ onRestart, surveyResults, surveyConfig }) {
  const downloadPDF = () => {
    // Logic to generate and download PDF
    console.log('PDF downloaded');
  };
  const { translate } = useTranslations();
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {translate('survey_results')}
        </Typography>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: surveyConfig?.global }} />
        {surveyConfig.sections.map((sectionConfig, index) => (
            <Section key={index} sectionConfig={sectionConfig} surveyResults={surveyResults} />
        ))}
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={downloadPDF}>
            Download PDF
          </Button>
          <Button variant="outlined" color="secondary" onClick={onRestart} style={{ marginLeft: '10px' }}>
            Restart Survey
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ResultPage;
