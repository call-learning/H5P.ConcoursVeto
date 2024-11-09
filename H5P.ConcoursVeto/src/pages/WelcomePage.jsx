import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';

function WelcomePage({ onContinue }) {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Survey
        </Typography>
        <Button variant="contained" color="primary" onClick={onContinue}>
          Continue
        </Button>
      </Box>
    </Container>
  );
}

export default WelcomePage;
