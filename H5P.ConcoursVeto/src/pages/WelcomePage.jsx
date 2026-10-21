import React from 'react';
import { Button, Typography, Container, Box, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslations } from '../hooks/useTranslation.js';
import { getLibraryAssetURL, removeEncodedSingleQuote } from '../helpers/utils.js';
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

function WelcomePage({ onContinue, welcomeTitle, welcomeText }) {
  const { translate } = useTranslations();
  const { currentLibrary } = React.useContext(H5PContext);
  const theme = useTheme();
  return (
    <Container>
      <WaveBackground />

      <Header sx={{py: 3}}>
        <Logo src={getLibraryAssetURL('dist/images/logo.png', currentLibrary)} alt="Logo"/>
        <Typography variant="h3" component="h1">
          {removeEncodedSingleQuote(welcomeTitle)}
        </Typography>
      </Header>
      <div dangerouslySetInnerHTML={{ __html: welcomeText }} style={{color: theme.palette.grey[900], textAlign: "center"}}/>
      <Box my={4} textAlign={"center"}>
        <Button variant="contained" color="primary" onClick={onContinue}>
          {translate('continue')}
        </Button>
      </Box>
    </Container>
  );
}

export default WelcomePage;
