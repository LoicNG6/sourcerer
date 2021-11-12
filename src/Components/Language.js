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
                        color
                    }
                }
            }
        }
        
    }
  }
`;

function LanguageColor0() {
    const LanguageColor = [];
    const { loading, error, data } = useQuery(LANGUAGE_INFORMATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    data.viewer.repositories["nodes"]
        .map(
            i => i.languages["nodes"]
                .forEach(element => {
                    if (!LanguageColor.includes(element.color)) {
                        LanguageColor.push(element.color)
                    }
                })
        )
    const color = LanguageColor[0]
    return (
        <div
            style={{
                backgroundColor: color,
                width: 10,
                height: 10,
                borderRadius: 50,
            }}
        ></div>
    )
}
function LanguageColor1() {
    const LanguageColor = [];
    const { loading, error, data } = useQuery(LANGUAGE_INFORMATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    data.viewer.repositories["nodes"]
        .map(
            i => i.languages["nodes"]
                .forEach(element => {
                    if (!LanguageColor.includes(element.color)) {
                        LanguageColor.push(element.color)
                    }
                })
        )
    const color = LanguageColor[1]
    return (
        <div
            style={{
                backgroundColor: color,
                width: 10,
                height: 10,
                borderRadius: 50,
            }}
        ></div>
    )
}
function LanguageColor2() {
    const LanguageColor = [];
    const { loading, error, data } = useQuery(LANGUAGE_INFORMATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    data.viewer.repositories["nodes"]
        .map(
            i => i.languages["nodes"]
                .forEach(element => {
                    if (!LanguageColor.includes(element.color)) {
                        LanguageColor.push(element.color)
                    }
                })
        )
    const color = LanguageColor[2]
    return (
        <div
            style={{
                backgroundColor: color,
                width: 10,
                height: 10,
                borderRadius: 50,
            }}
        ></div>
    )
}
function LanguageColor3() {
    const LanguageColor = [];
    const { loading, error, data } = useQuery(LANGUAGE_INFORMATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    data.viewer.repositories["nodes"]
        .map(
            i => i.languages["nodes"]
                .forEach(element => {
                    if (!LanguageColor.includes(element.color)) {
                        LanguageColor.push(element.color)
                    }
                })
        )
    const color = LanguageColor[3]
    return (
        <div
            style={{
                backgroundColor: color,
                width: 10,
                height: 10,
                borderRadius: 50,
            }}
        ></div>
    )
}

function LanguageName0() {
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

function LanguageName1() {
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
function LanguageName2() {
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
function LanguageName3() {
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
        {
            Name:
                function getLanguageName0() {
                    return (
                        <ApolloProvider client={client}>
                            <LanguageName0 />
                        </ApolloProvider>
                    );
                },
            Color:
                function getLanguageColor0() {
                    return (
                        <ApolloProvider client={client}>
                            <LanguageColor0 />
                        </ApolloProvider>
                    );
                },
        },

        Language1:
        {
            Name:
                function getLanguageName1() {
                    return (
                        <ApolloProvider client={client}>
                            <LanguageName1 />
                        </ApolloProvider>
                    );
                },
            Color:
                function getLanguageColor1() {
                    return (
                        <ApolloProvider client={client}>
                            <LanguageColor1 />
                        </ApolloProvider>
                    );
                },
        },
        Language2:
        {
            Name:
                function getLanguageName2() {
                    return (
                        <ApolloProvider client={client}>
                            <LanguageName2 />
                        </ApolloProvider>
                    );
                },
            Color:
                function getLanguageColor2() {
                    return (
                        <ApolloProvider client={client}>
                            <LanguageColor2 />
                        </ApolloProvider>
                    );
                },
        },
        Language3:
        {
            Name:
                function getLanguageName3() {
                    return (
                        <ApolloProvider client={client}>
                            <LanguageName3 />
                        </ApolloProvider>
                    );
                },
            Color:
                function getLanguageColor3() {
                    return (
                        <ApolloProvider client={client}>
                            <LanguageColor3 />
                        </ApolloProvider>
                    );
                },
        }
    }

}

export default LanguageInformation