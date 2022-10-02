import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink} from '@apollo/client';
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import {createAuthLink} from "aws-appsync-auth-link";
import {Amplify, Auth} from "aws-amplify";
import {AmplifyProvider} from "@aws-amplify/ui-react";

import appSyncConfig from './aws-exports';
import authSyncConfig from "./auth";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
    type: appSyncConfig.aws_appsync_authenticationType,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),

};
const httpLink = new HttpLink({ uri: url });
const link = ApolloLink.from([
    createAuthLink({ url, region, auth }),
    createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

Amplify.configure(appSyncConfig)
Amplify.configure(Auth.configure(authSyncConfig))

root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <AmplifyProvider>
                <App/>
            </AmplifyProvider>
        </ApolloProvider>
    </BrowserRouter>
);
