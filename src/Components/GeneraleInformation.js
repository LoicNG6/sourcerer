import React from "react";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    useQuery,
    gql,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: "Bearer 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"
    },
});

/*---------------------Generale Information---------------------*/

const PROFILE_INFORMATION = gql`
  query {
    viewer { 
      login
      name
      bio
      avatarUrl
      repositories {
        totalCount
      }
      commitComments {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;

function Login() {
    const { loading, error, data } = useQuery(PROFILE_INFORMATION);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        data.viewer.login
    );
}
function Name() {
    const { loading, error, data } = useQuery(PROFILE_INFORMATION);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        data.viewer.name
    );
}
function Bio() {
    const { loading, error, data } = useQuery(PROFILE_INFORMATION);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        data.viewer.bio
    );
}
function Avatar() {
    const { loading, error, data } = useQuery(PROFILE_INFORMATION);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        data.viewer.avatarUrl
    );
}
function TotalOfRepository() {
    const { loading, error, data } = useQuery(PROFILE_INFORMATION);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        data.viewer.repositories.totalCount
    );
}
function TotalOfCommit() {
    const { loading, error, data } = useQuery(PROFILE_INFORMATION);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        data.viewer.commitComments.totalCount
    );
}
function Followers() {
    const { loading, error, data } = useQuery(PROFILE_INFORMATION);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        data.viewer.followers.totalCount
    );
}
function Following() {
    const { loading, error, data } = useQuery(PROFILE_INFORMATION);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        data.viewer.following.totalCount
    );
}


const GeneraleInformation = {

    GetFollowing:
        function getFollowing() {
            return (
                <ApolloProvider client={client}>
                    <Following />
                </ApolloProvider>
            );
        },

    GetFollowers:
        function getFollowers() {
            return (
                <ApolloProvider client={client}>
                    <Followers />
                </ApolloProvider>
            );
        },

    GetTotalOfCommit:
        function getTotalOfCommit() {
            return (
                <ApolloProvider client={client}>
                    <TotalOfCommit />
                </ApolloProvider>
            );
        },
    GetTotalOfRepository:
        function getTotalOfRepository() {
            return (
                <ApolloProvider client={client}>
                    <TotalOfRepository />
                </ApolloProvider>
            );
        },
    GetLogin:
        function getLogin() {
            return (
                <ApolloProvider client={client}>
                    <Login />
                </ApolloProvider>
            );
        },
    GetName:
        function getName() {
            return (
                <ApolloProvider client={client}>
                    <Name />
                </ApolloProvider>
            )
        },
    GetBio:
        function getBio() {
            return (
                <ApolloProvider client={client}>
                    <Bio />
                </ApolloProvider>
            )
        },
    GetAvatar:
        function getAvatar() {
            return (
                <ApolloProvider client={client}>
                    <Avatar />
                </ApolloProvider>
            )
        },
}

export default GeneraleInformation