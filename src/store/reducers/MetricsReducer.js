const initialstate = [];

export const Metrics = (state = initialstate, action) => {
  switch (action.type) {
    case 'ADDMETRIC':
      return (state = state.push(action.payload));
    default:
      return state;
  }
};
