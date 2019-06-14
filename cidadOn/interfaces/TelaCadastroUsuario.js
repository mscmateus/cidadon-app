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
import { Actions } from 'react-native-router-flux';



class TelaCadastroUsuario extends React.Component {
constructor(props){
	super(props)
	this.state={
		msgNome: '',
		msgSobrenome: '',
		msgCpf: '',
		msgEmail: '',
		msgUsuario: '',
		msgSenha: '',
		msgSenha2: '',
		valida: true,
	}
}

	validaNome(){
		if(this.props.nome==''){
			this.setState({msgNome: 'O campo nome está vazio'})
			return false;
		}else{
			this.setState({msgNome: ''})
			return true
		}
	}
	validaSobrenome(){
		if(this.props.sobrenome==''){
			this.setState({msgSobrenome: 'O campo sobrenome está vazio'})
			return false;
		}else{
			this.setState({msgSobrenome: ''})
			return true
		}
	}
	validaCpf(){
		if(this.props.cpf==''){
			this.setState({msgCpf: 'O campo cpf está vazio'})
			return false;
		}else if(this.props.cpf.length < 11 ){
			this.setState({msgCpf: 'Formato incorreto de cpf'})
			return false;
		}else{
			this.setState({msgCpf: ''})
			return true
		}
	}
	validaEmail(){
		if(this.props.email==''){
			this.setState({msgEmail: 'O campo e-mail está vazio'})
			return false;
		}else if(this.props.email.indexOf("@")==-1 || this.props.email.indexOf(".com") == -1){
			this.setState({msgEmail: 'Digite um e-mail válido'})
			return false;
		}else{
			this.setState({msgEmail: ''})
			return true
		}
	}
	validaNomeUsuario(){
		if(this.props.nomeUsuario==''){
			this.setState({msgUsuario: 'O campo nome de usuário está vazio'})
			return false;
		}else if(this.props.nomeUsuario.length < 6 ){
			this.setState({msgUsuario: 'O nome de usuário deve ter mais de 6 digitos'})
			return false;
		}else{
			this.setState({msgUsuario: ''})
			return true
		}
	}
	validaSenha(){
		if(this.props.senha==''){
			this.setState({msgSenha: 'O campo senha está vazio'})
			return false;
		}else if(this.props.senha.length < 6 ){
			this.setState({msgSenha: 'A senha deve ter mais de 6 digitos'})
			return false;
		}else{
			this.setState({msgSenha: ''})
			return true
		}
	}
	validasenha2(){
		if(this.props.senha2==''){
			this.setState({msgSenha2: 'O campo de confirmação de senha está vazio'})
			return false;
		}else if(this.props.senha2 !=this.props.senha){
			this.setState({msgSenha2: 'As senhas não estão iguais'})
			return false;
		}else{
			this.setState({msgSenha2: ''})
			return true
		}
	}

	_verificaCadastro() {
		var v1 = this.validaNome(), v2= this.validaSobrenome(), v3= this.validaCpf(),v4= this.validaEmail(), v5= this.validaNomeUsuario(), v6= this.validaSenha(), v7= this.validasenha2();
		if(v1 && v2  && v3  &&  v4  &&  v5 && v6 && v7 ){
			const { nome, sobrenome, cpf, email, nomeUsuario, senha, senha2 } = this.props;
			this.props.verificaCadastro({ nome, sobrenome, cpf, email, nomeUsuario, senha, senha2 });
		}
	}
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={styles.textoPadrao}>Muito bem, você já é quase um CidadOn{'\n'}complete o cadastro!</Text>
						<TextInput value={this.props.nome} style={styles.textInput} maxLength={50} placeholder="Nome" onChangeText={texto => this.props.modificaNome(texto)} />
						<Text style={styles.textoAviso} >{this.state.msgNome}</Text>
						<TextInput value={this.props.sobrenome} style={styles.textInput} maxLength={100} placeholder="Sobrenome" onChangeText={texto => this.props.modificaSobrenome(texto)} />
						<Text style={styles.textoAviso} >{this.state.msgSobrenome}</Text>
						<TextInputMask
							value={this.props.cpf} style={styles.textInput} placeholder="CPF"
							refInput={ref => { this.input = ref }}
							onChangeText={(formatted, extracted) => {
								this.props.modificaCpf(extracted)
							}}
							mask={"[000].[000].[000]-[00]"}
						/>
						<Text style={styles.textoAviso} >{this.state.msgCpf}</Text>
						<TextInput value={this.props.email} maxLength={100} style={styles.textInput} placeholder="E-mail" onChangeText={texto => this.props.modificaEmail(texto)} />
						<Text style={styles.textoAviso} >{this.state.msgEmail}</Text>
						<TextInput value={this.props.nomeUsuario} style={styles.textInput} maxLength={10} placeholder="Nome de usuário" onChangeText={texto => this.props.modificaNomeUsuario(texto)} />
						<Text style={styles.textoInformacaosValidacao} >O nome de usuário deve ter entre 6 e 10 caracteres</Text>
						<Text style={styles.textoAviso} >{this.state.msgUsuario}</Text>
						<TextInput value={this.props.senha} secureTextEntry={true} style={styles.textInput} maxLength={10} placeholder="Senha" onChangeText={texto => this.props.modificaSenha(texto)} />
						<Text style={styles.textoInformacaoValidacao} >A senha deve ter entre 6 e 10 caracteres</Text>
						<Text style={styles.textoAviso} >{this.state.msgSenha}</Text>
						<TextInput value={this.props.senha2} secureTextEntry={true} style={styles.textInput} maxLength={10} placeholder="Confirme a senha" onChangeText={texto => this.props.modificaSenha2(texto)} />
						<Text style={styles.textoInformacaoValidacao} >Repita a senha anterior</Text>
						<Text style={styles.textoAviso} >{this.state.msgSenha2}</Text>
						<Botao texto='Continuar' onPress={() => { this._verificaCadastro() }}/>
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