import ApolloClient, {
  createNetworkInterface,
} from 'apollo-client';
import { Client } from 'subscriptions-transport-ws';
const isProduction = process.env.NODE_ENV === 'production';
const uri = isProduction ?
    'https://corporate-dashboard-client.herokuapp.com/api'
  :
    'http://0.0.0.0:1338/api';

const addGraphQLSubscriptions = (networkInterface, wsClient) =>
  Object.assign(networkInterface, {
    subscribe(request, handler) {
      return wsClient.subscribe({
        query: print(request.query),
        variables: request.variables,
      }, handler);
    },
    unsubscribe(id) {
      wsClient.unsubscribe(id);
    },
  });

const wsClient = new Client('ws://0.0.0.0:8007');

const networkInterface = createNetworkInterface({
  uri,
  opts: {
    credentials: 'same-origin',
  },
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient,
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  shouldBatch: true,
  initialState: window.__INITIAL_STATE__, // eslint-disable-line no-underscore-dangle
  ssrForceFetchDelay: 100,
});

export default client;
