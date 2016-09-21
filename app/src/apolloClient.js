import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://corporate-dashboard-client.herokuapp.com/api'),
  queryTransformer: addTypeName,
});

export default client;
