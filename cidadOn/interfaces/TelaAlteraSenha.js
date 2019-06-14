import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import {
	modificaEdiSenha,
	modificaEdiSenha2,
	editaSenha,
	igualaDadosEdicao
} from '../actions/UsuarioActions'
import { connect } from 'react-redux';
import { styles, colors } from '../layout';
import Botao from '../components/Botao'
import TextInputMask from 'react-native-text-input-mask'
import { Actions } from 'react-native-router-flux';

class TelaAlteraSenha extends React.Component {
	constructor(props){
		super(props)
		this.props.igualaDadosEdicao()
		this.state={
			msgSenha: '',
			msgSenha2: '',
		}
	}
	validaSenha(){
		if(this.props.ediSenha==''){
			this.setState({msgSenha: 'O campo senha está vazio'})
			return false;
		}else if(this.props.ediSenha.length < 6 ){
			this.setState({msgSenha: 'A senha deve ter mais de 6 digitos'})
			return false;
		}else{
			this.setState({msgSenha: ''})
			return true
		}
	}
	validasenha2(){
		if(this.props.ediSenha2==''){
			this.setState({msgSenha2: 'O campo de confirmação de senha está vazio'})
			return false;
		}else if(this.props.ediSenha2 !=this.props.ediSenha){
			this.setState({msgSenha2: 'As senhas não estão iguais'})
			return false;
		}else{
			this.setState({msgSenha2: ''})
			return true
		}
	}
	editaSenha(){
		var v1 = this.validaSenha(), v2=this.validasenha2()
		if(v1 && v2){
			Actions.TelaCarregamento();
			this.props.editaSenha(this.props.ediSenha);
		}
	}
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={styles.textoPadrao}>Digite a sua nova senha:</Text>
						<TextInput value={this.props.ediSenha} secureTextEntry={true} maxLength={10} style={styles.textInput} placeholder="Senha" onChangeText={texto => this.props.modificaEdiSenha(texto)}/>
						<Text style={styles.textoInformacaoValidacao} >A senha deve ter entre 6 e 10 caracteres</Text>
						<Text style={styles.textoAviso} >{this.state.msgSenha}</Text>
						<TextInput value={this.props.ediSenha2} secureTextEntry={true} maxLength={10} style={styles.textInput} placeholder="Confirme a senha" onChangeText={texto => this.props.modificaEdiSenha2(texto)}/>
						<Text style={styles.textoInformacaoValidacao} >Repita a senha anterior</Text>
						<Text style={styles.textoAviso} >{this.state.msgSenha2}</Text>
						<Botao texto='Confirmar' onPress={() => { this.editaSenha() }} />
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
export default connect(mapStateToProps, { 
	modificaEdiSenha,
	modificaEdiSenha2,
	editaSenha,
	igualaDadosEdicao
})(TelaAlteraSenha);