import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser(username: String!) {
token
user {
_id
username
    }
}
`