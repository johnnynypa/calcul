import React, { Component } from 'react';
import {Text, View, TextInput} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import Style from './styles';
import Boton from './components/boton';
import Operacion from './components/operacion';
import Resultado from './components/resultado';
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
            <View style={Style.container} >
                <Operacion />
                <Resultado />
                <View style={Style.table} >
                    <View style={Style.rowButtons}>
                        <Boton type='op' text="AC" />
                        <Boton type='op' text="√" />
                        <Boton type='op' text="%" />
                        <Boton type='op' text="/" />
                    </View>
                    <View style={Style.rowButtons}>
                        <Boton type='num' text="7" />
                        <Boton type='num' text="8" />
                        <Boton type='num' text="9" />
                        <Boton type='op' text="*" />
                    </View>
                    <View style={Style.rowButtons}>
                        <Boton type='num' text="4" />
                        <Boton type='num' text="5" />
                        <Boton type='num' text="6" />
                        <Boton type='op' text="-" />
                    </View>
                    <View style={Style.rowButtons}>
                        <Boton type='num' text="1" />
                        <Boton type='num' text="2" />
                        <Boton type='num' text="3" />
                        <Boton type='op' text="+" />
                    </View>
                    <View style={Style.rowButtons}>
                        <Boton type='num' text="0" />
                        <Boton type='num' text="00" />
                        <Boton type='num' text="." />
                        <Boton type='op' text="=" />
                    </View>
                </View>
            </View>
            </Provider>
        );
    }
}
