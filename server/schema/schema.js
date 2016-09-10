const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');
const issuesJSON = require('../data/issues.json');
const employeesJSON = require('../data/employees.json');
// const customersData = require('../data/customers.csv');

const EmployeeType = new graphql.GraphQLObjectType({
  name: 'employee',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    employees: { type: graphql.GraphQLInt },
    location: { type: graphql.GraphQLString },
  }),
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    employees: {
      type: new graphql.GraphQLList(EmployeeType),
      resolve: () => employeesJSON,
    },
  }),
});


module.exports = new graphql.GraphQLSchema({
  query: queryType,
});
