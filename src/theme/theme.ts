import { createTheme } from '@mui/material/styles';
import customShadows from './shadows';
import typography from './typography';
import palette from './palette';

import Stack from './components/layout/Stack';
import Paper from './components/surface/Paper';

import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Toolbar from './components/button/Toolbar';

import InputBase from './components/input/InputBase';
import FilledInput from './components/input/FilledInput';
import OutlinedInput from './components/input/OutlinedInput';
import InputAdornment from './components/input/InputAdornment';
import FormControlLabel from './components/input/FormControlLabel';
import Checkbox from './components/input/Checkbox';
import Select from './components/input/Select';
import Slider from './components/input/Slider';

import List from './components/list/List';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemText from './components/list/ListItemText';
import ListItemButton from './components/list/ListItemButton';
import Collapse from './components/list/Collapse';
import MenuItem from './components/list/MenuItem';

import CssBaseline from './components/utils/CssBaseline';

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiStack: Stack,
    MuiPaper: Paper,

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

    MuiList: List,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiListItemButton: ListItemButton,
    MuiCollapse: Collapse,
    MuiMenuItem: MenuItem,

    MuiCssBaseline: CssBaseline,
  },
});
