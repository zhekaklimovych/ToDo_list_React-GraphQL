import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink} from '@apollo/client';
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import appSyncConfig from './aws-exports';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createAuthLink} from "aws-appsync-auth-link";

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey
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

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
);

reportWebVitals();
