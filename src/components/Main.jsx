import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import Graph from './Graph';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
    margin: '200px 0',
  },
  graph: {
    padding: '5rem',
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Card className={classes.root}>{/* <Graph className={classes.graph} type="waterTemp" /> */}</Card>
    </Container>
  );
}
