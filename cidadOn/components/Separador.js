import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../layout';
//props: this.props.onPress, this.props.texto
export default class Separador extends React.Component {
	render() {
		return (
			<View style={{backgroundColor: this.props.color ? this.props.color : '#000000' , height: 1}}/>
		);
	}
}