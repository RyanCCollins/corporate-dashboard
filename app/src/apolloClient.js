import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';

const productionUrl = 'https://corporate-dashboard-client.herokuapp.com/api';
const testUrl = 'http://0.0.0.0:1338/api';

const client = new ApolloClient({
  networkInterface: createNetworkInterface(testUrl),
  queryTransformer: addTypeName,
});

export default client;
