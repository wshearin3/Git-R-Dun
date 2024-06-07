import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  query getProjects {
    thoughts {
      _id
      name
      description
      owner
      members {
        _id
        username
      }
      createdAt
    }
  }
`;

export const QUERY_USERS = gql`
  query Users {
    users {
      username
      id
    }
  }
`;

export const QUERY_TASKS = gql`
  query getTasks {
    thoughts {
      _id: ID!
      name: String!
      status: String!
      projectId: ID!
      owner: String!
      createdAt: String
    }
  }
`;
