import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Weather from '../Features/Weather/Weather';

import Selector from './Selector';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
    fontSize: '1rem',
  },
});

export default () => {
  const classes = useStyles();

  const name = "minh-chau-ha's";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {name} EOG React Visualization Assessment
        </Typography>
        <Selector />
        <Weather />
      </Toolbar>
    </AppBar>
  );
};
