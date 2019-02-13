import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, Picker } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { limpaDadosUsuario, desconectUsuario } from '../actions/AutenticacaoActions'

class TelaGerenciaDeAcoes extends React.Component {
	_logout() {
		this.props.desconectUsuario()
	}
	render() {
		return (
			<ScrollView>
				<View>
					<BarraNavegacao estado={3} voltarKey="TelaMapaInterna" sairOnPress={() => { this.props.desconectUsuario() }} />
				</View>
				<View>
					<View style={styles.formularioLogin}>
						<Text style={{ fontSize: 20, marginTop: 20 }}>{this.props.nome + ' ' + this.props.sobrenome}</Text>
						<Text style={{ fontSize: 20, marginTop: 20 }}>{this.props.email}</Text>
						<Text style={{ fontSize: 20, marginTop: 10 }}>{this.props.nomeUsuario}</Text>
					</View>
					<TouchableOpacity style={styles.btn} onPress={() => { }} onPress={() => { Actions.TelaEdicaoCadastro() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Editar Conta</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={() => { }} onPress={() => { Actions.TelaConfirmacaoExclusao() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Excluir Conta</Text>
					</TouchableOpacity>
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
const mapStateToProps = state => (
	{
		nome: state.AutenticacaoReducer.nome,
		sobrenome: state.AutenticacaoReducer.sobrenome,
		email: state.AutenticacaoReducer.email,
		nomeUsuario: state.AutenticacaoReducer.nomeUsuario,
	}
)
export default connect(mapStateToProps, { limpaDadosUsuario, desconectUsuario })(TelaGerenciaDeAcoes);