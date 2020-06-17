import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const METRIC_QUERY = gql`
  query MetricQuery($metricName: String!, $before: Timestamp, $after: Timestamp) {
    getMeasurements(input: { metricName: $metricName, before: $before, after: $after }) {
      metric
      value
      unit
      at
    }
  }
`;

const timestampToDate = timestamp => {
  const dateObject = new Date(timestamp);
  const dateString = dateObject.toLocaleString();
  return dateString.split(',')[1];
};

const Graph = ({ type }) => {
  const [date, setDate] = React.useState('');

  React.useEffect(() => {
    setDate(Date.now());
  }, []);

  const { loading, error, data } = useQuery(METRIC_QUERY, {
    variables: {
      metricName: type,
      after: date - 300000,
    },
    pollInterval: 500,
  });

  if (loading) return <p>Loading</p>;
  if (error) console.log(error);

  const graphData = data.getMeasurements.map(({ at, value, unit, metric }) => {
    return { at: timestampToDate(at), value, unit, metric };
  });

  return (
    <>
      <h1>
        {type}: {graphData[graphData.length - 1].value}
        {graphData[0].unit}
      </h1>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={graphData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="at" interval="preserveEnd" />
          <YAxis
            label={{
              value: graphData[0].unit,
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Graph;
