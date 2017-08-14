import React, { Component } from 'react';
import {Text, View, TextInput} from 'react-native';
import Style from '../styles';
import Boton from '../components/boton';
import * as reducers from '../redux/reducers';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as resultadoActions from '../redux/actions/resultado';
import * as operacionActions from '../redux/actions/operacion';


class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { write, clear} = this.props.actionsOperacion;
        const { result } = this.props.actionsResult;
        return (
            <View style={Style.table} >
                <View style={Style.rowButtons}>
                    <Boton action={clear} type='op' text="AC" />
                    <Boton action={write} type='op' text="√" />
                    <Boton action={write} type='op' text="%" />
                    <Boton action={write} type='op' text="/" />
                </View>
                <View style={Style.rowButtons}>
                    <Boton action={write} type='num' text="7" />
                    <Boton action={write} type='num' text="8" />
                    <Boton action={write} type='num' text="9" />
                    <Boton action={write} type='op' text="*" />
                </View>
                <View style={Style.rowButtons}>
                    <Boton action={write} type='num' text="4" />
                    <Boton action={write} type='num' text="5" />
                    <Boton action={write} type='num' text="6" />
                    <Boton action={write} type='op' text="-" />
                </View>
                <View style={Style.rowButtons}>
                    <Boton action={write} type='num' text="1" />
                    <Boton action={write} type='num' text="2" />
                    <Boton action={write} type='num' text="3" />
                    <Boton action={write} type='op' text="+" />
                </View>
                <View style={Style.rowButtons}>
                    <Boton action={write} type='num' text="0" />
                    <Boton action={write} type='num' text="00" />
                    <Boton action={write} type='num' text="." />
                    <Boton action={result} type='op' text="=" />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actionsResult: bindActionCreators(resultadoActions, dispatch),
    actionsOperacion: bindActionCreators(operacionActions, dispatch)
  });

export default connect(null, mapDispatchToProps)(Dashboard);