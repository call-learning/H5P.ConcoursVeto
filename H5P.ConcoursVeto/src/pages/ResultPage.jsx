import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Section from '../components/Section';
import { useTranslations } from '../hooks/useTranslation.js';
import RadarChart from '../components/RadarChart.jsx';
import DownloadCertificateDialog from '../components/DownloadCertificateDialog.jsx';

function ResultPage({ onRestart, surveyResults, surveyFeedback, surveyDefinition }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const { translate } = useTranslations();
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {translate('survey_results')}
        </Typography>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: surveyFeedback?.global }}/>
        <div>
          {surveyDefinition.pages.map((page) => (
            <div key={page.name}>
              <h2>{page.name}</h2>
              <RadarChart page={page} results={surveyResults}/>
            </div>
          ))}
        </div>
        {surveyFeedback.sections.map((sectionConfig, index) => (
          <Section key={index} sectionConfig={sectionConfig} surveyResults={surveyResults}/>
        ))}
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleOpenDialog}>
            {translate('download_certificate')}
          </Button>
          <Button variant="outlined" color="secondary" onClick={onRestart} style={{ marginLeft: '10px' }}>
            {translate('restart_survey')}
          </Button>
        </Box>
      </Box>
      <DownloadCertificateDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        surveyFeedback={surveyFeedback}
      />
    </Container>
  );
}

export default ResultPage;
