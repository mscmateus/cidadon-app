import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { styles, colors } from '../layout';
//props: this.props.onPress, this.props.texto
export default class Opcao extends React.Component {
	render() {
		return (
			<View>
				<TouchableHighlight underlayColor={colors.cinzaFraco} style={styles.opcao} onPress={() => { this.props.onPress() }}>
					<Text style={styles.textoOpcao}>{this.props.texto}</Text>
				</TouchableHighlight>
			</View>
		);
	}
}