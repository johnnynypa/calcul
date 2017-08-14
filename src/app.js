import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Container from './containers';
import * as reducers from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}
