import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from '../../node_modules/graphql';

import issuesJSON from '../data/issues.json';
import employeesJSON from '../data/employees.json';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
let store = {};

const csvToJson = (csv) => {
  const content = csv.split('\n');
  const header = content[0].split(',');
  return _.tail(content).map((row) =>
    _.zipObject(header, row.split(','))
  );
};

const loadCsv = () => {
  const filename = 'customers.csv';
  const filePath = path.join(__dirname, `../data/${filename}`);
  const file = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  const jsonData = csvToJson(file);
  const data = jsonData.slice(0, jsonData.length - 1);
  data.forEach((item, index) => {
    Object.keys(item).forEach((key) => {
      data[index][key] = parseInt(data[index][key], 10);
    });
  });
  return data;
};

const customerJson = loadCsv();

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

const StoreType = new GraphQLObjectType({
  name: 'Store',
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
      resolve: () => customerJson,
    },
  }),
});


export default new GraphQLSchema({
  query: StoreType,
});
