import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {AmplifyProvider} from "@aws-amplify/ui-react";

import App from "./App";
import client from "./graphQL/ApolloClient";

import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <AmplifyProvider>
                <App/>
            </AmplifyProvider>
        </ApolloProvider>
    </BrowserRouter>
);
