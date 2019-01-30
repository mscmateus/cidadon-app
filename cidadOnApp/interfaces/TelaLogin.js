import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';
import {modificaEmail, modificaSenha, autenticaUsuario,
	limpaDadosUsuario, 
	modificaSobrenome,
	modificaCpf,
	modificaNomeUsuario,
	modificaNome,
	modificaResidencia
} from '../actions/AutenticacaoActions'
import { connect } from 'react-redux';


class TelaLogin extends React.Component {
	_autenticaUsuario(){
		const {email,senha} = this.props
		this.props.autenticaUsuario({email, senha})
	}
	render(){
		return (
			<ScrollView>
				<View>
					<BarraNavegacao estado={2} voltarKey="TelaMapaExterna" voltarOnPress={this.props.limpaDadosUsuario} />
				</View>
				<View style={{ padding: 20 }}>
					<View style={styles.formularioLogin}>
						<Text style={{ fontSize: 20 }}>Bem vindo ao CidadOn!</Text>
						<Text style={{ fontSize: 20, textAlign: 'center', }}>Já possui uma conta? Faça seu login e continue colaborando com sua cidade!</Text>
						<TextInput value={this.props.email} style={styles.entrada} placeholder="E-mail" onChangeText={texto => this.props.modificaEmail(texto)}/>
						<TextInput value={this.props.senha} secureTextEntry={true} style={styles.entrada} placeholder="Senha"  onChangeText={texto => this.props.modificaSenha(texto)}/>
						<TouchableOpacity style={styles.btn} onPress={() => {  this._autenticaUsuario()  }}>
							<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Entrar</Text>
						</TouchableOpacity>
						<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
							<Text style={{ fontSize: 20, marginTop: 30 }}>Ainda não é um CidadOn?</Text><Text style={{ fontSize: 20, marginTop: 30 }}>cadastre-se já!</Text>
							<TouchableOpacity style={styles.btn} onPress={() => { Actions.TelaCadastroUsuario() }}>
								<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Cadastrar</Text>
							</TouchableOpacity>
						</View>
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

const mapStateToProps = state => (
	{
		email: state.AutenticacaoReducer.email,
		senha: state.AutenticacaoReducer.senha
	}
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticaUsuario,
	limpaDadosUsuario,
	modificaSobrenome,
	modificaCpf, 
	modificaNomeUsuario, 
	modificaNome,
	modificaResidencia})(TelaLogin);
