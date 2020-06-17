const initialstate = [];

export const Metrics = (state = initialstate, action) => {
  switch (action.type) {
    case 'SETMETRICS':
      return (state = action.payload);
    default:
      return state;
  }
};
