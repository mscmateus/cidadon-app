import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { limpaDadosUsuario, desconectUsuario } from '../actions/UsuarioActions'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../layout';


class MenuInterno extends React.Component {
	_logout() {
		this.props.desconectUsuario()
	}
	render() {
		return (
			<ScrollView style={{ backgroundColor: colors.verde }} >
				<View style={{ padding: 30, paddingBottom: 10 }}>
					<Icon style={{ alignItem: 'center' }} name="ios-person" size={50} color={colors.branco} />
					<TouchableOpacity>
						<Text style={{ fontSize: 20, marginTop: 5, color: colors.branco }}>{this.props.nomeUsuario}</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={{ fontSize: 20, marginTop: 5, color: colors.branco }}>{this.props.nome + ' ' + this.props.sobrenome}</Text>
					</TouchableOpacity>
				</View >
				<View style={styles.conteinerMenu}>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { Actions.TelaEdicaoCadastro() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}><Icon name="ios-settings" size={20} color={colors.branco} /> Configurações de Conta</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.conteinerMenu}>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}>
							<Icon name="ios-information-circle-outline" size={20} color={colors.branco} /> Sobre</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { }}>
						<Text style={{ fontSize: 20, color: colors.branco, textDecorationLine: 'underline' }}>feedback</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { this._logout() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}><Icon name="ios-log-out" size={20} color={colors.branco} /> sair</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
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
export default connect(mapStateToProps, { limpaDadosUsuario, desconectUsuario })(MenuInterno);