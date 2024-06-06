import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  query getProjects {
    thoughts {
      id
      name
      description
      owner
      members {
        id
        username
      }
      createdAt
    }
  }
`;

 