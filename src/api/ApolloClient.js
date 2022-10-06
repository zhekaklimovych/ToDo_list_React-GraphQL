import { Amplify, Auth } from "aws-amplify";
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import appSyncConfig from "../config/aws-exports";
import authSyncConfig from "../config/auth";

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;

const auth = {
    type: appSyncConfig.aws_appsync_authenticationType,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
};

const httpLink = new HttpLink({ uri: url });
const link = ApolloLink.from([
    createAuthLink({ url, region, auth }),
    createSubscriptionHandshakeLink({ url, region, auth }, httpLink)
]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

Amplify.configure(appSyncConfig);
Amplify.configure(Auth.configure(authSyncConfig));

export default client;
