import React, { Component } from 'react';
import {Text, View, TextInput} from 'react-native';
import Style from '../styles';
import Boton from '../components/boton';

import { connect } from 'react-redux'


class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={Style.table} >
                <View style={Style.rowButtons}>
                    <Boton onPress="CLEAR" type='op' text="AC" />
                    <Boton onPress="WRITE" type='op' text="√" />
                    <Boton onPress="WRITE" type='op' text="%" />
                    <Boton onPress="WRITE" type='op' text="/" />
                </View>
                <View style={Style.rowButtons}>
                    <Boton onPress="WRITE" type='num' text="7" />
                    <Boton onPress="WRITE" type='num' text="8" />
                    <Boton onPress="WRITE" type='num' text="9" />
                    <Boton onPress="WRITE" type='op' text="*" />
                </View>
                <View style={Style.rowButtons}>
                    <Boton onPress="WRITE" type='num' text="4" />
                    <Boton onPress="WRITE" type='num' text="5" />
                    <Boton onPress="WRITE" type='num' text="6" />
                    <Boton onPress="WRITE" type='op' text="-" />
                </View>
                <View style={Style.rowButtons}>
                    <Boton onPress="WRITE" type='num' text="1" />
                    <Boton onPress="WRITE" type='num' text="2" />
                    <Boton onPress="WRITE" type='num' text="3" />
                    <Boton onPress="WRITE" type='op' text="+" />
                </View>
                <View style={Style.rowButtons}>
                    <Boton onPress="WRITE" type='num' text="0" />
                    <Boton onPress="WRITE" type='num' text="00" />
                    <Boton onPress="WRITE" type='num' text="." />
                    <Boton onPress="RESULT" type='op' text="=" />
                </View>
            </View>
        );
    }
}


export default connect()(Dashboard);