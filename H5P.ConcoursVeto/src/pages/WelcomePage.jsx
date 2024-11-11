import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslations } from '../hooks/useTranslation.js';
import { getAbsoluteURL } from '../helpers/utils.js';
import { H5PContext } from '../contexts/H5PContext.js';
import WaveBackground from '../components/WaveBackground.jsx';

const Header = styled('header')({
  position: 'relative',
  height: '250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  overflow: 'hidden',
});

const Logo = styled('img')({
  width: '100px',
  height: '100px',
  marginBottom: '10px',
});

function WelcomePage({ onContinue }) {
  const { translate } = useTranslations();
  const { contentId } = React.useContext(H5PContext);
  return (
    <Container>
      <WaveBackground />
      <Header>
        <Logo src={getAbsoluteURL("/images/logo.png", contentId)} alt="Logo"/>
        <Typography variant="h3" component="h1">
          {translate('welcome.title')}
        </Typography>
      </Header>
      <Typography>
        {translate('welcome.help')}
      </Typography>
      <Box my={4}>
        <Button variant="contained" color="primary" onClick={onContinue}>
          {translate('continue')}
        </Button>
      </Box>
    </Container>
  );
}

export default WelcomePage;
