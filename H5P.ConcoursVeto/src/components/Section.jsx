import React from 'react';
import { Box, Typography, Collapse, IconButton, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FoldableSection from './FoldableSection';
import RadarChart from './RadarChart.jsx';
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
            {!!sectionConfig.questions_weight && (
              <Box display="flex" justifyContent="center" alignItems="center">
                <RadarChart pageIds={
                  sectionConfig.questions_weight?.map((weight) => weight.id)
                } results={surveyResults} definition={surveyDefinition}/>
              </Box>
            )}
            <FoldableSection feedbackText={feedbackText} feedbackRange={feedbackRange?.feedback}/>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  );
}
export default Section;
