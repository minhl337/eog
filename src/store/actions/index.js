export const setMetrics = metrics => {
  return {
    type: 'SETMETRICS',
    payload: metrics,
  };
};

export const addMetric = metric => {
  return {
    type: 'ADDMETRIC',
    payload: metric,
  };
};
export const removeMetric = metric => {
  return {
    type: 'REMOVEMETRIC',
    payload: metric,
  };
};
