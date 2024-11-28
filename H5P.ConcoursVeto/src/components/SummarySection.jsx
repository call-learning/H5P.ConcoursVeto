import React from 'react';
import { Typography, Box } from '@mui/material';

function SummarySection({ feedbackText, feedbackRange }) {
  return (
    <Box mt={2}>
      <Typography variant="body1" color={"textSecondary"} dangerouslySetInnerHTML={{ __html:feedbackText}}/>
      {feedbackRange && (
        <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html:feedbackRange}}/>
      )}
    </Box>
  );
}

export default SummarySection;
