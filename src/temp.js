import React from 'react';
import { render } from 'react-dom';
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer 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"
  },
});

// const client content all requests found in the console
client
  .query({
    query: gql`
      query {
        viewer {
          login
        }        
      }
    `
  })
  .then(result => console.log(result));

const PROFILE_INFORMATION = gql`
  query {
    viewer { 
      login
      bio
    }
  }
`;

function GetLogin() {
  const { loading, error, data } = useQuery(PROFILE_INFORMATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>
        {data.viewer.login}
      </p>
    </div>
  );
}

function GetBio() {
  const { loading, error, data } = useQuery(PROFILE_INFORMATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>
        {data.viewer.bio}
      </p>
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <GetUserName />
    <GetBio />
  </ApolloProvider>,
  document.getElementById('root'),
);









