/* eslint-disable */
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1338 : process.env.PORT;
const path = require('path');
const express = require('express');
const app = express();
import { graphql } from 'graphql';
const graphqlHTTP = require('express-graphql');
const query = 'query { employees { id, employees, location }}';
import schema from './schema/schema';

app.use(express.static(__dirname + '/public'));

graphql(schema, query).then((result) => {
  console.log(JSON.stringify(result))
});

app.use('/api', graphqlHTTP({ schema, pretty: true, graphiql: true }))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.warn(err);
  }
  return console.info(`==> 😎 Listening on port ${port}. Open http://0.0.0.0:${port}/ in your browser.`);
});
/* eslint-enable */
