import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://0.0.0.0:1338/api'),
  queryTransformer: addTypeName,
});

export default client;
