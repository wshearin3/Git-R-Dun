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
    project(id: ID!): Project
    }
 
  type Mutation{
    addUser(username: String!): User!
    addProject(name: String!, description: String!, owner: ID!, members: [ID]): Project
  
  } 
  `;

  module.exports = typeDefs;