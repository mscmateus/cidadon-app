import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';

export default class TelaLogin extends React.Component {
	render() {
		return (
			<View>
				<View>
					<BarraNavegacao estado="voltar/sair" voltarKey="telaexposicaointerna" />
				</View>
				<View>
					<View style={styles.formularioLogin}>
						<Text style={{ fontSize: 20, marginTop: 20 }}>Mateus da Silva Costa</Text>
						<Text style={{ fontSize: 20, marginTop: 10}}>mscmateus</Text>
					</View>
					<TouchableOpacity style={styles.btn} onPress={() => {}} onPress={() => {  }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Meus Problemas</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={() => {}} onPress={() => { Actions.alteracaoCadastro() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Editar Conta</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={() => {}} onPress={() => { Actions.confirmaexclusao() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Excluir Conta</Text>
					</TouchableOpacity>
				</View>
			</View>

					
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
		marginTop: 20,
		height: 70,
		width: '100%',
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
