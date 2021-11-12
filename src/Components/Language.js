import React from "react";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    useQuery,
    gql,
} from "@apollo/client";
import { render } from "@testing-library/react";

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: "Bearer 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"
    },
});
client
    .query({
        query: gql`
      query{
        viewer { 
            repositories (last: 3) {
                nodes {
                    languages(first:10) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
      }
    `
    })
    .then(result => console.log(result));

const LANGUAGE_INFORMATION = gql`
  query {
    viewer { 
        repositories (last: 3) {
            nodes {
                languages(first:10) {
                    nodes {
                        name
                    }
                }
            }
        }
        
    }
  }
`;


function Language0() {
    const LanguagesName = [];
    const { loading, error, data } = useQuery(LANGUAGE_INFORMATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    data.viewer.repositories["nodes"]
        .map(
            i => i.languages["nodes"]
                .forEach(element => {
                    if (!LanguagesName.includes(element.name)) {
                        LanguagesName.push(element.name)
                    }
                })
        )
    console.log(LanguagesName)
    return LanguagesName[0];
}
function Language1() {
    const LanguagesName = [];
    const { loading, error, data } = useQuery(LANGUAGE_INFORMATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    data.viewer.repositories["nodes"]
        .map(
            i => i.languages["nodes"]
                .forEach(element => {
                    if (!LanguagesName.includes(element.name)) {
                        LanguagesName.push(element.name)
                    }
                })
        )
    return LanguagesName[1];
}
function Language2() {
    const LanguagesName = [];
    const { loading, error, data } = useQuery(LANGUAGE_INFORMATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    data.viewer.repositories["nodes"]
        .map(
            i => i.languages["nodes"]
                .forEach(element => {
                    if (!LanguagesName.includes(element.name)) {
                        LanguagesName.push(element.name)
                    }
                })
        )
    return LanguagesName[2];
}
function Language3() {
    const LanguagesName = [];
    const { loading, error, data } = useQuery(LANGUAGE_INFORMATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    data.viewer.repositories["nodes"]
        .map(
            i => i.languages["nodes"]
                .forEach(element => {
                    if (!LanguagesName.includes(element.name)) {
                        LanguagesName.push(element.name)
                    }
                })
        )
    return LanguagesName[3];
}

// class Ex extends React.Component {
//     Language1() {
//         return (LanguagesName);
//     }

//     render() {
//         return <ApolloProvider client={client}><this.Language1 /><br /> </ApolloProvider>
//     }
// }

const LanguageInformation = {
    GetList:
    {
        Language0:
            function getLanguage0() {
                return (
                    <ApolloProvider client={client}>
                        <Language0 />
                    </ApolloProvider>
                );
            },
        Language1:
            function getList() {
                return (
                    <ApolloProvider client={client}>
                        <Language1 />
                    </ApolloProvider>
                );
            },
        Language2:
            function getList() {
                return (
                    <ApolloProvider client={client}>
                        <Language2 />
                    </ApolloProvider>
                );
            },
        Language3:
            function getList() {
                return (
                    <ApolloProvider client={client}>
                        <Language3 />
                    </ApolloProvider>
                );
            }
    }

}

export default LanguageInformation