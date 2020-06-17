const initialState = [];

export const MyMetrics = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDMETRIC':
      return (state = state.push(action.payload));
    case 'REMOVEMETRIC':
      return (state = state.filter(metric => metric !== action.payload));
    default:
      return state;
  }
};
