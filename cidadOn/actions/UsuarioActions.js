import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import "@firebase/storage"
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';


//testes de captura de arquivo
import RNFetchBlob from 'react-native-fetch-blob'

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

//alteração dos reducers
export const modificaFoto = (texto) => {

	return {
		type: 'modifica_foto',
		payload: texto
	}
}
export const modificaNome = (texto) => {
	return {
		type: 'modifica_nome',
		payload: texto
	}
}
export const modificaSobrenome = (texto) => {
	return {
		type: 'modifica_sobrenome',
		payload: texto
	}
}
export const modificaCpf = (texto) => {
	return {
		type: 'modifica_cpf',
		payload: texto
	}
}
export const modificaEmail = (texto) => {
	return {
		type: 'modifica_email',
		payload: texto
	}
}
export const modificaNomeUsuario = (texto) => {
	return {
		type: 'modifica_nomeUsuario',
		payload: texto
	}
}
export const modificaSenha = (texto) => {
	return {
		type: 'modifica_senha',
		payload: texto
	}
}
export const modificaSenha2 = (texto) => {
	return {
		type: 'modifica_senha2',
		payload: texto
	}
}
export const modificaResidencia = (residencia) => {
	return {
		type: 'modifica_Residencia',
		payload: { latitude: residencia.latitude, longitude: residencia.longitude }
	}
}
export const limpaDadosUsuario = () => {
	return {
		type: 'limpa'
	}
}
//alteração dos reducers
export const modificaEdiFoto = (texto) => {
	return {
		type: 'modifica_edifoto',
		payload: texto
	}
}
export const modificaEdiNome = (texto) => {
	return {
		type: 'modifica_edinome',
		payload: texto
	}
}
export const modificaEdiSobrenome = (texto) => {
	return {
		type: 'modifica_edisobrenome',
		payload: texto
	}
}
export const modificaEdiCpf = (texto) => {
	return {
		type: 'modifica_edicpf',
		payload: texto
	}
}
export const modificaEdiEmail = (texto) => {
	return {
		type: 'modifica_ediemail',
		payload: texto
	}
}
export const modificaEdiNomeUsuario = (texto) => {
	return {
		type: 'modifica_edinomeUsuario',
		payload: texto
	}
}
export const modificaEdiSenha = (texto) => {
	return {
		type: 'modifica_edisenha',
		payload: texto
	}
}
export const modificaEdiSenha2 = (texto) => {
	return {
		type: 'modifica_edisenha2',
		payload: texto
	}
}
export const modificaEdiResidencia = (residencia) => {
	return {
		type: 'modifica_ediResidencia',
		payload: { latitude: residencia.latitude, longitude: residencia.longitude }
	}
}
export const limpaDadosUsuarioEdi = () => {
	return {
		type: 'limpaedi'
	}
}
//cadastro de usuario
export const verificaCadastro = ({ nome, sobrenome, cpf, email, nomeUsuario, senha, senha2 }) => {
	return dispatch => {
		Actions.TelaCadastroEndereco()
		dispatch({
			type: 'verifica_cadastro'
		})
	}
}
export const cadastraUsuario = (nome, sobrenome, cpf, email, nomeUsuario, senha, residencia) => {
	return dispatch => {
		firebase.auth().createUserWithEmailAndPassword(email, senha)
			.then((user) => { cadastroUsuarioSucesso(dispatch, user, nome, sobrenome, cpf, nomeUsuario, residencia) })
			.catch((erro) => { cadastraUsuarioErro(dispatch, erro) })
	}
}
const cadastroUsuarioSucesso = (dispatch, user, nome, sobrenome, cpf, nomeUsuario, residencia) => {
	user = firebase.auth().currentUser;
	user.updateProfile({
		photoURL: 'https://firebasestorage.googleapis.com/v0/b/spatial-groove-218819.appspot.com/o/usuario.png?alt=media&token=35bd141b-7423-44dd-a59d-719a50ac4b04'
	}).then(function () {
		// Update successful.
	}).catch(function (error) {
		// An error happened.
	});

	firebase.database().ref('users/' + user.uid).set({
		nome: nome,
		sobrenome: sobrenome,
		cpf: cpf,
		nomeUsuario: nomeUsuario,
		residencia: residencia
	})
	Actions.TelaConfirmacaoCadastro()
	dispatch(
		{
			type: 'cadastro_sucesso'
		}
	)
}
const cadastraUsuarioErro = (dispatch, erro) => {
	alert("Erro ao realizar cadastro, " + erro.message)
	Actions.TelaCadastroEndereco()
	dispatch(
		{
			type: 'cadastro_erro'
		}
	)
}
//autenticação de usuario
export const autenticaUsuario = ({ email, senha }) => {
	return dispatch => {
		//percisitir os dados de autenticação
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(function () {
				//executando autenticação no fire
				firebase.auth().signInWithEmailAndPassword(email, senha)
					.then(() => {
						firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value', (snapshort) => {
							const dados = snapshort.val()
							Actions.MenuInterno()
							dispatch({
								type: 'atenticacao_sucesso',
								id: firebase.auth().currentUser.uid,
								payload: dados,
								email: firebase.auth().currentUser.email,
								foto: firebase.auth().currentUser.photoURL
							})
						})
					})
					.catch(erro => { autencacaoErro(dispatch, erro) })
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	}
}
const autencacaoErro = (dispatch, erro) => {
	Actions.TelaLogin();
	alert('Falha ao realizar login, verifique seu e-mail e senha e tente novamente.')
	dispatch({
		type: 'autenticacao_erro'
	})
}
export const desconectUsuario = () => {
	firebase.database().ref('users/' + firebase.auth().currentUser.uid).off()
	firebase.auth().signOut()
	//Actions.TelaLogin();
	return {
		type: 'desconecta_usuario'
	}
}
//edição de cadastro
export const iniciaEdicaoFoto = () => {
	Actions.TelaFotoPerfil()
	return {
		type: 'igualaEdicaoFoto'
	}
}
export const atualizaFotoPerfil = ({uri}) => {
	return dispatch => {
		var uriFotoPerfil;
		console.log('URI: '+uri);
		fs.readFile(uri, 'base64')
			.then(blob => {
				firebase.storage().ref().child('fotoPerfil/teste.png').put(blob)
					.then(function (snapshot) {
						
						alert(snapshot)
						
					})
					.catch(error => {
						alert(error.message)
					})
			})
			.catch(error => {
				reject(error)
			})


		if (uriFotoPerfil != null && uriFotoPerfil != '') {
			alert
			dispatch({
				type: 'atualiza_foto',
				fotoUri: uriFotoPerfil
			})
		} else {
			dispatch({
				type: 'atualiza_foto_falha'
			})
		}
	}
}

