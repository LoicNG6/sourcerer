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
import { GraphQLID } from 'graphql';
import { findByLabelText } from '@testing-library/react';

setConfiguration({ maxScreenClass: 'xl' });

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
          followers {
            totalCount
          }
          contributionsCollection {
            totalCommitContributions
          }
          repositories {
            totalCount
          }
          bio
          avatarUrl
          
          contributionsCollection {
            contributionYears
            totalRepositoryContributions
            endedAt
          }
          repositoriesContributedTo(first: 10) {
            totalCount
          }
        }        
      }
    `
  })
  .then(result => console.log(result));

const requests = gql`
  query {
    viewer { 
      login
    }
  }
`;

function GetUserName() {
  const { loading, error, data } = useQuery(requests);

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


function App() {
  const container_Style = {
    border: "solid",
    marginBottom: 10,
    display: "grid",
  };
  const item_container_Style = {
    border: "solid"
  };
  const cols_style = {
    border: "solid",
    backgroundColor: "lightblue",
  };
  const rows_style = {
    border: "solid",
    margin: 10,
    padding: 10,
  };
  const contain_row_style = {
    backgroundColor: 'LightGray',
    margin: 10,
    padding: 10,
    height: "auto",
  };
  const contain_label_style = {
    width:90,
    height:90,
    border:"solid",
  }


  return (
    <div>
      {/*----------------------------------------------Entête---------------------------------------------------------------------------*/}
      <Container style={{ border: "solid", marginBottom: 10 }}>

        {/*----------------------------------------------Les informatiionns générales--------------------------------------------------------*/}

        <Row style={rows_style}>
          <Col sm={2} style={cols_style}>
            Username + Nom complet
            <Row style={rows_style}>
              <Col style={{ border: 'solid', borderRadius: 60, paddingBlock: 15 }}>
                Avatar (Les contours devront etre arrondis)
              </Col>
            </Row>
          </Col>
          <Col sm={2} style={cols_style}>
            <Row style={contain_label_style}>Commits (le nombre de commit)</Row>
            <Row style={contain_row_style}>
              "Values"
            </Row>
          </Col>
          <Col sm={2} style={cols_style}>
            <Row style={contain_label_style}>Repos (Le nombre total de repository)</Row>
            <Row style={contain_row_style}>
              "Values"
            </Row>
          </Col>
          <Col sm={2} style={cols_style}>
            <Row style={contain_label_style}>Lines of code (Le nombre total de ligne de code)</Row>
            <Row style={contain_row_style}>
              "Values"
            </Row>
          </Col>
          <Col sm={2} style={cols_style}>
            <Row style={contain_label_style}>Followers</Row>
            <Row style={contain_row_style}>
              "Values"
            </Row>
          </Col>
          <Col sm={2} style={cols_style}>
            <Row style={contain_label_style}>Following</Row>
            <Row style={contain_row_style}>
              "Values"
            </Row>
          </Col>
        </Row>


        <Row style={rows_style}>

          {/*----------------------------------------------Overview--------------------------------------------------------------------------*/}
          <Col sm={12} style={{ border: 'solid' }}>
            <Row style={rows_style}>
              <Col style={cols_style}>
                <h2>Overview</h2>
                Diagrame décrivant la proportion d'utilisation des langages durant une période données
              </Col>
              <Col style={cols_style}>
                Nombre de repos
                Last updated
              </Col>
            </Row>
            <Row style={rows_style}>
              <Col style={contain_row_style}>Langage 1</Col>
              <Col style={contain_row_style}>Langage 2</Col>
              <Col style={contain_row_style}>Langage 3</Col>
              <Col style={contain_row_style}>Langage 4</Col>
            </Row>
          </Col>

          {/*----------------------------------------------Langages--------------------------------------------------------------------------*/}
          <Col sm={12} style={{ border: 'solid' }}>
            <Row style={rows_style}>
              <Col style={cols_style}>
                <h2>Languages</h2>
                Nom des langage + Commit par langage + Loc (voir ce que ça signifie) par langage
                <Row>
                  <Col style={contain_row_style}>
                    Langage 1
                    <Row style={{backgroundColor:"lightgreen"}}>Nombre de commit </Row>
                    Nombre de Loc
                  </Col>
                  <Col style={contain_row_style}></Col>
                </Row>
              </Col>
              <Col style={cols_style}>
                Fromage représentant la part d'activité par langage
              </Col>
            </Row>
          </Col>

          {/*----------------------------------------------Repository------------------------------------------------------------------------*/}
          <Col sm={12} style={{ border: 'solid' }}>
            <Row style={rows_style}>
              <Col style={cols_style}> <h2> Repositories</h2> </Col>
              <Col style={cols_style}> compte des repositories + lastUpdate (date + heure)</Col>
            </Row>
            <Row style={rows_style}>
              Tableau (Liste des repositories)
            </Row>
          </Col>

        </Row>

      </Container>

      <div style={container_Style}>
        Share your profile on :
        <span>
          <a href="ideal link">aedin</a>
        </span>
        <span>
          <a href="ideal link">Twitter</a>
        </span>
        <span>
          <a href="ideal link">Facebook</a>
        </span>
        <span>
          <a href="ideal link">Get Html</a>
        </span>
      </div>
    </div>
  );
}



render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

