import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SummarySection from './SummarySection.jsx';
import { calculateSectionScore } from '../helpers/score.js';

function Section ({ sectionConfig, surveyResults, surveyDefinition }) {
  const [open, setOpen] = React.useState(false);
  const score = calculateSectionScore(surveyResults, sectionConfig.questions_weight,
    surveyDefinition);
  const feedbackRange = sectionConfig.feedback_ranges.find(range => score >= range.min);
  const feedbackText = sectionConfig.feedback.replace('$scorepercent', score.toFixed(2));

  return (
    <Box mb={3}>
      <Card>
        <CardContent sx={{my: 2}}>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">{sectionConfig.title}</Typography>
          </Box>
          <SummarySection feedbackText={feedbackText} feedbackRange={feedbackRange?.feedback}/>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Section;
