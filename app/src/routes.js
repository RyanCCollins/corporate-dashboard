import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute path="/" component={Pages.LandingPage} name="Home" />
        <Route path="/geo-spatial" component={Pages.GeoSpatialPage} />
        <Route path="/key-metrics" component={Pages.KeyMetricsPage} name="KeyMetrics" />
        <Route path="/data" component={Pages.DataPage} name="Data" />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
