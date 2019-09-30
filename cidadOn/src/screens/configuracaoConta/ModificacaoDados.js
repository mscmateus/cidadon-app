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
	verificaEdicaoCadastro,
	editaUsuario
} from '../actions/UsuarioActions'
import { connect } from 'react-redux';
import { styles, colors } from '../layout';
import Botao from '../../componentes/Botao'
import TextInputMask from 'react-native-text-input-mask'
import { Actions } from 'react-native-router-flux';

class TelaAlteraDadosUsuario extends React.Component {
	constructor(props){
		super(props)
		this.props.igualaDadosEdicao()
		this.state={
			msgNome: '',
			msgSobrenome: '',
			msgCpf: '',
			msgEmail: '',
			msgUsuario: '',
		}
	}
	validaNome(){
		if(this.props.ediNome==''){
			this.setState({msgNome: 'O campo nome está vazio'})
			return false;
		}else{
			this.setState({msgNome: ''})
			return true
		}
	}
	validaSobrenome(){
		if(this.props.ediSobrenome==''){
			this.setState({msgSobrenome: 'O campo sobrenome está vazio'})
			return false;
		}else{
			this.setState({msgSobrenome: ''})
			return true
		}
	}
	validaCpf(){
		if(this.props.ediCpf==''){
			this.setState({msgCpf: 'O campo cpf está vazio'})
			return false;
		}else if(this.props.ediCpf.length < 11 ){
			this.setState({msgCpf: 'Formato incorreto de cpf'})
			return false;
		}else{
			this.setState({msgCpf: ''})
			return true
		}
	}
	validaEmail(){
		if(this.props.ediEmail==''){
			this.setState({msgEmail: 'O campo e-mail está vazio'})
			return false;
		}else if(this.props.ediEmail.indexOf("@")==-1 || this.props.ediEmail.indexOf(".com") == -1 || this.props.ediEmail.indexOf("@") == this.props.ediEmail.indexOf(".com")-1 || this.props.ediEmail.indexOf("@") > this.props.ediEmail.indexOf(".com")){
			this.setState({msgEmail: 'Digite um e-mail válido'})
			return false;
		}else{
			this.setState({msgEmail: ''})
			return true
		}
	}
	validaNomeUsuario(){
		if(this.props.ediNomeUsuario==''){
			this.setState({msgUsuario: 'O campo nome de usuário está vazio'})
			return false;
		}else if(this.props.ediNomeUsuario.length < 6 ){
			this.setState({msgUsuario: 'O nome de usuário deve ter mais de 6 digitos'})
			return false;
		}else{
			this.setState({msgUsuario: ''})
			return true
		}
	}
	_editaUsuario() {
		var v1 = this.validaNome(), v2= this.validaSobrenome(), v3= this.validaCpf(),v4= this.validaEmail(), v5= this.validaNomeUsuario();
		if(v1 && v2  && v3  &&  v4  &&  v5){
			Actions.TelaCarregamento()
			const { ediNome, ediSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediResidencia } = this.props
			this.props.editaUsuario({ ediNome, ediSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediResidencia })
		}
	}
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={styles.textoPadrao}>Ok, errou alguma coisa?</Text>
						<TextInput value={this.props.ediNome} style={styles.textInput} placeholder="Nome" onChangeText={texto => this.props.modificaEdiNome(texto)}/>
						<Text style={styles.textoAviso} >{this.state.msgNome}</Text>
						<TextInput value={this.props.ediSobrenome} style={styles.textInput} placeholder="Sobrenome" onChangeText={texto => this.props.modificaEdiSobrenome(texto)}/>
						<Text style={styles.textoAviso} >{this.state.msgSobrenome}</Text>
						<TextInputMask
							value={this.props.ediCpf} style={styles.textInput} placeholder="CPF"
							refInput={ref => { this.input = ref }}
							onChangeText={(formatted, extracted) => {
								this.props.modificaEdiCpf(extracted)
							}}
							mask={"[000].[000].[000]-[00]"}
						/>
						<Text style={styles.textoAviso} >{this.state.msgCpf}</Text>
						<TextInput value={this.props.ediEmail} style={styles.textInput} placeholder="E-mail" onChangeText={texto => this.props.modificaEdiEmail(texto)}/>
						<Text style={styles.textoAviso} >{this.state.msgEmail}</Text>
						<TextInput value={this.props.ediNomeUsuario} style={styles.textInput} maxLength={10} placeholder="Nome de usuário" onChangeText={texto => this.props.modificaEdiNomeUsuario(texto)}/>
						<Text style={styles.textoInformacaosValidacao} >O nome de usuário deve ter entre 6 e 10 caracteres</Text>
						<Text style={styles.textoAviso} >{this.state.msgUsuario}</Text>
						<Botao texto='Confirmar' onPress={() => { this._editaUsuario() }} />
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
		ediResidencia: state.UsuarioReducer.ediResidencia
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
	verificaEdicaoCadastro,
	editaUsuario
})(TelaAlteraDadosUsuario);