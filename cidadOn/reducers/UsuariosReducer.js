import { Actions, ActionConst } from 'react-native-router-flux'
const INITIAL_STATE = {
    foto: '',
    id: '',
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    nomeUsuario: '',
    senha: '',
    senha2: '',
    residencia: { latitude: null, longitude: null },
    //para edição
    ediFoto: '',
    ediNome: '',
    ediSobrenome: '',
    ediCpf: '',
    ediEmail: '',
    ediNomeUsuario: '',
    ediSenha: '',
    ediSenha2: '',
    ediResidencia: { latitude: null, longitude: null }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_foto':
            return { ...state, foto: action.payload }
        case 'modifica_nome':
            return { ...state, nome: action.payload }
        case 'modifica_sobrenome':
            return { ...state, sobrenome: action.payload }
        case 'modifica_cpf':
            return { ...state, cpf: action.payload }
        case 'modifica_email':
            return { ...state, email: action.payload }
        case 'modifica_nomeUsuario':
            return { ...state, nomeUsuario: action.payload }
        case 'modifica_senha':
            return { ...state, senha: action.payload }
        case 'modifica_senha2':
            return { ...state, senha2: action.payload }
        case 'modifica_residencia':
            return { ...state, residencia: action.payload }
        case 'limpa':
            return {
                ...state, nome: '',
                sobrenome: '',
                cpf: '',
                email: '',
                nomeUsuario: '',
                senha: '',
                senha2: '',
                residencia: { latitude: null, longitude: null }
            }
        //edição
        case 'modifica_edifoto':
            return { ...state, ediFoto: action.payload }
        case 'modifica_edinome':
            return { ...state, ediNome: action.payload }
        case 'modifica_edisobrenome':
            return { ...state, ediSobrenome: action.payload }
        case 'modifica_edicpf':
            return { ...state, ediCpf: action.payload }
        case 'modifica_ediemail':
            return { ...state, ediEmail: action.payload }
        case 'modifica_edinomeUsuario':
            return { ...state, ediNomeUsuario: action.payload }
        case 'modifica_edisenha':
            return { ...state, ediSenha: action.payload }
        case 'modifica_edisenha2':
            return { ...state, ediSenha2: action.payload }
        case 'modifica_ediResidencia':
            return { ...state, ediResidencia: action.payload }
        case 'limpa_edicao':
            return {
                ...state, ediNome: '',
                ediSobrenome: '',
                ediCpf: '',
                ediEmail: '',
                ediNomeUsuario: '',
                ediSenha: '',
                ediSenha2: '',
                ediResidencia: { latitude: null, longitude: null }
            }
        case 'inicia_edicao':
            return {
                ...state, ediNome: state.nome,
                ediSobrenome: state.sobrenome,
                ediCpf: state.cpf,
                ediEmail: state.email,
                ediNomeUsuario: state.nomeUsuario,
                ediSenha: state.senha,
                ediSenha2: state.senha2,
                ediResidencia: state.residencia
            }
        case 'remocao_sucesso':
            return {
                ...state,
                id: '',
                nome: '',
                sobrenome: '',
                cpf: '',
                email: '',
                nomeUsuario: '',
                senha: '',
                senha2: '',
                residencia: { latitude: null, longitude: null },
                //para edição
                ediNome: '',
                ediSobrenome: '',
                ediCpf: '',
                ediEmail: '',
                ediNomeUsuario: '',
                ediSenha: '',
                ediSenha2: '',
                ediResidencia: { latitude: null, longitude: null }
            }
        case 'desconecta_usuario':
            return {
                ...state,
                id: '',
                nome: '',
                sobrenome: '',
                cpf: '',
                email: '',
                nomeUsuario: '',
                senha: '',
                senha2: '',
                residencia: { latitude: 0, longitude: 0 },
                //para edição
                ediNome: '',
                ediSobrenome: '',
                ediCpf: '',
                ediEmail: '',
                ediNomeUsuario: '',
                ediSenha: '',
                ediSenha2: '',
                ediResidencia: { latitude: 0, longitude: 0 }
            }
        case 'atenticacao_sucesso':
            return {
                ...state,
                id: action.id,
                foto: action.foto,
                nome: action.payload.nome,
                sobrenome: action.payload.sobrenome,
                cpf: action.payload.cpf,
                email: action.email,
                nomeUsuario: action.payload.nomeUsuario,
                senha: '',
                senha2: '',
                residencia: { latitude: action.payload.residencia.latitude, longitude: action.payload.residencia.longitude },
            }
        case 'igualaEdicaoFoto':
            return {
                ...state,
                ediFoto: state.foto
            }
        case 'atualiza_foto':
            return {
                ...state,
                foto: action.fotoUri,
                ediFoto: action.fotoUri
            }
        case 'atualiza_foto_falha':
            return {
                ...state,
                ediFoto: state.foto
            }
    }
    return state;
}