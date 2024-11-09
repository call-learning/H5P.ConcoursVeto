import React from 'react';
import { Box, Typography } from '@mui/material';

function GeneralFeedback({ surveyResults, surveyConfig }) {
  const totalScore = calculateTotalScore(surveyResults, surveyConfig.sections[0].questions_weight[0]);
  const feedbackRange = surveyConfig.sections[0].feedback_ranges.find(range => totalScore >= range.min);
  const feedbackText = surveyConfig.sections[0].feedback.replace('$scorepercent', totalScore.toFixed(2));

  return (
    <Box mb={4}>
      <Typography variant="h6" component="p">
        {feedbackText}
      </Typography>
      <Typography variant="body1">{feedbackRange?.feedback}</Typography>
    </Box>
  );
}

// Calculate total score based on weighted average
function calculateTotalScore(results, weights) {
  let score = 0, totalWeight = 0;
  for (const key in weights) {
    if (results[key] !== undefined) {
      score += results[key] * weights[key];
      totalWeight += weights[key];
    }
  }
  return totalWeight > 0 ? (score / totalWeight) * 100 : 0;
}

export default GeneralFeedback;
