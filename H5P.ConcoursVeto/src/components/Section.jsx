import React from 'react';
import { Box, Typography, Collapse, IconButton, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FoldableSection from './FoldableSection';
import RadarChart from './RadarChart.jsx';
const MAX_DEFAULT_RANGE = 5;

function Section({ sectionConfig, surveyResults, surveyDefinition }) {
  const [open, setOpen] = React.useState(false);
  const score = calculateSectionScore(surveyResults, sectionConfig.questions_weight,
    sectionConfig.question_max_range ?? MAX_DEFAULT_RANGE);
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
              <Box display="flex" alignItems="center">
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

function calculateSectionScore (results, weights, max_range) {
  let score = 0, totalWeight = 0;

  weights?.forEach((weightDef) => {
    let value;
    const {id: key, weight} = weightDef;
    if (key.includes('.')) {
      // Handle compound key like 'common_subjects_terminal.history_geography'
      const [mainKey, subKey] = key.split('.');
      value = results[mainKey] && results[mainKey][subKey] !== undefined ? results[mainKey][subKey] : 0;
    } else {
      // Handle non-compound key
      if (typeof results[key] === 'object' && results[key] !== null) {
        // If the result is an object, calculate the average of its values
        const values = Object.values(results[key]);
        value = values.length > 0 ? values.reduce((sum, val) => sum + val, 0) / values.length : 0;
      } else {
        // If it's a direct value, use it as is
        value = results[key] !== undefined ? results[key] : 0;
      }
    }

    score += value/max_range * weight/100;
    totalWeight += weight;
  });
  return totalWeight > 0 ? (score / (totalWeight/100)) * 100 : 0;
}

export default Section;
