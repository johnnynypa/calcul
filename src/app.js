import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Container from './containers';
import rootReducer from './redux/reducers/rootReducers';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);


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
