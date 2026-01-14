import type { Theme, Components } from '@mui/material/styles';

const CardHeader: Components<Omit<Theme, 'components'>>['MuiCardHeader'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      paddingBottom: theme.spacing(2),
    }),
    title: ({ theme }) => ({
      fontSize: theme.typography.body2.fontSize,
    }),
    action: ({ theme }) => ({
      '& .MuiIconButton-root': {
        border: 'none',
        padding: theme.spacing(0.75),
        '&:hover': { backgroundColor: theme.palette.info.lighter },
      },
    }),
  },
};

export default CardHeader;
