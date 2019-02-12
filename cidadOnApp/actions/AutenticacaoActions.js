import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';

//alteração dos reducers
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
export const cadastraUsuario = ( nome, sobrenome, cpf, email, nomeUsuario, senha, residencia ) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((user) => { cadastroUsuarioSucesso(dispatch, user, nome, sobrenome, cpf, nomeUsuario, residencia) })
            .catch((erro) => { cadastraUsuarioErro(dispatch, erro) })
    }
}
const cadastroUsuarioSucesso = (dispatch, user, nome, sobrenome, cpf, nomeUsuario, residencia) => {
    user = firebase.auth().currentUser;
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
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => {
                firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', (snapshort) => {
                    const dados = snapshort.val()
                    Actions.TelaMapaInterna()
                    dispatch({
                        type: 'atenticacao_sucesso',
                        payload: dados,
                        email: firebase.auth().currentUser.email
                    })
                })
            })
            .catch(erro => { autencacaoErro(dispatch, erro) })
    }
}
const autencacaoErro = (dispatch, erro) => {
    alert("erro ao realizar login, " + erro.message)
    dispatch({
        type: 'autenticacao_erro'
    })
}
export const desconectUsuario =()=>{
        firebase.database().ref('users/' + firebase.auth().currentUser.uid).off()
        //Actions.TelaLogin()
        return {
            type: 'desconecta_usuario'
        }
}
//edição de cadastro
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
export const editaUsuario = ({ ediNome, ediSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediSenha, ediResidencia }) => {
    const novoNome = ediNome, novoSobrenome = ediSobrenome, novoCPF = ediCpf, novoEmail = ediEmail, novoNomeUsuario = ediNomeUsuario, novoSenha = ediSenha, novaResidencia = ediResidencia
    return dispatch => {
        firebase.auth().currentUser.updateEmail(novoEmail)
            .then(() => {
                firebase.auth().currentUser.updatePassword(novoSenha)
                    .then(() => {
                        firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
                            nome: novoNome,
                            sobrenome: novoSobrenome,
                            cpf: novoCPF,
                            nomeUsuario: novoNomeUsuario,
                            residencia: novaResidencia
                        })
                        alert('Edição realizada com sucesso!')
                        Actions.TelaGerenciaDeAcoes()
                        dispatch({
                            type: 'limpa_edicao'
                        })
                    })
                    .catch(erro => { alert(erro.message) })
            })
            .catch(erro => { })
    }
}
const edicaoErro = (dispatch, erro) => {
    alert('Erro ao realizar edição, ' + erro.message)
    Actions.TelaEdicaoCadastro()
    dispatch({
        type: 'inicia_edicao'
    })
}
//exclusão de cadastro
export const removeUsuario = () => {
    const userIdRemove = firebase.auth().currentUser.uid
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).off()
    return dispatch => {
        firebase.auth().currentUser.delete()
            .then(() => {
                firebase.database().ref('users/' + userIdRemove).remove().then(() => {
                    alert('Conta removida com sucesso')
                    Actions.TelaLogin()
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