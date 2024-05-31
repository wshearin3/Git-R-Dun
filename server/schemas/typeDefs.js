const {gql} = require('apollo-server-express');

const typeDefs = `

  type User {
    id: ID!
    username: String!
  }
  type Project {
    id: ID!
    name: String!
    description: String
    owner: User!
    members: [User!]!
    createdAt: String!
  }
  type Query {
    users: [User!]
    projects: [Project!]!
    }
 
  `;

  module.exports = typeDefs;