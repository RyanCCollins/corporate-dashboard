import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Import all of your reducers here:
import employees from 'containers/GeoSpatialViewContainer/reducer';
import keyMetrics from 'containers/KeyMetricsViewContainer/reducer';
import dataView from 'containers/DataViewContainer/reducer';
import issueKeyMetrics from 'containers/IssueKeyMetricsContainer/reducer';

import client from './apolloClient';

const rootReducer = combineReducers({
  employees,
  dataView,
  keyMetrics,
  issueKeyMetrics,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
