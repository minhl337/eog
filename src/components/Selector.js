import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { useSelector, useDispatch } from 'react-redux';
import { setMetrics, addMetric, removeMetric } from '../store/actions';

const GETMETRICS = gql`
  query GetMetrics {
    getMetrics
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    display: 'block',
    color: 'white',
  },
}));

export default function Selector() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const metrics = useSelector(state => state.Metrics);
  const myMetrics = useSelector(state => state.MyMetrics);
  const { loading, error, data } = useQuery(GETMETRICS);

  if (loading) return <p>Loading</p>;
  if (error) console.log(error);

  dispatch(setMetrics(data.getMetrics));

  const handleClick = metric => {
    if (!myMetrics.includes(metric)) {
      dispatch(addMetric(metric));
    } else {
      dispatch(removeMetric(metric));
    }
  };

  return (
    <div className={classes.root}>
      {metrics.map(metric => {
        return (
          <div key={metric}>
            <Button className={classes.button} onClick={() => handleClick(metric)}>
              {metric}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
