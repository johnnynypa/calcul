import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import Style from '../styles';

export default class Boton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <TouchableOpacity style={
                    [
                        Style.cuadro,
                        (this.props.type == 'num') ? Style.num: Style.op
                    ]
                }>
                <View>
                    <Text 
                        style={
                            [
                                Style.textButton,
                                (this.props.type == 'num') ? Style.numText: Style.opText
                            ]
                        } 
                        > 
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}