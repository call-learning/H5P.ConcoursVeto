import React from 'react';
import { Box, Typography, Collapse, IconButton, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FoldableSection from './FoldableSection';
import { calculateSectionScore } from '../helpers/score.js';


function Section({ sectionConfig, surveyResults, surveyDefinition }) {
  const [open, setOpen] = React.useState(false);
  const score = calculateSectionScore(surveyResults, sectionConfig.questions_weight,
    surveyDefinition);
  const feedbackRange = sectionConfig.feedback_ranges.find(range => score >= range.min);
  const feedbackText = sectionConfig.feedback.replace('$scorepercent', score.toFixed(2));

  return (
    <Box mb={3}>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">{sectionConfig.title}</Typography>
            <IconButton onClick={() => setOpen(!open)} aria-expanded={open}>
              <ExpandMoreIcon/>
            </IconButton>
          </Box>
          <Collapse in={open}>
            <FoldableSection feedbackText={feedbackText} feedbackRange={feedbackRange?.feedback}/>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  );
}
export default Section;
