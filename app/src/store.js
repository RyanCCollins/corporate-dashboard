import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import client from './apolloClient';
import { initialState as dataView } from './containers/DataViewContainer/reducer';
import { initialState as employees } from './containers/GeospatialViewContainer/reducer';
import { initialState as keyMetrics } from './containers/KeyMetricsViewContainer/reducer';
import { initialState as issueKeyMetrics } from './containers/IssueKeyMetricsContainer/reducer';

const isProduction = process.env.NODE_ENV !== 'development';
const isClient = typeof document !== 'undefined';

const initialState = {
  employees,
  keyMetrics,
  dataView,
  issueKeyMetrics,
};

/* Commonly used middlewares and enhancers */
/* See: http://redux.js.org/docs/advanced/Middleware.html*/
const middlewares = [thunk, client.middleware()];
const enhancers = [];

if (!isProduction && isClient) {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);

  if (typeof devToolsExtension === 'function') {
    const devToolsExtension = window.devToolsExtension;
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

/* Hopefully by now you understand what a store is and how redux uses them,
 * But if not, take a look at: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
 * And https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch
 */
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

/* See: https://github.com/reactjs/react-router-redux/issues/305 */
export const history = syncHistoryWithStore(browserHistory, store);

/* Hot reloading of reducers.  How futuristic!! */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    /*eslint-disable */ // Allow require
    const nextRootReducer = require('./reducers').default;
    /*eslint-enable */
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
