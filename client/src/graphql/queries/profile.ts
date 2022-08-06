import { gql } from '@apollo/client'

export const QUERY_PROFILE_ME = gql`
  query getProfileMe {
    me {
      id
      username
      email
      role {
        name
      }
    }
  }
`
