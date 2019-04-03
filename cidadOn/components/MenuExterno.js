import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { limpaDadosUsuario, desconectUsuario } from '../actions/UsuarioActions'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../layout';

class MenuExterno extends React.Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: colors.verde }} >
				<View style={{ paddingTop: 20, paddingBottom: 10, alignItems: 'center' }}>
					<Text style={{ fontSize: 40, color: colors.branco }}>CidadOn</Text>
				</View >
				<View style={styles.conteinerMenu}>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { Actions.TelaLogin() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}>
							<Icon name="ios-log-in" size={20} color={colors.branco} /> Login</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { Actions.TelaCadastroUsuario() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}>
							<Icon name="ios-person-add" size={20} color={colors.branco} /> Cadastrar</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.conteinerMenu}>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => {Actions.TelaSobre() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}>
							<Icon name="ios-information-circle-outline" size={20} color={colors.branco} /> Sobre</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => {Actions.TelaFeedbackExterno() }}>
						<Text style={{ fontSize: 20, color: colors.branco, textDecorationLine: 'underline' }}>feedback</Text>
					</TouchableOpacity>
					
				</View>
			</ScrollView >
		);
	}
}
const mapStateToProps = state => (
	{
		nome: state.UsuarioReducer.nome,
		sobrenome: state.UsuarioReducer.sobrenome,
		email: state.UsuarioReducer.email,
		nomeUsuario: state.UsuarioReducer.nomeUsuario,
	}
)
export default connect(mapStateToProps, { limpaDadosUsuario, desconectUsuario })(MenuExterno);