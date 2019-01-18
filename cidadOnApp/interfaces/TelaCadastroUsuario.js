import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';


export default class TelaLogin extends React.Component {
	render() {
		return (
			<ScrollView>
				<View>
					<BarraNavegacao estado="voltar" voltarKey="telalogin" />
				</View>
				<View style={{ padding: 20 }}>
					<View style={styles.formularioLogin}>
						<Text style={{ fontSize: 20, textAlign: 'center' }}>Muito bem, você já é quase um CidadOn{'\n'}complete o cadastro!</Text>
						<TextInput style={styles.entrada} placeholder="Nome" />
						<TextInput style={styles.entrada} placeholder="Sobrenome" />
						<TextInput style={styles.entrada} placeholder="CPF" />
						<TextInput style={styles.entrada} placeholder="E-mail" />
						<TextInput secureTextEntry={true} style={styles.entrada} placeholder="Senha" />
						<TextInput secureTextEntry={true} style={styles.entrada} placeholder="Confirme a senha" />
						<TouchableOpacity style={styles.btn} onPress={() => { Actions.telacadastroresidencia() }}>
							<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Continuar</Text>
						</TouchableOpacity>
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
