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

class TelaAlteraSenha extends React.Component {
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
						<Text style={styles.textoPadrao}>Digite a sua nova senha:</Text>
						<TextInput value={this.props.ediSenha} style={styles.textInput} placeholder="Senha" onChangeText={texto => this.props.modificaEdiSenha(texto)}/>
						<TextInput value={this.props.ediSenha2} style={styles.textInput} placeholder="Confirme a senha" onChangeText={texto => this.props.modificaEdiSenha2(texto)}/>
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
})(TelaAlteraSenha);