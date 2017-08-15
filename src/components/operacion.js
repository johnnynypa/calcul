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
        const { state} = this.props;
        return(
            <View style={Style.operacion} >
                <Text style={Style.operacionText} >
                     {state.operacion}
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

export default connect(mapStateToProps)(Operacion);