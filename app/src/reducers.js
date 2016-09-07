import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Import all of your reducers here:
import employees from 'containers/GeoSpatialViewContainer/reducer';
import keyMetrics from 'containers/KeyMetricsViewContainer/reducer';
import dataView from 'containers/DataViewContainer/reducer';

const rootReducer = combineReducers({
  employees,
  dataView,
  keyMetrics,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
