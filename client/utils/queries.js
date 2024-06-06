import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query Users {
  users {
    username
    id
  }
}
`;

// export const QUERY_SINGLE_USER