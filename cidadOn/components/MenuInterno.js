import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { limpaDadosUsuario, desconectUsuario } from '../actions/UsuarioActions'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles, colors } from '../layout';
import { Actions } from 'react-native-router-flux'


class MenuInterno extends React.Component {
	_logout() {
		Actions.TelaCarregamento();
		this.props.desconectUsuario()
	}
	render() {
		return (
			<ScrollView style={{ backgroundColor: colors.verde }} >
				<View style={{ paddingTop: 20, paddingBottom: 10, alignItems: 'center' }}>
					<Text style={{ fontSize: 40, color: colors.branco }}>CidadOn</Text>
				</View >
				<View style={{ padding: 30, paddingBottom: 10 }}>
					<TouchableOpacity onPress={() => { /*Actions.TelaPerfilUsuario()*/ }}>
						<Text style={{ fontSize: 20, marginTop: 5, color: colors.cinzaFraco }}>{this.props.nomeUsuario}</Text>
					</TouchableOpacity>
					<Text style={{ fontSize: 20, marginTop: 5, color: colors.branco }}>{this.props.nome + ' ' + this.props.sobrenome}</Text>
				</View >


				<View style={styles.conteinerMenu}>
					{/* <TouchableOpacity style={styles.componenteMenu} onPress={()=>{Actions.TelaPerfilUsuario()}}>
						<Text style={{ fontSize: 20, color: colors.branco, }}><AntDesign name="user" size={20} color={colors.branco} /> Perfil</Text>
					</TouchableOpacity> */}
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { Actions.TelaConfiguracoesConta() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}><AntDesign name="setting" size={20} color={colors.branco} /> Conta</Text>
					</TouchableOpacity>
				</View>


				<View style={styles.conteinerMenu}>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}>
							<Ionicons name="ios-information-circle-outline" size={20} color={colors.branco} /> Sobre</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { }}>
						<Text style={{ fontSize: 20, color: colors.branco, textDecorationLine: 'underline' }}>feedback</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.componenteMenu} onPress={() => { this._logout() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}><Ionicons name="ios-log-out" size={20} color={colors.branco} /> sair</Text>
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