export const igualaDadosEdicao = () => {
	return {
		type: 'inicia_edicao'
	}
}
export const verificaEdicaoCadastro = ({ email, senha, ediNome, rdiSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediSenha, ediSenha2 }) => {
	//verifica se o email já esta cadastrado
	return dispatch => {
		Actions.TelaEdicaoEndereco()
		dispatch({
			type: 'verifica_cadastro'
		})
	}
}
//refazer esse método
export const editaSenha = (senha) => {
	return dispatch => {
		firebase.auth().currentUser.updatePassword(senha)
						.then(() => { alert('Senha alterada com sucesso'); Actions.TelaConfiguracoesConta()})
						.catch(erro => { alert(erro.message); Actions.TelaAlteraSenha() })
		dispatch({
			type: 'senhinha'
		})
	}
}
export const editaUsuario = ({ ediNome, ediSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediResidencia }) => {
	const novoNome = ediNome, novoSobrenome = ediSobrenome, novoCPF = ediCpf, novoEmail = ediEmail, novoNomeUsuario = ediNomeUsuario, novaResidencia = ediResidencia
	return dispatch => {
		firebase.auth().currentUser.updateEmail(novoEmail)
			.then(() => {
				firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
					nome: novoNome,
					sobrenome: novoSobrenome,
					cpf: novoCPF,
					nomeUsuario: novoNomeUsuario,
					residencia: novaResidencia
				})
				alert('Edição realizada com sucesso!')
				Actions.TelaConfiguracoesConta()
				dispatch({
					type: ''
				})
				igualaDadosEdicao()
			})
			.catch(erro => { })
	}
}
const edicaoErro = (dispatch, erro) => {
	alert('Erro ao realizar edição, ' + erro.message)
	Actions.TelaConfiguracoesConta()
	dispatch({
		type: 'inicia_edicao'
	})
}
//exclusão de cadastro
export const removeUsuario = () => {
	Actions.TelaLogin()
	const userIdRemove = firebase.auth().currentUser.uid
	removeInformacoes()
	return dispatch => {
		firebase.database().ref('users/' + firebase.auth().currentUser.uid).off()
		firebase.auth().currentUser.delete()
			.then(() => {
				firebase.database().ref('users/' + userIdRemove).remove().then(() => {
					alert('Conta removida com sucesso')
					dispatch({
						type: 'remocao_sucesso'
					})
				})
			})
			.catch((erro) => { remocaoUsuarioErro(dispatch, erro) })
	}
}
const remocaoUsuarioErro = (dispatch, erro) => {
	alert('erro ao remover conta, ' + erro.message)
	Actions.TelaGerenciaDeAcoes()
	dispatch({
		type: 'remocao_erro'
	})
}
const removeInformacoes = () =>{
	//Remove avaliações do usuário
	firebase.database().ref('users/' + firebase.auth().currentUser.uid +'/avaliacoes').once('value', (snapshort) => {
		_.values(snapshort.val()).map(avaliacao =>{
			firebase.database().ref('problemas').child(avaliacao.problemaId).child('avaliacoes').child(avaliacao.id).remove()
		})
	}).then(()=>{
		//Remove problemas do usuario
		firebase.database().ref('users/' + firebase.auth().currentUser.uid +'/problemas').once('value', (snapshort) => {
			_.values(snapshort.val()).map(problema =>{
				//remover avaliações das respectivas contas
				firebase.database().ref('problemas/'+problema.id+'/avaliacoes').once('value', (snapshort) => {
					_.values(snapshort.val()).map(avaliacao =>{
						firebase.database().ref('users').child(avaliacao.autorId).child('avaliacoes').child(avaliacao.id).remove()
					})
				}).then(()=>{
					firebase.database().ref('problemas').child(problema.id).remove()
				})
			})
		})
	})
}
export const autologin = () => {
	return dispatch => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', (snapshort) => {
					const dados = snapshort.val()
					//Actions.TelaPerfilUsuario()
					Actions.MenuInterno()
					dispatch({
						type: 'atenticacao_sucesso',
						id: firebase.auth().currentUser.uid,
						payload: dados,
						email: firebase.auth().currentUser.email,
						foto: firebase.auth().currentUser.photoURL
					})
				})
			} else {
				Actions.MenuExterno()
				dispatch({
					type: 'menuexterno'
				})
			}
		})
	}
}