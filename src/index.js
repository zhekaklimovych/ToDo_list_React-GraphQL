import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { AmplifyProvider } from "@aws-amplify/ui-react";

import client from "./api/ApolloClient";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <AmplifyProvider>
                <App />
            </AmplifyProvider>
        </ApolloProvider>
    </BrowserRouter>
);
