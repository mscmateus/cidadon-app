import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import {modificaNome,
	modificaSobrenome,
	modificaCpf, 
	modificaEmail,
	modificaNomeUsuario, 
	modificaSenha, 
	verificaCadastro,
	modificaSenha2 ,
	limpaDadosUsuario
} from '../actions/AutenticacaoActions'
import { connect } from 'react-redux';

class TelaCadastroUsuario extends React.Component {
	_verificaCadastro(){
		const {nome, sobrenome,cpf,email,nomeUsuario, senha, senha2} = this.props;
		this.props.verificaCadastro({nome, sobrenome,cpf,email,nomeUsuario, senha, senha2});
	}
	render() {
		return (
			<ScrollView>
				<View>
					<BarraNavegacao estado={2} voltarKey="TelaLogin" voltarOnPress={this.props.limpaDadosUsuario} />
				</View>
				<View style={{ padding: 20 }}>
					<View style={styles.formularioLogin}>
						<Text style={{ fontSize: 20, textAlign: 'center' }}>Muito bem, você já é quase um CidadOn{'\n'}complete o cadastro!</Text>
						<TextInput value={this.props.nome} style={styles.entrada} placeholder="Nome" onChangeText={texto => this.props.modificaNome(texto)}/>
						<TextInput value={this.props.sobrenome} style={styles.entrada} placeholder="Sobrenome" onChangeText={texto => this.props.modificaSobrenome(texto)}/>
						<TextInput value={this.props.cpf} style={styles.entrada} placeholder="CPF" onChangeText={texto => this.props.modificaCpf(texto)}/>
						<TextInput value={this.props.email} style={styles.entrada} placeholder="E-mail" onChangeText={texto => this.props.modificaEmail(texto)}/>
						<TextInput value={this.props.nomeUsuario} style={styles.entrada} placeholder="Nome de usuário" onChangeText={texto => this.props.modificaNomeUsuario(texto)}/>
						<TextInput value={this.props.senha} secureTextEntry={true} style={styles.entrada} placeholder="Senha" onChangeText={texto => this.props.modificaSenha(texto)}/>
						<TextInput value={this.props.senha2} secureTextEntry={true} style={styles.entrada} placeholder="Confirme a senha" onChangeText={texto => this.props.modificaSenha2(texto)}/>
						<TouchableOpacity style={styles.btn} onPress={() => { this._verificaCadastro()}}>
							<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Continuar</Text>
						</TouchableOpacity>
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
		nome: state.AutenticacaoReducer.nome,
		sobrenome: state.AutenticacaoReducer.sobrenome,
		cpf: state.AutenticacaoReducer.cpf,
		email: state.AutenticacaoReducer.email,
		nomeUsuario: state.AutenticacaoReducer.nomeUsuario,
		senha: state.AutenticacaoReducer.senha,
		senha2: state.AutenticacaoReducer.senha2
	}
)
export default connect(mapStateToProps, {modificaNome,
	modificaSobrenome,
	modificaCpf, 
	modificaEmail,
	modificaNomeUsuario, 
	modificaSenha, 
	verificaCadastro,
	modificaSenha2,
	limpaDadosUsuario
})(TelaCadastroUsuario);