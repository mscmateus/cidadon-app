import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
const mapOn = require('../imagens/pngs/mapOn.png');

export default class TelaLogin extends React.Component {
	render() {
		return (
			<ScrollView>
				<View>
					<BarraNavegacao estado={2} voltarKey="TelaGerenciaDeAcoes" />
				</View>
				<View style={{ padding: 20 }}>
					<View style={styles.formularioLogin}>
						<Text style={{ fontSize: 30 }}>Alteração realizada</Text>
						<Text style={{ fontSize: 20 }}>Seu cadastro foi atualizado!</Text>
						<Image source={mapOn} style={{marginTop: 50}}/>
					</View>
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
		height: 60,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1d9a78',
	}
});
