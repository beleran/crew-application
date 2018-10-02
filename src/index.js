import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import client from "./resolvers/client.js";
import {ApolloProvider} from "react-apollo";


const container = document.getElementById('root');
if (container) {
    ReactDOM.render(
        <ApolloProvider client={client}>
            <App  />
        </ApolloProvider>,
        container
    );
}
