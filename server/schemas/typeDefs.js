const {gql} = require('apollo-server-express');

const typeDefs = `

  type User {
    id: ID!
    username: String!
  }
  type Query {
    users: [User!]
    }
  `;

  module.exports = typeDefs;