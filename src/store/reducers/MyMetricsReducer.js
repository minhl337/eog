const initialState = [];

export const MyMetrics = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDMETRIC':
      return (state = [...state, action.payload]);
    case 'REMOVEMETRIC':
      const newState = state.filter(metric => metric !== action.payload);
      return (state = [...newState]);
    default:
      return state;
  }
};
