import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import issuesJSON from '../data/issues.json';
import employeesJSON from '../data/employees.json';
import customerCsv from '../data/customers.csv';
import _ from 'lodash';

const csvToJson = (csv) => {
  const content = csv.split('\n');
  const header = content[0].split(',');
  return _.tail(content).map((row) =>
    _.zipObject(header, row.split(','))
  );
};

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    week_num: { type: GraphQLInt },
    num_customers: { type: GraphQLInt },
  }),
});

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLString },
    numemployees: { type: GraphQLInt },
    location: { type: GraphQLString },
  }),
});

const IssueCustomerType = new GraphQLObjectType({
  name: 'IssueCustomer',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    avatar: { type: GraphQLString },
    company: { type: GraphQLString },
  }),
});

const IssueEmployeeType = new GraphQLObjectType({
  name: 'IssueEmployee',
  fields: () => ({
    name: { type: GraphQLString },
    avatar: { type: GraphQLString },
    company: { type: GraphQLString },
  }),
});

const IssueType = new GraphQLObjectType({
  name: 'issue',
  fields: () => ({
    id: { type: GraphQLString },
    submission: { type: GraphQLString },
    close: { type: GraphQLString },
    status: { type: GraphQLString },
    customer: { type: IssueCustomerType },
    employee: { type: IssueEmployeeType },
    description: { type: GraphQLString },
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve: () => employeesJSON,
    },
    issues: {
      type: new GraphQLList(IssueType),
      resolve: () => issuesJSON,
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve: () => csvToJson(customerCsv),
    },
  }),
});


export default new GraphQLSchema({
  query: QueryType,
});
