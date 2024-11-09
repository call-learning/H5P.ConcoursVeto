import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import GeneralFeedback from '../components/GeneralFeedback';
import Section from '../components/Section';

function ResultPage({ onRestart, surveyResults, surveyConfig }) {
  const downloadPDF = () => {
    // Logic to generate and download PDF
    console.log('PDF downloaded');
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Survey Results
        </Typography>
        <GeneralFeedback surveyResults={surveyResults} surveyConfig={surveyConfig} />
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
