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
      _id
    }
  }
`;

export const QUERY_TASKS = gql`
  query getTasks {
    tasks {
      _id
      name
      status
      projectId
      owner
      createdAt
    }
  }
`;
