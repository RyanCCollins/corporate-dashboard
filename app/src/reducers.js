import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Import all of your reducers here:
import employees from 'containers/GeoSpatialViewContainer/reducer';

const rootReducer = combineReducers({
  employees,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
