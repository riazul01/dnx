import { createTheme } from '@mui/material/styles';
import customShadows from './shadows';
import typography from './typography';
import palette from './palette';

import CssBaseline from './components/utils/CssBaseline';

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiCssBaseline: CssBaseline,
  },
});