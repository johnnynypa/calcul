import React, { Component } from 'react';
import {Text, View, TextInput} from 'react-native';
import Style from '../styles';
import Boton from '../components/boton';
import * as reducers from '../redux/reducers';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterActions from '../redux/actions/operacion';


class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
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
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  });

export default connect(null, mapDispatchToProps)(Dashboard);