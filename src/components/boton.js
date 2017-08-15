import React, { Component } from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';
import Style from '../styles';

import { connect } from 'react-redux';
import { write, clear, showResult} from '../redux/actions/operacion';
import * as Types from '../redux/actions/actionsTypes';

class Boton extends Component {
	constructor(props) {
		super(props);
		this.onTouch = this.onTouch.bind(this);
	}

	onTouch(){
		
		if(this.props.onPress == Types.CLEAR){
				this.props.clear()
		}else{
			if(this.props.onPress == Types.WRITE){
				this.props.write(this.props.text);
			}else{
				if(this.props.onPress == Types.RESULT){
					this.props.showResult();
				}	
			}
		}
				
	}
	render() {
		return (
			<TouchableOpacity
				style={
					[
						Style.cuadro,
						(this.props.type == 'num') ? Style.num : Style.op
					]

				}

				onPress={this.onTouch}
			>
				<View>
					<Text
						style={
							[
								Style.textButton,
								(this.props.type == 'num') ? Style.numText : Style.opText
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


export default connect(null, {clear, write, showResult})(Boton);