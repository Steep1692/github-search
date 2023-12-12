import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import client from './apollo';

const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

export const useSearchRepositories = () =>
  useLazyQuery(SEARCH_REPOSITORIES, {
    client,
  });