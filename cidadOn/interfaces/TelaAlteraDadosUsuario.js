import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import {modificaEdiNome,
	modificaEdiSobrenome,
	modificaEdiCpf, 
	modificaEdiEmail,
	modificaEdiNomeUsuario, 
	modificaEdiSenha,
	modificaEdiSenha2,
	limpaDadosUsuario,
	igualaDadosEdicao,
	verificaEdicaoCadastro
} from '../actions/UsuarioActions'
import { connect } from 'react-redux';
import { styles, colors } from '../layout';
import Botao from '../components/Botao'
import TextInputMask from 'react-native-text-input-mask'

class TelaAlteraDadosUsuario extends React.Component {
	constructor(props){
		super(props)
		this.props.igualaDadosEdicao()
	}
	_verificaCadastro(){
		const {email, senha, ediNome, rdiSobrenome,ediCpf,ediEmail,ediNomeUsuario, ediSenha, ediSenha2} = this.props;
		this.props.verificaEdicaoCadastro({email, senha, ediNome, rdiSobrenome,ediCpf,ediEmail,ediNomeUsuario,ediSenha, ediSenha2});
	}
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={styles.textoPadrao}>Ok, errou alguma coisa?</Text>
						<TextInput value={this.props.ediNome} style={styles.textInput} placeholder="Nome" onChangeText={texto => this.props.modificaEdiNome(texto)}/>
						<TextInput value={this.props.ediSobrenome} style={styles.textInput} placeholder="Sobrenome" onChangeText={texto => this.props.modificaEdiCpf(texto)}/>
						<TextInputMask
							value={this.props.ediCpf} style={styles.textInput} placeholder="CPF"
							refInput={ref => { this.input = ref }}
							onChangeText={(formatted, extracted) => {
								this.props.modificaEdiCpf(extracted)
							}}
							mask={"[000].[000].[000]-[00]"}
						/>
						<TextInput value={this.props.ediEmail} style={styles.textInput} placeholder="E-mail" onChangeText={texto => this.props.modificaEdiEmail(texto)}/>
						<TextInput value={this.props.ediNomeUsuario} style={styles.textInput} placeholder="Nome de usuário" onChangeText={texto => this.props.modificaEdiNomeUsuario(texto)}/>
						<Botao texto='Confirmar' onPress={() => { this._verificaCadastro() }} />
					</View>
				</View>
			</ScrollView>
		);
	}
}
const mapStateToProps = state => (
	{
		email: state.UsuarioReducer.email,
		senha: state.UsuarioReducer.senha,
		//edicao
		ediNome: state.UsuarioReducer.ediNome,
		ediSobrenome: state.UsuarioReducer.ediSobrenome,
		ediCpf: state.UsuarioReducer.ediCpf,
		ediEmail: state.UsuarioReducer.ediEmail,
		ediNomeUsuario: state.UsuarioReducer.ediNomeUsuario,
		ediSenha: state.UsuarioReducer.ediSenha,
		ediSenha2: state.UsuarioReducer.ediSenha2
	}
)
export default connect(mapStateToProps, {modificaEdiNome,
	modificaEdiSobrenome,
	modificaEdiCpf, 
	modificaEdiEmail,
	modificaEdiNomeUsuario, 
	modificaEdiSenha,
	modificaEdiSenha2,
	limpaDadosUsuario,
	igualaDadosEdicao,
	verificaEdicaoCadastro
})(TelaAlteraDadosUsuario);