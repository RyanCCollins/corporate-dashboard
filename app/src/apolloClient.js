import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const isProduction = process.env.NODE_ENV !== 'development';
const productionUrl = 'https://corporate-dashboard-client.herokuapp.com/api';
const testUrl = 'http://0.0.0.0:1338/api';

const url = isProduction ? productionUrl : testUrl;

const client = new ApolloClient({
  networkInterface: createNetworkInterface(url),
  queryTransformer: addTypeName,
});

export default client;
