import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';

import Style from '../styles';

class Operacion extends Component{
    render(){
        return(
            <View style={Style.resultado} >
                <Text style={Style.resultadoText} >
                    4524
                </Text>
            </View>
        )
    }
}