import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';

export default class TelaLogin extends React.Component {
	render() {
		return (
			<ScrollView>
				<View>
					<BarraNavegacao estado="voltar" voltarKey="telaexposicao" />
				</View>
				<View style={{ padding: 20 }}>
					<Text>Qual o tipo do problema?</Text>
				</View>
				<View>
					           
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	formularioLogin: {
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		marginTop: 20,
		height: 60,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1d9a78',
	},
	entrada: {
		textAlign: 'center',
		padding: 5,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomColor: '#000',
		borderTopColor: '#000',
		borderLeftColor: '#000',
		borderRightColor: '#000',
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		marginTop: 10,
		fontSize: 20,
		height: 45,
		width: 250
	}
});
