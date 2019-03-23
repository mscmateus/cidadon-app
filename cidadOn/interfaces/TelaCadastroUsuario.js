import React from 'react';
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {
	modificaNome,
	modificaSobrenome,
	modificaCpf,
	modificaEmail,
	modificaNomeUsuario,
	modificaSenha,
	verificaCadastro,
	modificaSenha2,
	limpaDadosUsuario
} from '../actions/UsuarioActions'
import { connect } from 'react-redux';
import TextInputMask from 'react-native-text-input-mask'
import { styles, colors } from '../layout';
import Botao from '../components/Botao'

class TelaCadastroUsuario extends React.Component {
	_verificaCadastro() {
		const { nome, sobrenome, cpf, email, nomeUsuario, senha, senha2 } = this.props;
		this.props.verificaCadastro({ nome, sobrenome, cpf, email, nomeUsuario, senha, senha2 });
	}
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ fontSize: 20, textAlign: 'center', color: colors.preto }}>Muito bem, você já é quase um CidadOn{'\n'}complete o cadastro!</Text>
						<TextInput value={this.props.nome} style={styles.textInput} placeholder="Nome" onChangeText={texto => this.props.modificaNome(texto)} />
						<TextInput value={this.props.sobrenome} style={styles.textInput} placeholder="Sobrenome" onChangeText={texto => this.props.modificaSobrenome(texto)} />
						<TextInputMask
							value={this.props.cpf} style={styles.textInput} placeholder="CPF"
							refInput={ref => { this.input = ref }}
							onChangeText={(formatted, extracted) => {
								this.props.modificaCpf(extracted)
							}}
							mask={"[000].[000].[000]-[00]"}
						/>
						<TextInput value={this.props.email} style={styles.textInput} placeholder="E-mail" onChangeText={texto => this.props.modificaEmail(texto)} />
						<TextInput value={this.props.nomeUsuario} style={styles.textInput} placeholder="Nome de usuário" onChangeText={texto => this.props.modificaNomeUsuario(texto)} />
						<TextInput value={this.props.senha} secureTextEntry={true} style={styles.textInput} placeholder="Senha" onChangeText={texto => this.props.modificaSenha(texto)} />
						<TextInput value={this.props.senha2} secureTextEntry={true} style={styles.textInput} placeholder="Confirme a senha" onChangeText={texto => this.props.modificaSenha2(texto)} />
						<Botao texto='Continuar' onPress={() => { this._verificaCadastro() }} />
					</View>
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => (
	{
		nome: state.UsuarioReducer.nome,
		sobrenome: state.UsuarioReducer.sobrenome,
		cpf: state.UsuarioReducer.cpf,
		email: state.UsuarioReducer.email,
		nomeUsuario: state.UsuarioReducer.nomeUsuario,
		senha: state.UsuarioReducer.senha,
		senha2: state.UsuarioReducer.senha2
	}
)
export default connect(mapStateToProps, {
	modificaNome,
	modificaSobrenome,
	modificaCpf,
	modificaEmail,
	modificaNomeUsuario,
	modificaSenha,
	verificaCadastro,
	modificaSenha2,
	limpaDadosUsuario
})(TelaCadastroUsuario);