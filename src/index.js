import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.scss';
import App from './App';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);
const container = document.getElementById('root');

if (container) {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        container
    );
}
