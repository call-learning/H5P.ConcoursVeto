import { createTheme } from '@mui/material/styles';
import { themeConfig } from './themeConfig';
import '../App.css';
export const theme = createTheme({
  palette: {
    background: {
      default: themeConfig.colors.background
    },
    primary: {
      main: themeConfig.colors.text
    },
    text: {
      primary: themeConfig.colors.text
    }
  },
  typography: {
    allVariants: {
      color: themeConfig.colors.text
    }
  }
});
