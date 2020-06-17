import { reducer as weatherReducer } from '../Features/Weather/reducer';
import { Metrics } from './reducers/MetricsReducer';
import { MyMetrics } from './reducers/MyMetricsReducer';

export default {
  weather: weatherReducer,
  Metrics,
  MyMetrics,
};
