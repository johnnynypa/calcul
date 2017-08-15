import React, { Component } from 'react';
import {View} from 'react-native';

import { connect } from 'react-redux';

import Style from '../styles';
import Operacion from '../components/operacion';
import Resultado from '../components/resultado';
import Dashboard from '../components/dashboard';

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={Style.container} >
                <Operacion />
                <Resultado />
                <Dashboard />
            </View>
        );
    }
}

export default connect()(App);