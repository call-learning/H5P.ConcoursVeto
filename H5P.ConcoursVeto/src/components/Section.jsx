import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SummarySection from './SummarySection.jsx';
import { calculateSectionScore } from '../helpers/score.js';
import { selectFeedbackRange } from '../helpers/feedback.js';

function Section ({ sectionConfig, surveyResults, surveyDefinition }) {
  const [open, setOpen] = React.useState(false);
  const score = calculateSectionScore(surveyResults, sectionConfig.questions_weight,
    surveyDefinition);
  const feedbackRange = selectFeedbackRange(score, sectionConfig.feedback_ranges);
  return (
    <Box mb={3}>
      <Card>
        <CardContent sx={{my: 2}}>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">{sectionConfig.title}</Typography>
          </Box>
          <SummarySection feedbackRange={feedbackRange?.feedback}/>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Section;
