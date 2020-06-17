import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '1.5rem',
  },
});

const metrics = [
  'flareTemp',
  'injValveOpen',
  'waterTemp',
  'casingPressure',
  'tubingPressure',
  'oilTemp',
];

export default function Menu() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Typography variant='h6' color='inherit'>
        Minh's React Assessment
      </Typography>
    </AppBar>
  );
}
