import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';

import Style from '../styles';

class Resultado extends Component{
    render(){
        return(
            <View style={Style.resultado} >
                <Text style={Style.resultadoText} >
                     {this.props.state.resultado} 
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        state: state.resultado
    }
}

export default connect(mapStateToProps)(Resultado);