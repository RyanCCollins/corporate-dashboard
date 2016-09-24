import ApolloClient, {
  createNetworkInterface,
} from 'apollo-client';
import { Client, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

const wsClient = new Client('ws://0.0.0.0:8007');

const networkInterface = createNetworkInterface({
  uri: '/api',
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
});
// const networkInterface = new ApolloClient({
//   networkInterface: createNetworkInterface('https://corporate-dashboard-client.herokuapp.com/api'),
//   queryTransformer: addTypeName,
// });

export default client;
