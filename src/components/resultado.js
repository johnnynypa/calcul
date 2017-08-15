import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Alert
} from 'react-native';
import { connect } from 'react-redux';

import Style from '../styles';

class Resultado extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        Alert.alert('prueba', JSON.stringify(this.props))
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
        state: state.data
    }
}

export default connect(mapStateToProps)(Resultado);