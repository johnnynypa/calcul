import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as counterActions from '../redux/actions/operacion';
import { connect } from 'react-redux';

import Style from '../styles';

class Operacion extends Component{
    render(){
        const { state, actions } = this.props;
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
        state: state.operacion
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(Operacion);