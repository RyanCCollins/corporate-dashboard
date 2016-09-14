import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from './store';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
/* eslint-enable */

const routes = (
  <ApolloProvider store={store} client={client}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Pages.LandingPage} name="Home" />
        <Route path="/geo-spatial" component={Pages.GeoSpatialPage} />
        <Route path="/key-metrics" component={Pages.KeyMetricsPage} name="KeyMetrics" />
        <Route path="/data" component={Pages.DataPage} name="Data" />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default routes;
