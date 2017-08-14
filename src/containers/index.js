import React, { Component } from 'react';
import {View} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterActions from '../redux/actions/operacion';

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

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  });

export default connect(null, mapDispatchToProps)(App);