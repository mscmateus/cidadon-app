import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { limpaDadosUsuario, desconectUsuario } from '../actions/UsuarioActions'
import Icon from 'react-native-vector-icons/Ionicons';

class TelaGerenciaDeAcoes extends React.Component {
	_logout() {
		this.props.desconectUsuario()
	}
	render() {
		return (
			<ScrollView style={{ backgroundColor: '#1d9a78' }} >
				<View style={styles.formularioLogin}>
					<Icon style={{alignItem: 'center'}} name="ios-person" size={50} color="#FFFFFF" />
					<Text style={{ fontSize: 20, marginTop: 20, color: '#FFFFFF' }}>{this.props.nome + ' ' + this.props.sobrenome} ({this.props.nomeUsuario})</Text>
					<Text style={{ fontSize: 20, marginTop: 10, color: '#FFFFFF' }}>{this.props.email}</Text>
					<TouchableOpacity style={{marginTop: 20}} onPress={() => { Actions.TelaEdicaoCadastro() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}><Icon name="ios-settings" size={20} color="#FFFFFF" /> Editar Conta</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{marginTop: 10}} onPress={() => {Actions.TelaConfirmacaoExclusao() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}><Icon name="ios-exit" size={20} color="#FFFFFF" /> Excluir Conta</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{marginTop: 10}} onPress={() => {this._logout() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}><Icon name="ios-log-out" size={20} color="#FFFFFF" /> sair</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	formularioLogin: {
		marginTop: 30,
		marginLeft: 20,
		marginBottom: 20,
		justifyContent: 'center',

	}
});
const mapStateToProps = state => (
	{
		nome: state.UsuarioReducer.nome,
		sobrenome: state.UsuarioReducer.sobrenome,
		email: state.UsuarioReducer.email,
		nomeUsuario: state.UsuarioReducer.nomeUsuario,
	}
)
export default connect(mapStateToProps, { limpaDadosUsuario, desconectUsuario })(TelaGerenciaDeAcoes);