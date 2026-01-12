import { createTheme } from '@mui/material/styles';
import customShadows from './shadows';
import typography from './typography';
import palette from './palette';

import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Toolbar from './components/button/Toolbar';

import InputBase from './components/input/InputBase';
import Checkbox from './components/input/Checkbox';
import Select from './components/input/Select';
import InputAdornment from './components/input/InputAdornment';
import FilledInput from './components/input/FilledInput';
import FormControlLabel from './components/input/FormControlLabel';
import OutlinedInput from './components/input/OutlinedInput';
import Slider from './components/input/Slider';

import CssBaseline from './components/utils/CssBaseline';

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiInputBase: InputBase,
    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputAdornment: InputAdornment,
    MuiFormControlLabel: FormControlLabel,
    MuiCheckbox: Checkbox,
    MuiSelect: Select,
    MuiSlider: Slider,

    MuiCssBaseline: CssBaseline,
  },
});
