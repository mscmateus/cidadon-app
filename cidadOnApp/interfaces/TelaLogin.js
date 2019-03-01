import React from 'react';
import { ScrollView,Text, TextInput, View, TouchableOpacity } from 'react-native';
import { estilos } from '../layout';
import { Actions } from 'react-native-router-flux';
import { modificaEmail, modificaSenha, autenticaUsuario, limpaDadosUsuario, modificaSobrenome, modificaCpf, modificaNomeUsuario, modificaNome, modificaResidencia } from '../actions/AutenticacaoActions'
import { connect } from 'react-redux';

class TelaLogin extends React.Component {
	_autenticaUsuario() {
		const { email, senha } = this.props
		this.props.autenticaUsuario({ email, senha })
	}
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View
						style={{
							marginTop: 30,
							justifyContent: 'center',
							alignItems: 'center'
						}} >
						<Text style={{ fontSize: 20 }}>Bem vindo ao CidadOn!</Text>
						<Text style={{ fontSize: 20, textAlign: 'center', }}>Já possui uma conta? Faça seu login e continue colaborando com sua cidade!</Text>
						<TextInput value={this.props.email} style={estilos.textInput} placeholder="E-mail" onChangeText={texto => this.props.modificaEmail(texto)} />
						<TextInput value={this.props.senha} secureTextEntry={true} style={estilos.textInput} placeholder="Senha" onChangeText={texto => this.props.modificaSenha(texto)} />
						<TouchableOpacity style={estilos.botao} onPress={() => { this._autenticaUsuario() }}>
							<Text style={{ fontSize: 20, color: '#FFFFFF' }}>Entrar</Text>
						</TouchableOpacity>
						<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
							<Text style={{ fontSize: 20, marginTop: 30 }}>Ainda não é um CidadOn?</Text><Text style={{ fontSize: 20, marginTop: 30 }}>cadastre-se já!</Text>
							<TouchableOpacity style={estilos.botao} onPress={() => { Actions.TelaCadastroUsuario() }}>
								<Text style={{ fontSize: 20, color: '#FFFFFF' }}>Cadastrar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView >
		);
	}
}

const mapStateToProps = state => (
	{
		email: state.AutenticacaoReducer.email,
		senha: state.AutenticacaoReducer.senha
	}
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticaUsuario, limpaDadosUsuario, modificaSobrenome, modificaCpf, modificaNomeUsuario, modificaNome, modificaResidencia })(TelaLogin);
