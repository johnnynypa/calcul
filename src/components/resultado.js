import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterActions from '../redux/actions/operacion';

import Style from '../styles';

class Resultado extends Component{
    render(){
        return(
            <View style={Style.resultado} >
                <Text style={Style.resultadoText} >
                    {/* {this.props.resultado} */}
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

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(Resultado);