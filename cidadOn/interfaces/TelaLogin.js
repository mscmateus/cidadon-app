import React from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
//meus imports
import { styles, colors } from '../layout';
import { modificaEmail, modificaSenha, autenticaUsuario, limpaDadosUsuario, modificaSobrenome, modificaCpf, modificaNomeUsuario, modificaNome, modificaResidencia } from '../actions/UsuarioActions'
import Botao from '../components/Botao'

class TelaLogin extends React.Component {
	_autenticaUsuario() {
		const { email, senha } = this.props
		this.props.autenticaUsuario({ email, senha })
	}
	render() {
		return (
			<ScrollView>
				<View style={{ paddingTop: 30, padding: 20, justifyContent: 'center', alignItems: 'center' }} >
					<Text style={{ fontSize: 20, color: colors.preto }}>Bem vindo ao CidadOn!</Text>
					<Text style={{ fontSize: 20, textAlign: 'center', color: colors.preto }}>Já possui uma conta? Faça seu login e continue colaborando com sua cidade!</Text>
					<TextInput value={this.props.email} style={styles.textInput} placeholder="E-mail" onChangeText={texto => this.props.modificaEmail(texto)} />
					<TextInput value={this.props.senha} secureTextEntry={true} style={styles.textInput} placeholder="Senha" onChangeText={texto => this.props.modificaSenha(texto)} />
					<Botao texto='Entrar' onPress={() => { this._autenticaUsuario() }} />
					<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
						<Text style={{ fontSize: 20, marginTop: 30, color: colors.preto }}>Ainda não é um CidadOn?</Text>
						<TouchableOpacity onPress={() => {Actions.TelaCadastroUsuario() }}>
							<Text style={{fontSize: 20, color: colors.preto, textDecorationLine: 'underline' }}>Cadastrar-se</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView >
		);
	}
}
const mapStateToProps = state => (
	{
		email: state.UsuarioReducer.email,
		senha: state.UsuarioReducer.senha
	}
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticaUsuario, limpaDadosUsuario, modificaSobrenome, modificaCpf, modificaNomeUsuario, modificaNome, modificaResidencia })(TelaLogin);
