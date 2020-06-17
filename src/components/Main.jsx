import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import Graph from './Graph';

import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
    margin: '2rem 0',
  },
  graph: {
    padding: '5rem',
  },
});

export default function Main() {
  const classes = useStyles();
  const myMetrics = useSelector(state => state.MyMetrics);

  return (
    <Container maxWidth="xl">
      <h1>Click a metric above to toggle the last 30 minutes of data.</h1>
      <h4>Data is refreshed every 1.3 seconds</h4>
      <Card className={classes.root}>
        {myMetrics &&
          myMetrics.map(metric => {
            return (
              <div key={metric}>
                <Graph className={classes.graph} type={metric} />
              </div>
            );
          })}
      </Card>
    </Container>
  );
}
